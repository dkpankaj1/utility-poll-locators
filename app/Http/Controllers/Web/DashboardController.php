<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\RouteLine;
use App\Models\User;
use App\Models\UtilityPoll;
use App\Models\Zonal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {

        return Inertia::render(
            'Dashboard/Index',
            [
                'userCount' => User::count(),
                'utilityPollsCount' => UtilityPoll::count(),
                'utilityPolls' =>UtilityPoll::latest()->with(['createdBy','updatedBy'])->take(10)->get(),
            ]
        );
    }
}
