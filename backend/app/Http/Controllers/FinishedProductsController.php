<?php

namespace App\Http\Controllers;
use App\Http\Resources\FinishedProductsResource;
use App\Models\FinishedProducts;

use Illuminate\Http\Request;
use Validator;

class FinishedProductsController extends Controller
{

    //total amount of specfic finished product
    public function total(Request $request)
    {

        if (auth()->user()->cannot('read finishedProducts')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
         $total = FinishedProducts::where('type', $request->type)->sum('price');

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

        if (auth()->user()->cannot('read finishedProducts')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'finishedProducts' => FinishedProductsResource::collection(FinishedProducts::all())
        ], 200);
    }
        /**
     * Display One .
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOne(Request $request)
    {

        if (auth()->user()->cannot('read finishedProducts')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'finishedProducts' => FinishedProductsResource::collection(FinishedProducts::where('id', $request->id)->get())
        ], 200);
    }
    public function sold(Request $request)
    {

        if (auth()->user()->cannot('read finishedProducts')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'finishedProducts' => FinishedProductsResource::collection(FinishedProducts::where('sold', $request->sold)->get())
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
        if (auth()->user()->cannot('create finishedProducts')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }

        $rules=array(
            'serial_number'  =>"required|string",
            'type' =>"string",
            'MD' =>"required|date",
            'EXD' =>"required|date",
            'price' =>"required|numeric",
            'place' =>"required|string",
            'sold' =>"required|boolean",
            'warehouse'  =>"string",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $finishedProducts = FinishedProducts::create([
            'serial_number'=>$request->serial_number,
            'type'=>$request->type,
            'MD'=>$request->MD,
            'EXD'=>$request->EXD,
            'price'=>$request->price,
            'warehouse'=>$request->warehouse,
            'place'=>$request->place,
            'sold'=>$request->sold,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new FinishedProductsResource($finishedProducts), 201);
    
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
        if (auth()->user()->cannot('update finishedProducts')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }

        $rules=array(
            'serial_number'  =>"required|string",
            'type' =>"string",
            'MD' =>"required|date",
            'EXD' =>"required|date",
            'price' =>"required|numeric",
            'warehouse'  =>"string",
            'place' =>"required|string",
            'sold' =>"required|boolean",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = FinishedProducts::where('id', $request->id)->update([
            'serial_number'=>$request->serial_number,
            'type'=>$request->type,
            'MD'=>$request->MD,
            'EXD'=>$request->EXD,
            'price'=>$request->price,
            'warehouse'=>$request->warehouse,
            'place'=>$request->place,
            'sold'=>$request->sold,
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
        if (auth()->user()->cannot('delete finishedProducts')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = FinishedProducts::where('id', $request->id)->delete();
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
