<?php

namespace App\Http\Controllers;

use App\Http\Resources\AttendanceResource;
use App\Models\Attendance;

use Illuminate\Http\Request;
use Validator;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read attendance')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'attendance' => AttendanceResource::collection(Attendance::all())
        ], 200);
    }
       /**
     * Display all Attendance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getAttendanceInOneDate($date)
    {

        if (auth()->user()->cannot('read attendance')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json(Attendance::join('employees','employees.id','=','attendances.employee_id')->select('attendances.*','employees.name')->where('att_date','=', $date)->get());
    }
    
   /**
     * Display present Attendance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getPresentAttendance($date)
    {

        if (auth()->user()->cannot('read attendance')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json(Attendance::join('employees','employees.id','=','attendances.employee_id')->select('attendances.*','employees.name')->where([['att_date','=', $date], ['attendance', '=', '1']])->get());
    }
    /**
     * Display absent Attendance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getAbsentAttendance($date)
    {

        if (auth()->user()->cannot('read attendance')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json(Attendance::join('employees','employees.id','=','attendances.employee_id')->select('attendances.*','employees.name')->where([['att_date','=', $date], ['attendance', '=', '0']])->get());
    }


    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if (auth()->user()->cannot('create attendance')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'employee_id'  =>"required|integer",
            'att_date' =>"required|date",
            'attendance' =>"required|boolean",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $attendance = Attendance::create([
            'employee_id'=>$request->employee_id,
            'att_date'=>$request->att_date,
            'attendance'=>$request->attendance,
            'user_id'=>$request->user_id,
        ]);
        return response()->json(new WarehousesResource($attendance), 201);
    
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
        if (auth()->user()->cannot('update attendance')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $rules=array(
            'employee_id'  =>"required|integer",
            'att_date' =>"required|date",
            'attendance' =>"required|boolean",
            'user_id' =>"integer",
        );
        $validator=Validator::make($request->all(),$rules);
        if($validator->fails())
        {
            return $validator->errors();
        }
        else{
        $updated = Attendance::where('id', $request->id)->update([
            'employee_id'=>$request->employee_id,
            'att_date'=>$request->att_date,
            'attendance'=>$request->attendance,
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
        if (auth()->user()->cannot('delete attendance')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        $deleted = Attendance::where('id', $request->id)->delete();
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
