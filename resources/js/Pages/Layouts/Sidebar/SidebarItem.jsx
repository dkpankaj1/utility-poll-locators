import React, { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/react'

function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)
    const { url } = usePage()

    // Check if the current URL matches any subitem URL
    const isActive = item.sub && item.sub.some(subitem => url === subitem.url)
    useEffect(()=>{
        isActive && setOpen(true)
        
    },[])

    if (item.sub) {
        return (
            <li className={`nav-main-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                <a className="nav-main-link nav-main-link-submenu" href="#">
                    <i className={`nav-main-link-icon ${item.icon}`}></i>
                    <span className="nav-main-link-name">{item.label}</span>
                </a>
                <ul className="nav-main-submenu">
                    {item.sub.map((subitem, index) => (
                        <li className="nav-main-item" key={index}>
                            <Link className={`nav-main-link ${url === subitem.url ? "active" : ""}`} href={subitem.url} >
                                <span className="nav-main-link-name">{subitem.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        )
    } else {
        return (
            <li className={`nav-main-item`}>
                <Link className="nav-main-link" href={item.url}>
                    <i className={`nav-main-link-icon ${item.icon}`} ></i>
                    <span className="nav-main-link-name">{item.label}</span>
                </Link>
            </li>
        )
    }

}

export default SidebarItem
