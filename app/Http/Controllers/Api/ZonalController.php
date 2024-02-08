<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ZonalCollection;
use App\Http\Resources\ZonalResource;
use App\Models\Zonal;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class ZonalController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
     return $this->sendSuccess('zonals collection',new ZonalCollection(Zonal::all()));   
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Zonal $zonal)
    {
        return $this->sendSuccess('zonals resource',new ZonalResource($zonal));   
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Zonal $zonal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Zonal $zonal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Zonal $zonal)
    {
        //
    }
}
