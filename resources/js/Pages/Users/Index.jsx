import React from 'react'
import AppLayout from '../Layouts/AppLayout'
import { Head, Link, router } from '@inertiajs/react'
import Breadcrumb from '../Layouts/Breadcrumb/Breadcrumb'
function Index({ users }) {
    const breadcrumb = [
        {
            label: "Dashboard",
            url: '/dashboard',
            active: false
        },
        {
            label: "Users",
            url: '/users',
            active: true
        }
    ]
    return (
        <AppLayout>

            <Head title='Users | Dashboard'></Head>
            <Breadcrumb items={breadcrumb} />

            <div className="content">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th style={{ width: "30%" }}>Email</th>
                                        <th style={{ width: "15%" }}>Access</th>
                                        <th className="text-center" style={{ width: "100px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="fw-semibold">
                                                        {user.name}
                                                    </td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <span className="badge bg-danger">Disabled</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <Link href={route('users.edit', user)} type="button" className="btn btn-sm btn-alt-secondary">
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                            <button type="button" className="btn btn-sm btn-alt-secondary">
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                            <button type="button" className="btn btn-sm btn-alt-secondary">
                                                                <i className="fa fa-eye"></i>
                                                            </button>
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