<?php

namespace App\Http\Controllers;
use App\Http\Resources\ProductionMachineryResource;
use App\Models\ProductionMachinery;

use Illuminate\Http\Request;
use Validator;

class ProductionMachineryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read productionMachinery')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'productionMachinerys' => ProductionMachineryResource::collection(ProductionMachinery::all())
        ], 200);
    }
        /**
     * Display One production machinery.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOne(Request $request)
    {

        if (auth()->user()->cannot('read productionMachinery')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'productionMachinery' => ProductionMachineryResource::collection(ProductionMachinery::where('id', $request->id)->get())
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
        if (auth()->user()->cannot('create productionMachinery')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'machine_id' =>"required|string",
            'department' =>"string",
            'operator_id' =>"string",
            'cost' =>"numeric",
            'start_date'  =>"date",
            'stop_date'  =>"date",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $productionMachinery = ProductionMachinery::create([
            'name'=>$request->name,
            'machine_id'=>$request->machine_id,
            'department'=>$request->department,
            'operator_id'=>$request->operator_id,
            'cost'=>$request->cost,
            'start_date'=>$request->start_date,
            'stop_date'=>$request->stop_date,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new ProductionMachineryResource($productionMachinery), 201);
    
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
        if (auth()->user()->cannot('update productionMachinery')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'machine_id' =>"required|string",
            'department' =>"string",
            'operator_id' =>"string",
            'cost' =>"numeric",
            'start_date'  =>"date",
            'stop_date'  =>"date",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = ProductionMachinery::where('id', $request->id)->update([
            'name'=>$request->name,
            'machine_id'=>$request->machine_id,
            'department'=>$request->department,
            'operator_id'=>$request->operator_id,
            'cost'=>$request->cost,
            'start_date'=>$request->start_date,
            'stop_date'=>$request->stop_date,
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
        if (auth()->user()->cannot('delete productionMachinery')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = ProductionMachinery::where('id', $request->id)->delete();
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
