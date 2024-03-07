<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\UtilityPoll;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UtilityPollController extends Controller
{
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $utilityPolls = UtilityPoll::latest()->with(['createdBy', 'updatedBy'])->get();
        return Inertia::render('UtilityPolls/Index', ['utilityPolls' => $utilityPolls]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
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
        // 
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UtilityPoll $utilityPoll)
    {
        // 
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
