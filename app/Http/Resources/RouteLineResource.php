<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RouteLineResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'zonal' => [
                'id' => $this->zonal->id,
                'name' => $this->zonal->name,
                'description' => $this->zonal->description,
                'status' => $this->zonal->status,
            ],
            'name' => $this->name,
            'description' => $this->description,
            'utilityPoll' => new UtilityPollCollection($this->utilityPolls)
        ];
    }
}
