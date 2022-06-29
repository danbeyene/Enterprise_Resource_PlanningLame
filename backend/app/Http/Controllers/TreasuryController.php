<?php

namespace App\Http\Controllers;
use App\Http\Resources\TreasuryResource;
use App\Models\FinishedProducts;
use App\Models\Treasury;
use Carbon\Carbon;
use Validator;

use Illuminate\Http\Request;

class TreasuryController extends Controller
{

    //display the net money the company have
    public function profit(Request $request)
    {

        if (auth()->user()->cannot('read treasury')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
         $today = Carbon::now()->toDateString();

         $payable = Treasury::where([['account_type','=', 'payable'],['submission_date','=', $today]])->sum('cost');
         $recievable = Treasury::where([['account_type','=', 'receivable'],['submission_date','=', $today]])->sum('cost');
         //get expired product

         $expired = FinishedProducts::get()->where('$today', '<', 'EXD')->sum('price');
        // calculate profit
        $profit = $recievable - $payable - $expired;
        return response()->json($profit, 200);
    }
    //display the net money the company have
    public function netMoney(Request $request)
    {

        if (auth()->user()->cannot('read treasury')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
         $netMoney = Treasury::all()->sum('cost');

        //return response($total);
        return response()->json($netMoney, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read treasury')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'treasuries' => TreasuryResource::collection(Treasury::all())
        ], 200);
    }
        /**
     * Display One treasury.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOne(Request $request)
    {

        if (auth()->user()->cannot('read treasury')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'treasury' => TreasuryResource::collection(Treasury::where('id', $request->id)->get())
        ], 200);
    }

        /**
     * Display a listing of account
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function account(Request $request)
    {

        if (auth()->user()->cannot('read treasury')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'treasuries' => TreasuryResource::collection(Treasury::where('account_type', $request->account_type)->get())
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
        if (auth()->user()->cannot('create treasury')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'submission_date' =>"required|date",
            'account_type' =>"required|string",
            'cost' =>"required|numeric",
            'amount'  =>"required|integer",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $treasury = Treasury::create([
            'name'=>$request->name,
            'submission_date'=>$request->submission_date,
            'account_type'=>$request->account_type,
            'cost'=>$request->cost,
            'amount'=>$request->amount,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new TreasuryResource($treasury), 201);
    
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
        if (auth()->user()->cannot('update treasury')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'submission_date' =>"required|date",
            'account_type' =>"required|string",
            'cost' =>"required|numeric",
            'amount'  =>"required|integer",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = Treasury::where('id', $request->id)->update([
            'name'=>$request->name,
            'submission_date'=>$request->submission_date,
            'account_type'=>$request->account_type,
            'cost'=>$request->cost,
            'amount'=>$request->amount,
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
        if (auth()->user()->cannot('delete treasury')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = Treasury::where('id', $request->id)->delete();
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
