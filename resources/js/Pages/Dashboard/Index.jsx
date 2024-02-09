import React from 'react'
import AppLayout from '../Layouts/AppLayout'
import { Head, Link, usePage } from '@inertiajs/react'

function Index({ userCount, zonalCount, routeLineCount, utilityPollsCount,utilityPolls }) {
  const { auth } = usePage().props

  return (
    <AppLayout>
      <Head title='Admin | Dashboard' />
      {/* <!-- Hero --> */}
      <div className="content">
        <div className="d-md-flex justify-content-md-between align-items-md-center py-3 pt-md-3 pb-md-0 text-center text-md-start">
          <div>
            <h1 className="h3 mb-1">
              Dashboard
            </h1>
            <p className="fw-medium mb-0 text-muted">
              Welcome, {auth.user.name} !.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- END Hero --> */}

      {/* <!-- Page Content --> */}
      <div className="content">
        {/* <!-- Overview --> */}
        <div className="row items-push">
          <div className="col-sm-6 col-xl-3">
            <div className="block block-rounded text-center d-flex flex-column h-100 mb-0">
              <div className="block-content block-content-full flex-grow-1">
                <div className="item rounded-3 bg-body mx-auto my-3">
                  <i className="fa fa-users fa-lg text-primary"></i>
                </div>
                <div className="fs-1 fw-bold">{userCount}</div>
                <div className="text-muted mb-3">Registered Users</div>
              </div>
              <div className="block-content block-content-full block-content-sm bg-body-light fs-sm">
                <Link className="fw-medium" href={route('users.index')}>
                  View all users
                  <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="block block-rounded text-center d-flex flex-column h-100 mb-0">
              <div className="block-content block-content-full flex-grow-1">
                <div className="item rounded-3 bg-body mx-auto my-3">
                  <i className="fa fa-map fa-lg text-primary"></i>
                </div>
                <div className="fs-1 fw-bold">{zonalCount}</div>
                <div className="text-muted mb-3">Zonal</div>
              </div>
              <div className="block-content block-content-full block-content-sm bg-body-light fs-sm">
                <Link className="fw-medium" href={route('zonals.index')}>
                  Explore Zonal
                  <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="block block-rounded text-center d-flex flex-column h-100 mb-0">
              <div className="block-content block-content-full flex-grow-1">
                <div className="item rounded-3 bg-body mx-auto my-3">
                  <i className="fa fa-route fa-lg text-primary"></i>
                </div>
                <div className="fs-1 fw-bold">{routeLineCount}</div>
                <div className="text-muted mb-3">Route Line</div>
              </div>
              <div className="block-content block-content-full block-content-sm bg-body-light fs-sm">
                <Link className="fw-medium" href={route('route-lines.index')}>
                  View all Route Line
                  <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="block block-rounded text-center d-flex flex-column h-100 mb-0">
              <div className="block-content block-content-full">
                <div className="item rounded-3 bg-body mx-auto my-3">
                  <i className="fa fa-diagram-project fa-lg text-primary"></i>
                </div>
                <div className="fs-1 fw-bold">{utilityPollsCount}</div>
                <div className="text-muted mb-3">Utility Polls</div>
              </div>
              <div className="block-content block-content-full block-content-sm bg-body-light fs-sm">
                <Link className="fw-medium" href={route('utility-polls.index')}>
                  Explore all Utility Polls
                  <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END Overview -->


  {/* <!-- Latest Orders + Stats --> */}
        <div className="row">
          <div className="col-12">
            {/* <!--  Latest Orders --> */}
            <div className="block block-rounded block-mode-loading-refresh">
              <div className="block-header block-header-default">
                <h3 className="block-title">
                  Latest Utility Polls
                </h3>
              </div>
              <div className="block-content">
                <div className="table-responsive">
                  <table className="table table-striped table-hover table-borderless table-vcenter fs-sm">
                    <thead>
                      <tr>
                        <th>Pole</th>
                        <th>Line</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Route line</th>
                        <th>Created by</th>
                        <th>Updated by</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        utilityPolls.map((utilityPoll, index) => {
                          return (
                            <tr key={index}>
                              <td className="fw-semibold">
                                {utilityPoll.pole}
                              </td>
                              <td>{utilityPoll.line}</td>
                              <td>{utilityPoll.latitude}</td>
                              <td>{utilityPoll.longitude}</td>
                              <td>{utilityPoll.route_line.name}</td>
                              <td>{utilityPoll.created_by.name}</td>
                              <td>{utilityPoll.updated_by.name || "null"}</td>
                              <td>
                                {utilityPoll.status ? <span className="badge bg-success">Active</span> : <span className="badge bg-danger">InActive</span>}
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>

              </div>
              <div className="block-content block-content-full block-content-sm bg-body-light fs-sm text-center">
                <Link className="fw-medium" href={route('utility-polls.index')}>
                  View all orders
                  <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                </Link>
              </div>
            </div>
            {/* <!-- END Latest Orders --> */}
          </div>
        </div>
        {/* <!-- END Latest Orders + Stats --> */}
      </div>
      {/* <!-- END Page Content --> */}

    </AppLayout>
  )
}

export default Index