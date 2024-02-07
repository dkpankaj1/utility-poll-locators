<?php

namespace App\Http\Requests;

use App\Traits\HttpWebRateLimiter;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    use HttpWebRateLimiter;
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

    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();
        

        if (!Auth::attempt(['email' => $this->email, 'password' => $this->password], $this->boolean('remember'))) {
            $this->hitLimiter();

            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }

        $this->clearLimiter();
    }
}
