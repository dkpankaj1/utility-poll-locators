import React, { useState } from 'react'
import AppLayout from '../Layouts/AppLayout'
import Breadcrumb from '../Layouts/Breadcrumb/Breadcrumb'
import { Head, useForm } from '@inertiajs/react'

function Create({ zonals }) {
    const [routeLines, setRouteLines] = useState([])
    const breadcrumb = [
        {
            label: "Dashboard",
            url: '/dashboard',
            active: false
        },
        {
            label: "Utility Poll",
            url: '/utility-polls',
            active: false
        },
        {
            label: "Create",
            active: true
        }
    ]

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        zonal: '',
        landmark: '',
        latitude: '',
        longitude: '',
        route_lines: '',
        description: '',
        status: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('utility-polls.store'))
    }
    const getRoute = async (id) => {
        const data = await fetch(route('zonals-get-route-lines', { zonal: id })).then(res => res.json())
        setRouteLines(data.data.routeLines)
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    const showPosition = (position) => {
        setData({
            title: data.title,
            zonal: data.zonal,
            landmark: data.landmark,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            route_lines: data.route_lines,
            description: data.description,
            status: data.status,
        })
    }
    const handleZonalChange = (e) => {
        setData('zonal', e.target.value)
        getRoute(e.target.value)
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
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Zonal</label>
                                        <div className="col-sm-8">
                                            <select className="form-select" onChange={handleZonalChange}>
                                                <option value="">-- Select --</option>
                                                {zonals.map((zonal, index) => {
                                                    return <option key={index} value={zonal.id}>{zonal.name}</option>
                                                })}

                                            </select>
                                            {errors.zonal && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.zonal}</div>}
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Route Line</label>
                                        <div className="col-sm-8">
                                            <select className="form-select" onChange={(e) => setData('route_lines', e.target.value)}>
                                                <option value="">-- Select --</option>

                                                {routeLines.map((routeLine, index) => {
                                                    return <option key={index} value={routeLine.id}>{routeLine.name}</option>
                                                })}

                                            </select>
                                            {errors.route_lines && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.route_lines}</div>}
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Title</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" placeholder="Enter Name.." value={data.title} onChange={(e) => setData('title', e.target.value)} />
                                            {errors.title && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.title}</div>}
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Location</label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-4">
                                                    <input type="text" className="form-control" disabled={true} placeholder="latitude" value={data.latitude} />
                                                </div>
                                                <div className="col-4">
                                                    <input type="text" className="form-control" disabled={true} placeholder="longitude" value={data.longitude} />
                                                </div>
                                                <div className="col-4">
                                                    <button type='button' onClick={getLocation} className='btn btn-secondary'><i className="fa-solid fa-location-crosshairs"></i></button>
                                                </div>
                                            </div>

                                            {errors.latitude && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.latitude}</div>}
                                            {errors.longitude && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.longitude}</div>}
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Landmark</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" placeholder="Enter Landmark.." value={data.landmark} onChange={(e) => setData('landmark', e.target.value)} />
                                            {errors.landmark && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.landmark}</div>}
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
                                            <button type="submit" className="btn btn-primary px-4">{processing ? "Loading.." : "Save"}</button>
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