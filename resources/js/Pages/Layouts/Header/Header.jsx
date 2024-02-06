import React, { useContext } from 'react'
import HeaderDropdown from './HeaderDropdown'
import { LayoutContext } from '../AppLayout'

function Header() {
  const { openSidebar, setOpenSidebar, openXsSidebar, setOpenXsSidebar,darkMode,handleDarkMode } = useContext(LayoutContext)
  const handleSidebarToggle = () => {
    window.innerWidth > 991 && setOpenSidebar(!openSidebar)
    window.innerWidth <= 991 && setOpenXsSidebar(!openXsSidebar)
  }
  return (

    <header id="page-header">
      <div className="content-header">
        <div>

          <button type="button" className="btn btn-alt-secondary me-1" onClick={handleSidebarToggle}>
            <i className="fa fa-fw fa-bars"></i>
          </button>


        </div>

        <div className="space-x-1">
          <button type="button" className="btn btn-alt-secondary me-1" onClick={handleDarkMode}>
           {!darkMode ?  <i className="fa-moon fa"></i> :  <i className="fa-sun far"></i>}
          </button>

          <HeaderDropdown name="Admin" title="Admin profile" icon="fa fa-fw fa-user" />
        </div>
      </div>

    </header>
  )
}

export default Header