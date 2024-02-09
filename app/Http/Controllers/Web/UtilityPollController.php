<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\UtilityPollCollection;
use App\Http\Resources\UtilityPollResource;
use App\Models\RouteLine;
use App\Models\UtilityPoll;
use App\Models\Zonal;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UtilityPollController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $utilityPolls = UtilityPoll::latest()->with(['routeLine','createdBy','updatedBy'])->get();
        return Inertia::render('UtilityPolls/Index', ['utilityPolls' => $utilityPolls]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('UtilityPolls/Create', ['zonals' => Zonal::where('status',true)->get()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'pole' => ['required',Rule::unique('utility_polls','pole')],
            'line' => ['required'],
            'latitude' => ['required'],
            'longitude' => ['required'],
            'description' => ['required'],
            'status' => ['required'],
            'route_lines' => ['required'],
        ]);

        $data = [
            'pole' => $request->pole,
            'line' => $request->line,
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
        $zonals = Zonal::where('status',true)->get();
        $utilityPoll = UtilityPoll::where('id',$utilityPoll->id)->with(['routeLine','createdBy','updatedBy'])->first();
        $zonalRoute = RouteLine::where('zonal_id',$utilityPoll->routeLine->zonal->id)->get();
        return Inertia::render('UtilityPolls/Edit',['zonals' => $zonals,'utilityPoll' => $utilityPoll,'zonalRoute' => $zonalRoute]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UtilityPoll $utilityPoll)
    {
        $request->validate([
            'pole' => ['required',Rule::unique('utility_polls','pole')->ignore($utilityPoll->id)],
            'line' => ['required'],
            'latitude' => ['required'],
            'longitude' => ['required'],
            'description' => ['required'],
            'status' => ['required'],
            'route_lines' => ['required'],
        ]);

        $data = [
            'pole' => $request->pole,
            'line' => $request->line,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'description' => $request->description,
            'status' => $request->status,
            'route_line_id' => $request->route_lines,
            'updated_by' => auth()->user()->id,
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
        try {
            $utilityPoll->delete();
            return redirect()->back()->with('success', 'Utility Poll Delete successfully');
        } catch (\Throwable $th) {
            return redirect()->back()->with('danger', $th->getMessage());
        }
    }
}
