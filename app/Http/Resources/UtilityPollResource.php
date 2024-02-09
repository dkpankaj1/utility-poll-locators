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
            'title' => $this->title,
            'landmarks' => $this->landmarks,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'description' => $this->description,
            'status' => $this->status,
            'route_line_id' => $this->routeLine->name,
            'created_by' => $this->createBy->name,
            'updated_by' => $this->updateBy->name,

        ];
    }
}
