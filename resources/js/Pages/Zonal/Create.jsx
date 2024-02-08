import React from 'react'
import AppLayout from '../Layouts/AppLayout'
import Breadcrumb from '../Layouts/Breadcrumb/Breadcrumb'
import { Head, useForm } from '@inertiajs/react'

function Create() {
    const breadcrumb = [
        {
            label: "Dashboard",
            url: '/dashboard',
            active: false
        },
        {
            label: "Zonal",
            url: '/zonals',
            active: false
        },
        {
            label: "Create",
            active: true
        }
    ]

    const { data, setData, post, processing, progress, errors,reset } = useForm({
        name: '',
        description: '',
        status: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('zonals.store'),{
            onSuccess : () => {
                reset()
            }
        })
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
                                {/* form */}
                                <form className="my-5" onSubmit={handleSubmit}>
                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" placeholder="Enter Name.." value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                            {errors.name && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.name}</div>}
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Description</label>
                                        <div className="col-sm-8">
                                            <textarea rows={5} className="form-control" value={data.description} onChange={(e) => setData('description', e.target.value)} placeholder="Enter Description.." />
                                            {errors.description && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.description}</div>}
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-password">Status</label>
                                        <div className="col-sm-8">
                                            <input className="form-check-input" type="checkbox" defaultChecked={data.status} onChange={(e) => setData('status', e.target.checked)} />
                                            {errors.status && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.status}</div>}
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <hr />
                                        <div className="col-sm-8">
                                            <button type="submit" className="btn btn-primary px-4">{processing ? "Loading.." : "Create"}</button>
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