<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SalesOrderResource extends JsonResource
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
            "product_name" => $this->product_name,
            "amount" => $this->amount,
            "order_date" => $this->order_date,
            "user" => new UserSimpleResource($this->user),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
