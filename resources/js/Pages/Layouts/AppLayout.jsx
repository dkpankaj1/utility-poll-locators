import React, { useState, createContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { usePage } from '@inertiajs/react'
import 'react-toastify/dist/ReactToastify.css';

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

    useEffect(() => {
        flash.success && toast.success(flash.success)
        flash.danger && toast.error(flash.danger)
    },[flash])

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



                    {children}

                </Main>
                {/* main content::begin */}

                {/* footer::begin */}
                <Footer />
                {/* footer::end */}

                {/* toast container and other model :: Begin */}
                <ToastContainer/>
                {/* toast container and other model :: End */}
            </div>
        </LayoutContext.Provider>

    )
}

export default AppLayout