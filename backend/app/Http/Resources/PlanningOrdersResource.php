<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanningOrdersResource extends JsonResource
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
            "plan" => $this->plan,
            "order_date" => $this->order_date,
            "department_name" => $this->department_name,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
