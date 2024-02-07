import React from 'react'
import AppLayout from '../Layouts/AppLayout'
import Breadcrumb from '../Layouts/Breadcrumb/Breadcrumb'
import { Head,useForm } from '@inertiajs/react'

function Create() {
    const breadcrumb = [
        {
            label: "Dashboard",
            url: '/dashboard',
            active: false
        },
        {
            label: "Users",
            url: '/users',
            active: false
        },
        {
            label: "Create",
            active: true
        }
    ]

    const { data, setData, post, processing,errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        status : false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('users.store'))
    }
    return (
        <AppLayout>
            <Breadcrumb items={breadcrumb} />
            <Head title='Users - Create | Dashboard'></Head>

            <div className="content">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <form className="my-5" onSubmit={handleSubmit}>
                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" placeholder="Enter Name.." value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                            {errors.name && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.name}</div>}
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Email</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" value={data.email} onChange={(e) => setData('email', e.target.value)} placeholder="Enter Email.." />
                                            {errors.email && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.email}</div>}
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-password">Password</label>
                                        <div className="col-sm-8">
                                            <input type="password" className="form-control" value={data.password} onChange={(e) => setData('password', e.target.value)} placeholder="Enter Password.." />
                                            {errors.password && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.password}</div>}
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-password">Confirm Password</label>
                                        <div className="col-sm-8">
                                            <input type="password" className="form-control" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)}  placeholder="Confirm Password.." />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-password">Status</label>
                                        <div className="col-sm-8">
                                            <input className="form-check-input" type="checkbox" defaultChecked={data.status} onChange={(e) => setData('status', e.target.checked)}/>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <hr />
                                        <div className="col-sm-8">
                                            <button type="submit" className="btn btn-primary px-4">{processing?"Loading..":"Save"}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Create