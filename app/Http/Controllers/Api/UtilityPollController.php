<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UtilityPollStoreRequest;
use App\Http\Requests\Api\UtilityPollUpdateRequest;
use App\Http\Resources\UtilityPollCollection;
use App\Http\Resources\UtilityPollResource;
use App\Models\UtilityPoll;
use App\Traits\HttpResponses;
use App\Traits\ImageManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;


class UtilityPollController extends Controller
{
    use HttpResponses,ImageManager;
    
    public function index()
    {
        $utilityPolls = (Auth::user()->id != 1) ? UtilityPoll::latest()->get() : UtilityPoll::where('created_by', Auth::user()->id)->OrWhere('updated_by', Auth::user()->id)->latest()->get();
        return $this->sendSuccess('utility collection', new UtilityPollCollection($utilityPolls));
    }

    public function create(Request $request)
    {

    }

    public function store(UtilityPollStoreRequest $request)
    {
        // dd($request->all());
        
        try {

            $path = public_path('/images');
            !is_dir($path) && mkdir($path, 0777, true);

            $file = $request->file('pole_img');
            $extenstion = $file->getClientOriginalExtension();
            $filename = time().'.'.$extenstion;
            $file->move($path, $filename);

            $data = [
                'pole_img' => "images/".$filename,
                'latitude' => $request->latitude,
                'longitude' => $request->longitude,
                'created_by' => auth()->user()->id,
            ];

            $utilityPoll = UtilityPoll::create($data);

            return $this->sendSuccess('utility resource create successfully', new UtilityPollResource($utilityPoll));

        } catch (\Exception $e) {

            return $this->sendError('error', ['error' => $e->getMessage()], 500);
        }
    }

    public function show(UtilityPoll $utilityPoll)
    {
        return $this->sendSuccess('utility resource', new UtilityPollResource($utilityPoll));
    }

    public function edit(UtilityPoll $utilityPoll)
    {
        return $this->sendSuccess('utility resource', ['utilityPoll' => new UtilityPollResource($utilityPoll)]);
    }

    public function update(UtilityPollUpdateRequest $request, UtilityPoll $utilityPoll)
    {
        $data = [
            'pole_img' => $request->pole,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'updated_by' => auth()->user()->id,
        ];

        $path = storage_path('images/');
        !is_dir($path) &&
            mkdir($path, 0777, true);

        try {
            $utilityPoll->update($data);

            return $this->sendSuccess('utility resource update successfully', new UtilityPollResource($utilityPoll));
        } catch (\Exception $e) {
            return $this->sendError('error', ['error' => $e->getMessage()], 500);
        }
    }

    public function destroy(UtilityPoll $utilityPoll)
    {
        try {
            $utilityPoll->delete();
            return $this->sendSuccess('utility resource delete successfully', new UtilityPollResource($utilityPoll));
        } catch (\Exception $e) {
            return $this->sendError('error', ['error' => $e->getMessage()], 500);
        }
    }
}
