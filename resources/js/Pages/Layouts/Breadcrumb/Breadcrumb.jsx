import React from 'react'
import { Link } from '@inertiajs/react'
function Breadcrumb({ items }) {
    return (
        <div className="bg-body-light">
            <div className="content content-full">
                <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                    <nav className="flex-shrink-0 my-2 my-sm-0 ms-sm-3" aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-alt">
                            {
                                items.map((item, index) => {
                                    if (!item.active) {
                                        return (
                                            <li className="breadcrumb-item" key={index}>
                                                <Link href={item.url}>{item.label}</Link>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li className="breadcrumb-item active" aria-current="page" key={index}>{item.label}</li>
                                        )
                                    }
                                })
                            }
                        </ol>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Breadcrumb