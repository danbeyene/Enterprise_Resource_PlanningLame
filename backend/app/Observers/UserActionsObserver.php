<?php

namespace App\Observers;

use Auth;
use App\Models\UserAction;
class UserActionsObserver
{

    public function created($model)
    {
        //
        if (Auth::check()) {
            UserAction::create([
                'user_id'      => Auth::user()->id,
                'action'       => 'created',
                'action_model' => $model->getTable(),
                'action_id'    => $model->id
            ]);
        }
    }


    public function updated($model)
    {
        //
        if (Auth::check()) {
            UserAction::create([
                'user_id'      => Auth::user()->id,
                'action'       => 'updated',
                'action_model' => $model->getTable(),
                'action_id'    => $model->id
            ]);
        }
    }

    public function deleted($model)
    {
        //
        if (Auth::check()) {
            UserAction::create([
                'user_id'      => Auth::user()->id,
                'action'       => 'deleted',
                'action_model' => $model->getTable(),
                'action_id'    => $model->id
            ]);
        }
    }

    public function restored($model)
    {
        //
        if (Auth::check()) {
            UserAction::create([
                'user_id'      => Auth::user()->id,
                'action'       => 'restored',
                'action_model' => $model->getTable(),
                'action_id'    => $model->id
            ]);
        }
    }

    public function forceDeleted(User $user)
    {
        //
        if (Auth::check()) {
            UserAction::create([
                'user_id'      => Auth::user()->id,
                'action'       => 'forceDeleted',
                'action_model' => $model->getTable(),
                'action_id'    => $model->id
            ]);
        }
    }
}
