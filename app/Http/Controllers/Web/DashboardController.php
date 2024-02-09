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
        $userCount = User::count();
        $zonalCount = Zonal::count();
        $routeLineCount = RouteLine::count();
        $utilityPollsCount = UtilityPoll::count();
        $utilityPolls = UtilityPoll::latest()->with(['routeLine','createdBy','updatedBy'])->take(10)->get();
        return Inertia::render(
            'Dashboard/Index',
            [
                'userCount' => $userCount,
                'zonalCount' => $zonalCount,
                'routeLineCount' => $routeLineCount,
                'utilityPollsCount' => $utilityPollsCount,
                'utilityPolls' => $utilityPolls,
            ]
        );
    }
}
