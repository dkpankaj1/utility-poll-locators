<?php

namespace App\Traits;


use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

trait ImageManager
{
    public function uploadImage($file, $path)
    {
        $fileName = time() . $file->getClientOriginalName();
        $file_type = $file->getClientOriginalExtension();
        $filePath = $path . $fileName;
        try{
            
            Storage::disk('public')->put($filePath, File::get($file));
            return $file = [
                'fileName' => $fileName,
                'fileType' => $file_type,
                'filePath' => $filePath
            ];

        }catch(\Exception $e){
            return $e->getMessage();
        }

        
    }
}



?>