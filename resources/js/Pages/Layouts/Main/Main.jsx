import React from 'react'

function Main({ children }) {
    return (
        <main id="main-container">

            {/* <!-- Hero --> */}
            
            {/* <!-- END Hero --> */}

            {/* <!-- Page Content --> */}
            {children}
            {/* <!-- END Page Content --> */}
        </main>
    )
}

export default Main