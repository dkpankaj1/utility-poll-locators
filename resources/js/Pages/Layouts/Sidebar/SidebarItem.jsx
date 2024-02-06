import React, { useState } from 'react'

function Sidebaritem({item}) {
    const [open, setOpen] = useState(false)


    if (item.sub) {
        return (
            <li className={`nav-main-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i className={`nav-main-link-icon ${item.icon}`}></i>
                    <span className="nav-main-link-name">{item.label}</span>
                </a>
                <ul className="nav-main-submenu">
                    {item.sub.map((subitem, index) => (
                        <li className="nav-main-item" key={index}>
                            <a className="nav-main-link" href={subitem.url} >
                                <span className="nav-main-link-name">{subitem.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
        )
    } else {
        return (
            <li className={`nav-main-item`}>
                <a className="nav-main-link" href={item.url}>
                    <i className={`nav-main-link-icon ${item.icon}`} ></i>
                    <span className="nav-main-link-name">{item.label}</span>
                </a>
            </li>
        )
    }

}

export default Sidebaritem