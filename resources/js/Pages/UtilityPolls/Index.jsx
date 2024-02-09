import React from 'react'
import AppLayout from '../Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import Breadcrumb from '../Layouts/Breadcrumb/Breadcrumb'
function Index({ utilityPolls }) {
    console.log(utilityPolls);
    const breadcrumb = [
        {
            label: "Dashboard",
            url: '/dashboard',
            active: false
        },
        {
            label: "Utility Poll",
            url: '/utility-polls',
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
                                        <th>Title</th>
                                        <th>Landmarks</th>
                                        <th>Latitude</th>
                                        <th>Longitude</th>
                                        <th>Route line</th>
                                        <th>Created by</th>
                                        <th>Updated by</th>
                                        <th>Status</th>
                                        <th className="text-center" style={{ width: "100px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        utilityPolls.map((utilityPoll, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="fw-semibold">
                                                        {utilityPoll.title}
                                                    </td>
                                                    <td>{utilityPoll.landmarks}</td>
                                                    <td>{utilityPoll.latitude}</td>
                                                    <td>{utilityPoll.longitude}</td>
                                                    <td>{utilityPoll.route_line.name}</td>
                                                    <td>{utilityPoll.created_by.name}</td>
                                                    <td>{utilityPoll.updated_by || "null"}</td>
                                                    <td>{utilityPoll.status}</td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <Link href={route('utility-polls.edit', utilityPoll)} type="button" className="btn btn-sm btn-alt-secondary">
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                            {/* <Link as="button" method='delete' href={route('utility-polls.destroy',utilityPoll)} className="btn btn-sm btn-alt-secondary">
                                                                <i className="fa fa-times"></i>
                                                            </Link> */}
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