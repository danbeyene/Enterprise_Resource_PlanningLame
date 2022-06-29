<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NewUserResource extends JsonResource
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
            "email" => $this->email,
            "phone_number" => $this->phone_number,
            "start_date" => $this->start_date,
            "department" => $this->department,
            "position" => $this->position,
            "salary" => $this->salary,
            "stop_date" => $this->stop_date,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
