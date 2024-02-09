import React, { useState } from 'react'
import AppLayout from '../Layouts/AppLayout'
import Breadcrumb from '../Layouts/Breadcrumb/Breadcrumb'
import { Head, useForm } from '@inertiajs/react'

function Edit({ zonals,utilityPoll,zonalRoute }) {
    const [routeLines, setRouteLines] = useState(zonalRoute)
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
            label: "Edit",
            active: true
        }
    ]

    const { data, setData, post, processing, errors } = useForm({
        _method : "PUT",
        pole: utilityPoll.pole,
        zonal: utilityPoll.route_line.zonal_id,
        line: utilityPoll.line,
        latitude:utilityPoll.latitude,
        longitude: utilityPoll.longitude,
        route_lines: utilityPoll.route_line_id,
        description: utilityPoll.description,
        status: utilityPoll.status,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('utility-polls.update',utilityPoll))
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
            _method : data._method,
            pole: data.pole,
            zonal: data.zonal,
            line: data.line,
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
            <Head poll='Users - Create | Dashboard'></Head>

            <div className="content">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <form className="my-5" onSubmit={handleSubmit}>

                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Zonal</label>
                                        <div className="col-sm-8">
                                            <select className="form-select" onChange={handleZonalChange} defaultValue={data.zonal}>
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
                                            <select className="form-select" defaultValue={data.route_lines} onChange={(e) => setData('route_lines', e.target.value)}>
                                                <option value="">-- Select --</option>

                                                {routeLines.map((routeLine, index) => {
                                                    return <option key={index} value={routeLine.id}>{routeLine.name}</option>
                                                })}

                                            </select>
                                            {errors.route_lines && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.route_lines}</div>}
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Line</label>
                                        <div className="col-sm-8">
                                            <select className="form-select" defaultValue={data.line} onChange={(e) => setData('line', e.target.value)}>
                                                <option value="">-- Select --</option>
                                                <option value="up-line">Up-Line</option>
                                                <option value="down-line">Down-Line</option>

                                            </select>
                                            {errors.line && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.line}</div>}
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label className="col-sm-4 col-form-label" htmlFor="example-hf-email">Poll Number</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" placeholder="Enter Poll Number.." value={data.pole} onChange={(e) => setData('pole', e.target.value)} />
                                            {errors.pole && <div id="login-username-error" className="invalid-feedback animated fadeIn d-block">{errors.pole}</div>}
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
                                            <button type="submit" className="btn btn-primary px-4">{processing ? "Loading.." : "Update"}</button>
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

export default Edit