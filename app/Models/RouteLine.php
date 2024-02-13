<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RouteLine extends Model
{
    use HasFactory;
    protected $fillable = [
        'zonal_id',
        'name',
        'slug',
        'description',
    ];
    public function zonal()
    {
        return $this->belongsTo(Zonal::class,'zonal_id');
    }
    public function utilityPolls()
    {
        return $this->hasMany(UtilityPoll::class,'route_line_id','id');
    }
}
