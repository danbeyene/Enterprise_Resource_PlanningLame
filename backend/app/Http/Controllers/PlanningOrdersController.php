<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlanningOrdersResource;
use App\Models\PlanningOrders;

use Illuminate\Http\Request;
use Validator;

class PlanningOrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read planningOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'planningOrders' => PlanningOrdersResource::collection(PlanningOrders::all())
        ], 200);
    }

    /**
     * Display One planningOrder.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOne(Request $request)
    {

        if (auth()->user()->cannot('read planningOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'planningOrders' => PlanningOrdersResource::collection(PlanningOrders::where('id', $request->id)->get())
        ], 200);
    }
        /**
     * Display One plan for each department.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getdepartmentPlan(Request $request)
    {
        if (auth()->user()->cannot('read planningOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'planningOrders' => PlanningOrders::where('department_name', $request->department_name)->get()
        ], 200);
    }

            /**
     * Display One plan for each department.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getAdminPlan(Request $request)
    {
        if (auth()->user()->cannot('read adminPlan')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'planningOrders' => PlanningOrders::where('department_name', $request->department_name)->get()
        ], 200);
    }

            /**
     * Display One plan for each department.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getGLPlan(Request $request)
    {
        if (auth()->user()->cannot('read glPlan')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'planningOrders' => PlanningOrders::where('department_name', $request->department_name)->get()
        ], 200);
    }

            /**
     * Display One plan for each department.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getPurchasePlan(Request $request)
    {
        if (auth()->user()->cannot('read purchasePlan')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'planningOrders' => PlanningOrders::where('department_name', $request->department_name)->get()
        ], 200);
    }

            /**
     * Display One plan for each department.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getSalesPlan(Request $request)
    {
        if (auth()->user()->cannot('read salesPlan')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'planningOrders' => PlanningOrders::where('department_name', $request->department_name)->get()
        ], 200);
    }

            /**
     * Display One plan for each department.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getProductionPlan(Request $request)
    {
        if (auth()->user()->cannot('read productionPlan')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'planningOrders' => PlanningOrders::where('department_name', $request->department_name)->get()
        ], 200);
    }

            /**
     * Display One plan for each department.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getInventoryPlan(Request $request)
    {
        if (auth()->user()->cannot('read inventoryPlan')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'planningOrders' => PlanningOrders::where('department_name', $request->department_name)->get()
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
        if (auth()->user()->cannot('create planningOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'plan'  =>"required|string",
            'order_date' =>"required|date",
            'department_name' =>"string",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $planningOrders = PlanningOrders::create([
            'plan'=>$request->plan,
            'order_date'=>$request->order_date,
            'department_name'=>$request->department_name,
        ]);
        return response()->json(new PlanningOrdersResource($planningOrders), 201);
    
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
        if (auth()->user()->cannot('update planningOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'plan'  =>"required|string",
            'order_date' =>"required|date",
            'department_name' =>"string",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = PlanningOrders::where('id', $request->id)->update([
            'plan'=>$request->plan,
            'order_date'=>$request->order_date,
            'department_name'=>$request->department_name,
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
        if (auth()->user()->cannot('delete planningOrders')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = PlanningOrders::where('id', $request->id)->delete();
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
