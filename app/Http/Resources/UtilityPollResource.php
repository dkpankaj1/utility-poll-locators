<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UtilityPollResource extends JsonResource
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
            'pole' => $this->pole,
            'line' => $this->line,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'description' => $this->description,
            'status' => $this->status,
            'route_line' => [
                'id' => $this->routeLine->id,
                'zonal' => [
                    'id' => $this->routeLine->zonal->id,
                    'name' =>$this->routeLine->zonal->name,
                    'description' => $this->routeLine->zonal->description,
                    'status' =>$this->routeLine->zonal->status,
                ],
                'name' =>$this->routeLine->name,
                'description' => $this->routeLine->description,
            ]
        ];
    }
}
