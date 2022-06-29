<?php

//use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\RawMaterialController;
use App\Http\Controllers\FinishedProductsController;
use App\Http\Controllers\ProductionMachineryController;
use App\Http\Controllers\TreasuryController;
use App\Http\Controllers\WarehousesController;
use App\Http\Controllers\ShippingController;
use App\Http\Controllers\SalesOrderController;
use App\Http\Controllers\PurchaseOrdersController;
use App\Http\Controllers\ProductionOrderController;
use App\Http\Controllers\PlanningOrdersController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\TreasuryStatusController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix' => 'auth'], function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/login', [AuthController::class, 'signIn']);
    Route::post('/logout', [AuthController::class, 'signOut']);
});
Route::group(['prefix' => 'users', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [UsersController::class, 'get']);
    Route::get('/{id}', [UsersController::class, 'find']);
    Route::post('/', [UsersController::class, 'create']);
    Route::put('/{id}', [UsersController::class, 'update']);
    Route::delete('/{id}', [UsersController::class, 'destroy']);
});

Route::group(['prefix' => 'employees', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [EmployeeController::class, 'get']);
    Route::get('/current/{current}', [EmployeeController::class, 'current']);
    Route::get('/{id}', [EmployeeController::class, 'find']);
    Route::post('/', [EmployeeController::class, 'create']);
    Route::put('/{id}', [EmployeeController::class, 'update']);
    Route::delete('/{id}', [EmployeeController::class, 'destroy']);
});

Route::group(['prefix' => 'rawmaterial', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/total/{name}', [RawMaterialController::class, 'total']);
    Route::get('/', [RawMaterialController::class, 'get']);
    Route::get('/{id}', [RawMaterialController::class, 'getOne']);
    Route::post('/', [RawMaterialController::class, 'create']);
    Route::put('/{id}', [RawMaterialController::class, 'update']);
    Route::delete('/{id}', [RawMaterialController::class, 'destroy']);
});

Route::group(['prefix' => 'finishedproducts', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/total/{type}', [FinishedProductsController::class, 'total']);
    Route::get('/', [FinishedProductsController::class, 'get']);
    Route::get('/{id}', [FinishedProductsController::class, 'getOne']);
    Route::get('/sold/{sold}', [FinishedProductsController::class, 'sold']);
    Route::post('/', [FinishedProductsController::class, 'create']);
    Route::put('/{id}', [FinishedProductsController::class, 'update']);
    Route::delete('/{id}', [FinishedProductsController::class, 'destroy']);
});

Route::group(['prefix' => 'productionmachinery', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [ProductionMachineryController::class, 'get']);
    Route::get('/{id}', [ProductionMachineryController::class, 'getOne']);
    Route::post('/', [ProductionMachineryController::class, 'create']);
    Route::put('/{id}', [ProductionMachineryController::class, 'update']);
    Route::delete('/{id}', [ProductionMachineryController::class, 'destroy']);
});

Route::group(['prefix' => 'treasury', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [TreasuryController::class, 'get']);
    Route::get('/{id}', [TreasuryController::class, 'getOne']);
    Route::get('/net/all', [TreasuryController::class, 'netMoney']);
    Route::get('/profit/today', [TreasuryController::class, 'profit']);
    Route::get('/account/{account_type}', [TreasuryController::class, 'account']);
    Route::post('/', [TreasuryController::class, 'create']);
    Route::put('/{id}', [TreasuryController::class, 'update']);
    Route::delete('/{id}', [TreasuryController::class, 'destroy']);
});

Route::group(['prefix' => 'treasurystatus', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [TreasuryStatusController::class, 'get']);

});

Route::group(['prefix' => 'warehouses', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [WarehousesController::class, 'get']);
    Route::get('/{id}', [WarehousesController::class, 'getOne']);
    Route::post('/', [WarehousesController::class, 'create']);
    Route::put('/{id}', [WarehousesController::class, 'update']);
    Route::delete('/{id}', [WarehousesController::class, 'destroy']);
    
});

Route::group(['prefix' => 'attendance', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [AttendanceController::class, 'get']);
    Route::get('/{date}', [AttendanceController::class, 'getAttendanceInOneDate']);
    Route::get('/present/{date}', [AttendanceController::class, 'getPresentAttendance']);
    Route::get('/absent/{date}', [AttendanceController::class, 'getAbsentAttendance']);
    Route::post('/', [AttendanceController::class, 'create']);
    Route::put('/{id}', [AttendanceController::class, 'update']);
    Route::delete('/{id}', [AttendanceController::class, 'destroy']);
    
});

Route::group(['prefix' => 'shipping', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [ShippingController::class, 'get']);
    Route::get('/{id}', [ShippingController::class, 'getOne']);
    Route::post('/', [ShippingController::class, 'create']);
    Route::put('/{id}', [ShippingController::class, 'update']);
    Route::delete('/{id}', [ShippingController::class, 'destroy']);
});
Route::group(['prefix' => 'salesorder', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [SalesOrderController::class, 'get']);
    Route::get('/{id}', [SalesOrderController::class, 'getOne']);
    Route::post('/', [SalesOrderController::class, 'create']);
    Route::put('/{id}', [SalesOrderController::class, 'update']);
    Route::delete('/{id}', [SalesOrderController::class, 'destroy']);
});
Route::group(['prefix' => 'purchaseorder', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [PurchaseOrdersController::class, 'get']);
    Route::get('/{id}', [PurchaseOrdersController::class, 'getOne']);
    Route::post('/', [PurchaseOrdersController::class, 'create']);
    Route::put('/{id}', [PurchaseOrdersController::class, 'update']);
    Route::delete('/{id}', [PurchaseOrdersController::class, 'destroy']);
});
Route::group(['prefix' => 'productionorder', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [ProductionOrderController::class, 'get']);
    Route::get('/{id}', [ProductionOrderController::class, 'getOne']);
    Route::post('/', [ProductionOrderController::class, 'create']);
    Route::put('/{id}', [ProductionOrderController::class, 'update']);
    Route::delete('/{id}', [ProductionOrderController::class, 'destroy']);
});
Route::group(['prefix' => 'planningorder', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [PlanningOrdersController::class, 'get']);
    Route::get('/{id}', [PlanningOrdersController::class, 'getOne']);
    Route::get('/planning/{department_name}', [PlanningOrdersController::class, 'getdepartmentPlan']);
    Route::get('/admin/{department_name}', [PlanningOrdersController::class, 'getAdminPlan']);
    Route::get('/gl/{department_name}', [PlanningOrdersController::class, 'getGLPlan']);
    Route::get('/purchase/{department_name}', [PlanningOrdersController::class, 'getPurchasePlan']);
    Route::get('/sales/{department_name}', [PlanningOrdersController::class, 'getSalesPlan']);
    Route::get('/production/{department_name}', [PlanningOrdersController::class, 'getProductionPlan']);
    Route::get('/inventory/{department_name}', [PlanningOrdersController::class, 'getInventoryPlan']);
    Route::post('/', [PlanningOrdersController::class, 'create']);
    Route::put('/{id}', [PlanningOrdersController::class, 'update']);
    Route::delete('/{id}', [PlanningOrdersController::class, 'destroy']);
});
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
