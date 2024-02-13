<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UtilityPollStoreRequest;
use App\Http\Requests\Api\UtilityPollUpdateRequest;
use App\Http\Resources\UtilityPollCollection;
use App\Http\Resources\UtilityPollResource;
use App\Http\Resources\ZonalCollection;
use App\Models\UtilityPoll;
use App\Models\Zonal;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UtilityPollController extends Controller
{
    use HttpResponses;
    public function index()
    {
        $utilityPolls = (Auth::user()->id != 1) ? UtilityPoll::latest()->get() : UtilityPoll::where('created_by',Auth::user()->id)->OrWhere('updated_by',Auth::user()->id)->latest()->get();
        return $this->sendSuccess('utility collection',new UtilityPollCollection($utilityPolls));
    }

    public function create(Request $request)
    {
        
    }

    public function store(UtilityPollStoreRequest $request)
    {
        $data = [
            'pole' => $request->pole,
            'line' => $request->line,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'description' => $request->description,
            'status' => $request->status,
            'route_line_id' => $request->route_line_id,
            'created_by' => auth()->user()->id,
        ];

        try {

           $utilityPoll = UtilityPoll::create($data);

           return $this->sendSuccess('utility resource create successfully',new UtilityPollResource($utilityPoll));

        } catch (\Exception $e) {

            return $this->sendError('error', ['error' => $e->getMessage()], 500);
        }
    }

    public function show(UtilityPoll $utilityPoll)
    {
        return $this->sendSuccess('utility resource',new UtilityPollResource($utilityPoll));
    }

    public function edit(UtilityPoll $utilityPoll)
    {
        return $this->sendSuccess('utility resource',['utilityPoll' => new UtilityPollResource($utilityPoll),'zonals' => new ZonalCollection(Zonal::where('status',true)->get())]);
    }

    public function update(UtilityPollUpdateRequest $request, UtilityPoll $utilityPoll)
    {
        $data = [
            'pole' => $request->pole,
            'line' => $request->line,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'description' => $request->description,
            'status' => $request->status,
            'route_line_id' => $request->route_line_id,
            'updated_by' => auth()->user()->id,
        ];

        try {
           $utilityPoll->update($data);

           return $this->sendSuccess('utility resource update successfully',new UtilityPollResource($utilityPoll));
        } catch (\Exception $e) {
            return $this->sendError('error', ['error' => $e->getMessage()], 500);
        }
    }
    
    public function destroy(UtilityPoll $utilityPoll)
    {
        try { 
            $utilityPoll->delete();
            return $this->sendSuccess('utility resource delete successfully',new UtilityPollResource($utilityPoll));
         } catch (\Exception $e) {
             return $this->sendError('error', ['error' => $e->getMessage()], 500);
         }
    }
}
