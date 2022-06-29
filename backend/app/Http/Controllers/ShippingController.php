<?php

namespace App\Http\Controllers;

use App\Http\Resources\ShippingResource;
use App\Models\Shipping;

use Illuminate\Http\Request;
use Validator;

class ShippingController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read shipping')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'shipping' => ShippingResource::collection(Shipping::all())
        ], 200);
    }

    /**
     * Display One shipping.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOne(Request $request)
    {

        if (auth()->user()->cannot('read shipping')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'shipping' => ShippingResource::collection(Shipping::where('id', $request->id)->get())
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
        if (auth()->user()->cannot('create shipping')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'from'  =>"required|string",
            'to'  =>"required|string",
            'amount' =>"required|integer",
            'type' =>"required|date",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $shipping = Shipping::create([
            'from'=>$request->from,
            'to'=>$request->to,
            'amount'=>$request->amount,
            'type'=>$request->type,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new ShippingResource($shipping), 201);
    
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
        if (auth()->user()->cannot('update shipping')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'from'  =>"required|string",
            'to'  =>"required|string",
            'amount' =>"required|integer",
            'type' =>"required|date",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = Shipping::where('id', $request->id)->update([
            'from'=>$request->from,
            'to'=>$request->to,
            'amount'=>$request->amount,
            'type'=>$request->type,
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
        if (auth()->user()->cannot('delete shipping')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = Shipping::where('id', $request->id)->delete();
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
