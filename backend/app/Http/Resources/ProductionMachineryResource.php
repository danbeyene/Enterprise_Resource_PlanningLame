<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductionMachineryResource extends JsonResource
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
            "machine_id" => $this->machine_id,
            "department" => $this->purchased_date,
            "shipped_out_date" => $this->shipped_out_date,
            "operator_id" => $this->operator_id,
            "cost" => $this->cost,
            "start_date" => $this->start_date,
            "stop_date" => $this->stop_date,
            "user" => new UserSimpleResource($this->user),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
