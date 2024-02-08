<?php

namespace App\Http\Requests\Api;

use App\Traits\HttpApiRateLimiter;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    use HttpApiRateLimiter;
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator){
        return $this->sendHttpResponseException('validation error.', $validator->errors());
    }
    
    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();

        if (! Auth::attempt( ['email' => $this->email,'password' => $this->password,'status' => true], $this->boolean('remember'))) {
            $this->hitLimiter();
            $this->sendHttpResponseException("login errors",['email' => trans('auth.failed')],401);
        }
        
        $this->clearLimiter();
    }
}
