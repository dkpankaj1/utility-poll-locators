import React,{useContext} from 'react'
import { LayoutContext } from '../AppLayout'
import sidebarMenu from '../../../menu.json'
import SidebarItem from './SidebarItem'

function Sidebar() {
    const {openXsSidebar, setOpenXsSidebar} = useContext(LayoutContext)
    return (

        <nav id="sidebar" aria-label="Main Navigation">
            {/* <!-- Side Header --> */}
            <div className="bg-header-dark">
                <div className="content-header bg-white-5">
                    {/* <!-- Logo --> */}
                    <a className="fw-semibold text-white tracking-wide" href="index.html">
                        <span className="smini-visible">
                            D<span className="opacity-75">x</span>
                        </span>
                        <span className="smini-hidden">
                            Dash<span className="opacity-75">mix</span>
                        </span>
                    </a>
                    {/* <!-- END Logo --> */}

                    {/* <!-- Options --> */}
                    <div>
                        {/* <!-- Close Sidebar, Visible only on mobile screens --> */}
                        {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                        <button type="button" className="btn btn-sm btn-alt-secondary d-lg-none" data-toggle="layout" onClick={() => setOpenXsSidebar(!openXsSidebar)}>
                            <i className="fa fa-times-circle" ></i>
                        </button>
                        {/* <!-- END Close Sidebar --> */}
                    </div>
                    {/* <!-- END Options --> */}
                </div>
            </div>
            {/* <!-- END Side Header --> */}
            {/*  */}
            {/* <!-- Sidebar Scrolling --> */}
            <div className="js-sidebar-scroll">
                {/* <!-- Side Navigation --> */}
                <div className="content-side">
                    <ul className="nav-main">
                       {sidebarMenu.map((item, index) => (
                           <SidebarItem  key={index} item={item}/>
                       ))}
                    </ul>
                </div>
                {/* <!-- END Side Navigation --> */}
            </div>
            {/* <!-- END Sidebar Scrolling --> */}
        </nav>
    )
}

/** 
 * 
 * sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled
 * sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled sidebar-o
 * sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled sidebar-o
 * sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled sidebar-o sidebar-o-xs
 * 
 * 
*/

export default Sidebar