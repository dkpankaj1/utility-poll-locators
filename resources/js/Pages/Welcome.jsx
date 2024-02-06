import React from 'react'
import AppLayout from './Layouts/AppLayout'
import GuestLayout from './Layouts/GuestLayout'
function Welcome() {
  return (
    // <AppLayout>
    //   <div className="block block-rounded">
    //     <div className="block-header block-header-default">
    //       <h3 className="block-title">
    //         Title <small>Get Started</small>
    //       </h3>
    //       <div className="block-options">
    //         <button type="button" className="btn-block-option" data-toggle="block-option" data-action="fullscreen_toggle"></button>
    //         <button type="button" className="btn-block-option" data-toggle="block-option" data-action="pinned_toggle">
    //           <i className="si si-pin"></i>
    //         </button>
    //         <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
    //           <i className="si si-refresh"></i>
    //         </button>
    //         <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
    //         <button type="button" className="btn-block-option" data-toggle="block-option" data-action="close">
    //           <i className="si si-close"></i>
    //         </button>
    //       </div>
    //     </div>
    //     <div className="block-content">
    //       <p>
    //         Create your own awesome project!
    //       </p>
    //     </div>
    //   </div>
    // </AppLayout>
    <GuestLayout></GuestLayout>
  )
}

export default Welcome