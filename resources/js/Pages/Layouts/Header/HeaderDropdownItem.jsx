import React from 'react'
import { Link } from '@inertiajs/react'

function HeaderDropdownItem(props) {
    return (
        <Link className="dropdown-item" href={props.href}>
            <i className={`${props.icon} me-1`}></i> {props.title}
        </Link>
    )
}

export default HeaderDropdownItem