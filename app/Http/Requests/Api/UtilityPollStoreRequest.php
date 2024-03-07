<?php

namespace App\Http\Requests\Api;

use App\Traits\HttpResponses;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UtilityPollStoreRequest extends FormRequest
{
    use HttpResponses;

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'pole_img' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'latitude' => ['required'],
            'longitude' => ['required'],
        ];
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        return $this->sendHttpResponseException('validation error.', $validator->errors());
    }
}
