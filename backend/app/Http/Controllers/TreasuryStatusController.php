<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserAction;

class TreasuryStatusController extends Controller
{
    /**
     * Display a listing of treasury status.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {

        if (auth()->user()->cannot('read treasuryStatus')) {
            return $this->error('Unauthorized, you don\'t have access.');
        }
        return response()->json([
            'treasuryStatus' => UserAction::all()
        ], 200);
    }
}
