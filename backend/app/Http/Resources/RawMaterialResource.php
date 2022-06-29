<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RawMaterialResource extends JsonResource
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
            "name" => $this->name,
            "amount" => $this->amount,
            "place" => $this->place,
            "purchased_date" => $this->purchased_date,
            "shipped_out_date" => $this->shipped_out_date,
            "user" => new UserSimpleResource($this->user),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
