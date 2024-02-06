import React from 'react'

function Main({ children }) {
    return (
        <main id="main-container">

            {/* <!-- Hero --> */}
            <div className="bg-body-light">
                <div className="content content-full">
                    <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                        <h1 className="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3">Page Title</h1>
                        <nav className="flex-shrink-0 my-2 my-sm-0 ms-sm-3" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-alt">
                                <li className="breadcrumb-item">
                                    <a href="#">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Account</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Current</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- END Hero --> */}

            {/* <!-- Page Content --> */}
            <div className="content">
                {/* <!-- Your Block --> */}
                {children}
                {/* <!-- END Your Block --> */}
            </div>
            {/* <!-- END Page Content --> */}
        </main>
    )
}

export default Main