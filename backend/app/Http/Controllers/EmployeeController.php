<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Models\Employee;

use Illuminate\Http\Request;
use Validator;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read employee')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
         $employee = Employee::all();
        // return response()->json([
        //     'users' => UserResource::collection($user)
        // ], 200)->withHeaders(['X-Total-Count' => $user->count()]);

        return response($employee);
    }
    public function current(Request $request) {
        if (auth()->user()->cannot('read employee')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
         $employee = Employee::where('current', $request->current)->get();
        // return response()->json([
        //     'users' => UserResource::collection($user)
        // ], 200)->withHeaders(['X-Total-Count' => $user->count()]);

        return response($employee);
    }

    public function find(Request $request) {
        if (auth()->user()->cannot('read employee')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
         $employee = Employee::where('id', $request->id)->get();
        // return response()->json([
        //     'users' => UserResource::collection($user)
        // ], 200)->withHeaders(['X-Total-Count' => $user->count()]);

        return response($employee);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if (auth()->user()->cannot('create employee')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'email'  =>"required|string|email",
            'password' =>"required|string",
            'phone_number' =>"string",
            'current' =>"required|boolean",
            'start_date' =>"required|date",
            'department' =>"required|string",
            'position' =>"required|string",
            'salary' =>"required|numeric",
            'stop_date'  =>"date",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $employee = Employee::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
            'phone_number'=>$request->phone_number,
            'current'=>$request->current,
            'start_date'=>$request->start_date,
            'department'=>$request->department,
            'position'=>$request->position,
            'salary'=>$request->salary,
            'stop_date'=>$request->stop_date
        ]);
        return response()->json(new EmployeeResource($employee), 201);
    
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
        if (auth()->user()->cannot('update employee')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'name'  =>"required|string",
            'email'  =>"required|string|email",
            'password' =>"required|string",
            'phone_number' =>"string",
            'current' =>"required|boolean",
            'start_date' =>"required|date",
            'department' =>"required|string",
            'position' =>"required|string",
            'salary' =>"required|numeric",
            'stop_date'  =>"date",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = Employee::where('id', $request->id)->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
            'phone_number'=>$request->phone_number,
            'current'=>$request->current,
            'start_date'=>$request->start_date,
            'department'=>$request->department,
            'position'=>$request->position,
            'salary'=>$request->salary,
            'stop_date'=>$request->stop_date,
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
        if (auth()->user()->cannot('delete employee')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = Employee::where('id', $request->id)->delete();
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
