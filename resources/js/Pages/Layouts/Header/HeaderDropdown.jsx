import React, { useState } from 'react'
import HeaderDropdownItem from './HeaderDropdownItem'

function HeaderDropdown(props) {

    const [open, setOpen] = useState(false)
    const sidebarOpenStyle = {
        position: "absolute",
        inset: " 0px 0px auto auto",
        margin: "0px",
        transform: "translate(0px, 40px)"
    }

    return (
        <div className="dropdown d-inline-block">
            <button type="button" className={`btn btn-alt-secondary ${open ? 'show' : ''}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={open} onClick={() => setOpen(!open)}>
                <i className={`d-sm-none ${props.icon}`}></i>
                <span className="d-none d-sm-inline-block">{props.name}</span>
                <i className="fa fa-fw fa-angle-down opacity-50 ms-1 d-none d-sm-inline-block"></i>
            </button>
            <div className={`dropdown-menu dropdown-menu-end p-0 ${open ? 'show' : ''}`} aria-labelledby="page-header-user-dropdown"
                style={open ? sidebarOpenStyle : {}}
            >
                <div className="bg-primary-dark rounded-top fw-semibold text-white text-center p-3">
                   {props.title}
                </div>
                <div className="p-2">
                    <HeaderDropdownItem title="Profile" icon="far fa-fw fa-user" href="/profile" />
                    <HeaderDropdownItem title="Inbox" icon="far fa-fw fa-envelope" href="/Inbox" />
                    <HeaderDropdownItem title="Invoices" icon="far fa-fw fa-file-alt" href="/Invoices" />

                    <div role="separator" className="dropdown-divider"></div>

                    <a className="dropdown-item"href="#" data-toggle="layout" data-action="side_overlay_toggle">
                        <i className="far fa-fw fa-building me-1"></i> Settings
                    </a>
                    <div role="separator" className="dropdown-divider"></div>
                    <a className="dropdown-item"href="#">
                        <i className="far fa-fw fa-arrow-alt-circle-left me-1"></i> Sign Out
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeaderDropdown