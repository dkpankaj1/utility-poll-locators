<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UtilityPoll extends Model
{
    use HasFactory;
    protected $fillable = [
        'pole_img',
        'latitude',
        'longitude',
        'created_by',
        'updated_by',
    ];
    
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class,'updated_by');
    }
}
