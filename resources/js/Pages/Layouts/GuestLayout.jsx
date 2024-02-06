import React from 'react'
import { router, useForm } from '@inertiajs/react'

function GuestLayout() {

    const { data, setData, post, processing, errors } = useForm({
        'email': '',
        'password': ''
    })

    const handleSubmit = () => {
        post('/')
    }


    return (
        <div id="page-container">

            <main id="main-container">

                <div className="bg-image" style={{ backgroundImage: "url('assets/photo22@2x.jpg')" }}>
                    <div className="row g-0 bg-primary-op">
                        <div className="hero-static col-md-6 d-flex align-items-center bg-body-extra-light">
                            <div className="p-3 w-100">
                                <div className="mb-3 text-center">
                                    <a className="link-fx fw-bold fs-1" href="index.html">
                                        <span className="text-dark">Dash</span><span className="text-primary">mix</span>
                                    </a>
                                    <p className="text-uppercase fw-bold fs-sm text-muted">Sign In</p>
                                </div>

                                <div className="row g-0 justify-content-center">
                                    <div className="col-sm-8 col-xl-6">
                                        <form>
                                            <div className="py-3">
                                                <div className="mb-4">
                                                    <input type="text" className="form-control form-control-lg form-control-alt" value={data.email} onChange={(e) => setData('email',e.target.value)} placeholder="Username" />
                                                    <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">Please enter a username</div>
                                                </div>
                                                <div className="mb-4">
                                                    <input type="password" className="form-control form-control-lg form-control-alt" value={data.password} onChange={(e) => setData('password',e.target.value)} placeholder="Password" />
                                                    <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">Please enter a password</div>

                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <button type="button" className="btn w-100 btn-lg btn-hero btn-primary" onClick={handleSubmit}>
                                                    <i className="fa fa-fw fa-sign-in-alt opacity-50 me-1"></i> {processing ? "Loading..": "Sign In"}
                                                </button>
                                                <p className="mt-3 mb-0 d-lg-flex justify-content-lg-between">
                                                    <a className="btn btn-sm btn-alt-secondary d-block d-lg-inline-block mb-1" href="#">
                                                        <i className="fa fa-exclamation-triangle opacity-50 me-1"></i> Forgot password
                                                    </a>
                                                    <a className="btn btn-sm btn-alt-secondary d-block d-lg-inline-block mb-1" href="#">
                                                        <i className="fa fa-plus opacity-50 me-1"></i> New Account
                                                    </a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-static col-md-6 d-none d-md-flex align-items-md-center justify-content-md-center text-md-center">
                            <div className="p-3">
                                <p className="display-4 fw-bold text-white mb-3">
                                    Welcome to the future
                                </p>
                                <p className="fs-lg fw-semibold text-white-75 mb-0">
                                    Copyright © <span>2024</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GuestLayout