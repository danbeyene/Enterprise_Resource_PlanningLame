<?php

namespace App\Http\Controllers;

use App\Http\Resources\RawMaterialResource;
use App\Models\RawMaterial;
use Illuminate\Http\Request;
use Validator;
class RawMaterialController extends Controller
{

//total amount of specfic rawmaterial
    public function total(Request $request)
    {

        if (auth()->user()->cannot('read rawMaterial')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
         $total = RawMaterial::where('name', $request->name)->sum('amount');

        //return response($total);
        return response()->json($total, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read rawMaterial')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rawmaterial = RawMaterial::all();
        return response()->json([
            'rawMaterials' => RawMaterialResource::collection($rawmaterial)
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

        if (auth()->user()->cannot('read rawMaterial')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'rawMaterial' => RawMaterialResource::collection(RawMaterial::where('id', $request->id)->get())
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
        if (auth()->user()->cannot('create rawMaterial')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'amount' =>"required|integer",
            'place' =>"required|string",
            'purchased_date' =>"required|date",
            'shipped_out_date' =>"required|date",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $rawMaterial = RawMaterial::create([
            'name'=>$request->name,
            'amount'=>$request->amount,
            'place'=>$request->place,
            'purchased_date'=>$request->purchased_date,
            'shipped_out_date'=>$request->shipped_out_date,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new RawMaterialResource($rawMaterial), 201);
    
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
        if (auth()->user()->cannot('update rawMaterial')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'amount' =>"required|integer",
            'place' =>"required|integer",
            'purchased_date' =>"required|date",
            'shipped_out_date' =>"required|date",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = RawMaterial::where('id', $request->id)->update([
            'name'=>$request->name,
            'amount'=>$request->amount,
            'place'=>$request->place,
            'purchased_date'=>$request->purchased_date,
            'shipped_out_date'=>$request->shipped_out_date,
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
        if (auth()->user()->cannot('delete rawMaterial')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = RawMaterial::where('id', $request->id)->delete();
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
