import React from 'react'

function GuestLayout({ children }) {
    return (
        <div id="page-container">

            <main id="main-container">

                <div className="bg-image" style={{ backgroundImage: "url('assets/photo22@2x.jpg')" }}>
                    <div className="row g-0 bg-primary-op">
                        <div className="hero-static col-md-6 d-flex align-items-center bg-body-extra-light">
                            <div className="p-3 w-100">
                                {children}
                            </div>
                        </div>
                        <div className="hero-static col-md-6 d-none d-md-flex align-items-md-center justify-content-md-center text-md-center">
                            <div className="p-3">
                                <p className="display-4 fw-bold text-white mb-3">
                                    Welcome to the future
                                </p>
                                <p className="fs-lg fw-semibold text-white-75 mb-0">
                                    Copyright © <span>2024</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GuestLayout