<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\UtilityPollCollection;
use App\Http\Resources\UtilityPollResource;
use App\Models\RouteLine;
use App\Models\UtilityPoll;
use App\Models\Zonal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UtilityPollController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $utilityPolls = UtilityPoll::with(['routeLine','createdBy','updateBy'])->get();
        return Inertia::render('UtilityPolls/Index', ['utilityPolls' => $utilityPolls]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('UtilityPolls/Create', ['zonals' => Zonal::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required'],
            'landmark' => ['required'],
            'latitude' => ['required'],
            'longitude' => ['required'],
            'description' => ['required'],
            'status' => ['required'],
            'route_lines' => ['required'],
        ]);

        $data = [
            'title' => $request->title,
            'landmarks' => $request->landmark,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'description' => $request->description,
            'status' => $request->status,
            'route_line_id' => $request->route_lines,
            'created_by' => auth()->user()->id,
        ];

        try {
           UtilityPoll::create($data);
            return redirect()->route('utility-polls.index')->with('success', 'Utility Poll created successfully');
        } catch (\Exception $e) {
            return redirect()->back()->with('danger', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(UtilityPoll $utilityPoll)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UtilityPoll $utilityPoll)
    {
        $zonals = Zonal::all();
        $utilityPoll = $utilityPoll->with(['routeLine','createdBy','updateBy'])->first();
        $zonalRoute = RouteLine::where('zonal_id',$utilityPoll->routeLine->zonal->id)->get();
        return Inertia::render('UtilityPolls/Edit',['zonals' => $zonals,'utilityPoll' => $utilityPoll,'zonalRoute' => $zonalRoute]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UtilityPoll $utilityPoll)
    {
        $request->validate([
            'title' => ['required'],
            'landmark' => ['required'],
            'latitude' => ['required'],
            'longitude' => ['required'],
            'description' => ['required'],
            'status' => ['required'],
            'route_lines' => ['required'],
        ]);

        $data = [
            'title' => $request->title,
            'landmarks' => $request->landmark,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'description' => $request->description,
            'status' => $request->status,
            'route_line_id' => $request->route_lines,
            'created_by' => auth()->user()->id,
        ];

        try {
           $utilityPoll->update($data);
            return redirect()->route('utility-polls.index')->with('success', 'Utility Poll Update successfully');
        } catch (\Exception $e) {
            return redirect()->back()->with('danger', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UtilityPoll $utilityPoll)
    {
        //
    }
}
