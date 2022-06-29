<?php

namespace App\Http\Controllers;

use App\Http\Resources\SalesOrderResource;
use App\Models\SalesOrder;

use Illuminate\Http\Request;
use Validator;

class SalesOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read salesOrder')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'salesOrder' => SalesOrderResource::collection(SalesOrder::all())
        ], 200);
    }

    /**
     * Display One salesOrder.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOne(Request $request)
    {

        if (auth()->user()->cannot('read salesOrder')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'salesOrder' => SalesOrderResource::collection(SalesOrder::where('id', $request->id)->get())
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
        if (auth()->user()->cannot('create salesOrder')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'product_name'  =>"required|string",
            'amount' =>"required|integer",
            'order_date' =>"required|date",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $salesOrder = SalesOrder::create([
            'product_name'=>$request->product_name,
            'amount'=>$request->amount,
            'order_date'=>$request->order_date,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new SalesOrderResource($salesOrder), 201);
    
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
        if (auth()->user()->cannot('update salesOrder')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'product_name'  =>"required|string",
            'amount' =>"required|integer",
            'order_date' =>"required|date",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = SalesOrder::where('id', $request->id)->update([
            'product_name'=>$request->product_name,
            'amount'=>$request->amount,
            'order_date'=>$request->order_date,
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
        if (auth()->user()->cannot('delete salesOrder')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = SalesOrder::where('id', $request->id)->delete();
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
