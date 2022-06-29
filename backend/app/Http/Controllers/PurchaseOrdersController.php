<?php

namespace App\Http\Controllers;

use App\Http\Resources\PurchaseOrdersResource;
use App\Models\PurchaseOrders;

use Illuminate\Http\Request;
use Validator;

class PurchaseOrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read purchaseOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'purchaseOrders' => PurchaseOrdersResource::collection(PurchaseOrders::all())
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

        if (auth()->user()->cannot('read purchaseOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'purchaseOrders' => PurchaseOrdersResource::collection(PurchaseOrders::where('id', $request->id)->get())
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
        if (auth()->user()->cannot('create purchaseOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'rawmaterial_name'  =>"required|string",
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
        $purchaseOrders = PurchaseOrders::create([
            'rawmaterial_name'=>$request->rawmaterial_name,
            'amount'=>$request->amount,
            'order_date'=>$request->order_date,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new PurchaseOrdersResource($purchaseOrders), 201);
    
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
        if (auth()->user()->cannot('update purchaseOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'rawmaterial_name'  =>"required|string",
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
        $updated = PurchaseOrders::where('id', $request->id)->update([
            'rawmaterial_name'=>$request->rawmaterial_name,
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
        if (auth()->user()->cannot('delete purchaseOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = PurchaseOrders::where('id', $request->id)->delete();
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
