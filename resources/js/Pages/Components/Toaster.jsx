import React, { useState, useEffect } from 'react'

function Toaster(props) {
    const [show, setShow] = useState(props.show)
    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }, [])

    return (
        <div className="toast-container position-absolute end-0 top-0 p-3">
            <div className={`toast ${show ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className={`toast-header bg-${props.type} text-light`}>
                    {
                        props.type === 'success' &&
                        (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg>)
                    }
                    <strong className="me-auto"> {props.title}</strong>
                    <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>
                <div className="toast-body">
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Toaster