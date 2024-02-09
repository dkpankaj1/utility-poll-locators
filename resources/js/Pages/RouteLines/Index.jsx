import React from 'react'
import AppLayout from '../Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import Breadcrumb from '../Layouts/Breadcrumb/Breadcrumb'
function Index({ routeLines }) {
    const breadcrumb = [
        {
            label: "Dashboard",
            url: '/dashboard',
            active: false
        },
        {
            label: "Route Lines",
            url: '/route-lines',
            active: true
        }
    ]
    return (
        <AppLayout>

            <Head title='Route Line | Dashboard'></Head>
            <Breadcrumb items={breadcrumb} />

            <div className="content">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Route</th>
                                        <th className="text-center" style={{ width: "100px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        routeLines.map((routeLine, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="fw-semibold">
                                                        {routeLine.name}
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <Link href={route('route-lines.edit', routeLine)} type="button" className="btn btn-sm btn-alt-secondary">
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                            <Link as="button" method='delete' href={route('route-lines.destroy', routeLine)} className="btn btn-sm btn-alt-secondary">
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