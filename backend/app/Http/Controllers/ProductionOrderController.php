<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductionOrderResource;
use App\Models\ProductionOrder;

use Illuminate\Http\Request;
use Validator;

class ProductionOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read productionOrder')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'productionOrder' => ProductionOrderResource::collection(ProductionOrder::all())
        ], 200);
    }

    /**
     * Display One productionOrder.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOne(Request $request)
    {

        if (auth()->user()->cannot('read productionOrder')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'productionOrder' => ProductionOrderResource::collection(ProductionOrder::where('id', $request->id)->get())
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
        if (auth()->user()->cannot('create productionOrder')) {
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
        $productionOrder = ProductionOrder::create([
            'product_name'=>$request->product_name,
            'amount'=>$request->amount,
            'order_date'=>$request->order_date,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new ProductionOrderResource($productionOrder), 201);
    
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
        if (auth()->user()->cannot('update productionOrder')) {
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
        $updated = ProductionOrder::where('id', $request->id)->update([
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
        if (auth()->user()->cannot('delete productionOrder')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = ProductionOrder::where('id', $request->id)->delete();
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
