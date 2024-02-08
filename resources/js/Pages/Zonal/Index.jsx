import React from 'react'
import AppLayout from "../Layouts/AppLayout"
import { Head,Link } from '@inertiajs/react'
import Breadcrumb from '../Layouts/Breadcrumb/Breadcrumb'

function Index({ zonals }) {

    const breadcrumb = [
        {
            label: "Dashboard",
            url: '/dashboard',
            active: false
        },
        {
            label: "Zonal",
            active: true
        }
    ]


    return (
        <AppLayout>

            <Head title='Zonal | Dashboard'></Head>

            <Breadcrumb items={breadcrumb} />

            <div className="content">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th style={{ width: "30%" }}>Description</th>
                                        <th style={{ width: "15%" }}>Status</th>
                                        <th className="text-center" style={{ width: "100px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        zonals.map((zonal, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="fw-semibold">
                                                        {zonal.name}
                                                    </td>
                                                    <td>{zonal.description}</td>
                                                    <td>
                                                        {zonal.status ? <span className="badge bg-success">Enabled</span> : <span className="badge bg-danger">Disabled</span>}

                                                    </td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <Link href={route('zonals.edit', zonal)} type="button" className="btn btn-sm btn-alt-secondary">
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                            <Link as="button" method='delete' href={route('zonals.destroy', zonal)} className="btn btn-sm btn-alt-secondary">
                                                                <i className="fa fa-times"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </AppLayout>
    )
}

export default Index