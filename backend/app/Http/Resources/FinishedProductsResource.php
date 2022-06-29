<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FinishedProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "serial_number" => $this->serial_number,
            "type" => $this->type,
            "MD" => $this->MD,
            "EXD" => $this->EXD,
            "price" => $this->price,
            "warehouse" => $this->warehouse,
            "place" => $this->place,
            "sold" => $this->sold,
            "user" => new UserSimpleResource($this->user),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
