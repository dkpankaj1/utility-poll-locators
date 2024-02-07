import React, { useState, createContext, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { usePage } from '@inertiajs/react'
import Toaster from '../Components/Toaster'
import Model from '../Components/Model'

export const LayoutContext = createContext(null)


function AppLayout({ children }) {

    const { flash } = usePage().props
    const [openSidebar, setOpenSidebar] = useState(true)
    const [openXsSidebar, setOpenXsSidebar] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const getStorage = () => {
        return JSON.parse(localStorage.getItem('dark-mode')) || false
    }
    const setStorage = (isDarkMode) => {
        localStorage.setItem('dark-mode', JSON.stringify(isDarkMode))
    }

    const handleResize = () => {
        window.innerWidth > 991 ? setOpenSidebar(true) : setOpenSidebar(false)
    }
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        setStorage(!darkMode)
    }

    const context = {
        openSidebar, setOpenSidebar,
        openXsSidebar, setOpenXsSidebar,
        darkMode, handleDarkMode
    }
    useEffect(() => {
        const isDarkMode = getStorage()
        setDarkMode(isDarkMode)
    }, [darkMode])

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <LayoutContext.Provider value={context}>
            <div id="page-container" className={`sidebar-dark enable-page-overlay side-scroll page-header-fixed  ${openXsSidebar ? 'sidebar-o-xs' : ''} ${openSidebar ? 'sidebar-o' : ''}  ${darkMode ? "page-header-dark dark-mode" : ""}`}>
                {/* sidebar::begin */}
                <Sidebar />
                {/* sidebar::end */}

                {/* header::begin */}
                <Header />
                {/* header::end */}

                {/* main content::begin */}
                <Main>

                    {flash.success && (<Toaster show={true} type={"success"} title="Success" message={flash.success} />)}

                    {flash.danger && (<Toaster show={true} type={"danger"} title="Error" message={flash.danger} />)}
                    <Model/>

                    {children}

                </Main>
                {/* main content::begin */}

                {/* footer::begin */}
                <Footer />
                {/* footer::end */}
            </div>
        </LayoutContext.Provider>

    )
}

export default AppLayout