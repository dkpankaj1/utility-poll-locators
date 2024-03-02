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

            'pole' => ['required', Rule::unique('utility_polls', 'pole')],
            // 'line' => ['required'],
            'latitude' => ['required'],
            'longitude' => ['required'],
            // 'description' => ['required'],
            // 'status' => ['required'],
            // 'route_line_id' => ['required', Rule::exists('route_lines', 'id')],
        ];
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        return $this->sendHttpResponseException('validation error.', $validator->errors());
    }
}
