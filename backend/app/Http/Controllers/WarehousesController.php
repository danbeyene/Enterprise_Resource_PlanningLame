<?php

namespace App\Http\Controllers;
use App\Http\Resources\WarehousesResource;
use App\Models\Warehouses;

use Illuminate\Http\Request;
use Validator;

class WarehousesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read warehouses')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'warehouses' => WarehousesResource::collection(Warehouses::all())
        ], 200);
    }

    /**
     * Display One Warehouse.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOne(Request $request)
    {

        if (auth()->user()->cannot('read warehouses')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'warehouse' => WarehousesResource::collection(Warehouses::where('id', $request->id)->get())
        ], 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if (auth()->user()->cannot('create warehouses')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'capacity' =>"integer",
            'available_space' =>"integer",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $warehouses = Warehouses::create([
            'name'=>$request->name,
            'capacity'=>$request->capacity,
            'available_space'=>$request->available_space,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new WarehousesResource($warehouses), 201);
    
}
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        if (auth()->user()->cannot('update warehouses')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'capacity' =>"integer",
            'available_space' =>"integer",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = Warehouses::where('id', $request->id)->update([
            'name'=>$request->name,
            'capacity'=>$request->capacity,
            'available_space'=>$request->available_space,
            'user_id'=>$request->user_id,
        ]);
        return response()->json([
            'status' => $updated
        ], 200);
    }
}


    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if (auth()->user()->cannot('delete warehouses')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = Warehouses::where('id', $request->id)->delete();
        return response()->json([
            'status' => $deleted
        ], 200);
    }
    

    /**
     * Respond with error.
     *
     * @param  string  $message
     * @param  int  $code
     * @return \Illuminate\Http\Response
     */
    private function error($message, $code = 401){
        return response()->json([
            'message' => $message
        ], $code);
    }
}
