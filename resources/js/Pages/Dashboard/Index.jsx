import React from 'react'
import AppLayout from '../Layouts/AppLayout'
import { Head } from '@inertiajs/react'

function Index() {

  return (
    <AppLayout>
      <Head title='Admin | Dashboard'/>
        {/* <!-- Hero --> */}
        <div className="content">
          <div className="d-md-flex justify-content-md-between align-items-md-center py-3 pt-md-3 pb-md-0 text-center text-md-start">
            <div>
              <h1 className="h3 mb-1">
                Dashboard
              </h1>
              <p className="fw-medium mb-0 text-muted">
                Welcome, admin! You have <a className="fw-medium" href="#">8 new notifications</a>.
              </p>
            </div>
            <div className="mt-4 mt-md-0">
              <a className="btn btn-sm btn-alt-primary" href="#">
                <i className="fa fa-cog"></i>
              </a>
              <div className="dropdown d-inline-block">
                <button type="button" className="btn btn-sm btn-alt-primary px-3" id="dropdown-analytics-overview" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Last 30 days <i className="fa fa-fw fa-angle-down"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end fs-sm" aria-labelledby="dropdown-analytics-overview">
                  <a className="dropdown-item" href="#">This Week</a>
                  <a className="dropdown-item" href="#">Previous Week</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">This Month</a>
                  <a className="dropdown-item" href="#">Previous Month</a>
                </div>
              </div>
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
                  <div className="fs-1 fw-bold">2,388</div>
                  <div className="text-muted mb-3">Registered Users</div>
                  <div className="d-inline-block px-3 py-1 rounded-pill fs-sm fw-semibold text-success bg-success-light">
                    <i className="fa fa-caret-up me-1"></i>
                    19.2%
                  </div>
                </div>
                <div className="block-content block-content-full block-content-sm bg-body-light fs-sm">
                  <a className="fw-medium" href="#">
                    View all users
                    <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="block block-rounded text-center d-flex flex-column h-100 mb-0">
                <div className="block-content block-content-full flex-grow-1">
                  <div className="item rounded-3 bg-body mx-auto my-3">
                    <i className="fa fa-level-up-alt fa-lg text-primary"></i>
                  </div>
                  <div className="fs-1 fw-bold">14.6%</div>
                  <div className="text-muted mb-3">Bounce Rate</div>
                  <div className="d-inline-block px-3 py-1 rounded-pill fs-sm fw-semibold text-danger bg-danger-light">
                    <i className="fa fa-caret-down me-1"></i>
                    2.3%
                  </div>
                </div>
                <div className="block-content block-content-full block-content-sm bg-body-light fs-sm">
                  <a className="fw-medium" href="#">
                    Explore analytics
                    <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="block block-rounded text-center d-flex flex-column h-100 mb-0">
                <div className="block-content block-content-full flex-grow-1">
                  <div className="item rounded-3 bg-body mx-auto my-3">
                    <i className="fa fa-chart-line fa-lg text-primary"></i>
                  </div>
                  <div className="fs-1 fw-bold">386</div>
                  <div className="text-muted mb-3">Confirmed Sales</div>
                  <div className="d-inline-block px-3 py-1 rounded-pill fs-sm fw-semibold text-success bg-success-light">
                    <i className="fa fa-caret-up me-1"></i>
                    7.9%
                  </div>
                </div>
                <div className="block-content block-content-full block-content-sm bg-body-light fs-sm">
                  <a className="fw-medium" href="#">
                    View all sales
                    <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="block block-rounded text-center d-flex flex-column h-100 mb-0">
                <div className="block-content block-content-full">
                  <div className="item rounded-3 bg-body mx-auto my-3">
                    <i className="fa fa-wallet fa-lg text-primary"></i>
                  </div>
                  <div className="fs-1 fw-bold">$4,920</div>
                  <div className="text-muted mb-3">Total Earnings</div>
                  <div className="d-inline-block px-3 py-1 rounded-pill fs-sm fw-semibold text-danger bg-danger-light">
                    <i className="fa fa-caret-down me-1"></i>
                    0.3%
                  </div>
                </div>
                <div className="block-content block-content-full block-content-sm bg-body-light fs-sm">
                  <a className="fw-medium" href="#">
                    Withdrawal options
                    <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END Overview -->


  {/* <!-- Latest Orders + Stats --> */}
          <div className="row">
            <div className="col-md-8">
              {/* <!--  Latest Orders --> */}
              <div className="block block-rounded block-mode-loading-refresh">
                <div className="block-header block-header-default">
                  <h3 className="block-title">
                    Latest Orders
                  </h3>
                  <div className="block-options">
                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i className="si si-refresh"></i>
                    </button>
                    <div className="dropdown">
                      <button type="button" className="btn-block-option" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="si si-chemistry"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          <i className="far fa-fw fa-dot-circle opacity-50 me-1"></i> Pending
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="far fa-fw fa-times-circle opacity-50 me-1"></i> Canceled
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="far fa-fw fa-check-circle opacity-50 me-1"></i> Completed
                        </a>
                        <div role="separator" className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-fw fa-eye opacity-50 me-1"></i> View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-content">
                  <table className="table table-striped table-hover table-borderless table-vcenter fs-sm">
                    <thead>
                      <tr className="text-uppercase">
                        <th>Product</th>
                        <th className="d-none d-xl-table-cell">Date</th>
                        <th>Status</th>
                        <th className="d-none d-sm-table-cell text-end" style={{ width: "120px" }}>Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="fw-semibold">iPhone 11 Pro</span>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          <span className="fs-sm text-muted">today</span>
                        </td>
                        <td>
                          <span className="fw-semibold text-warning">Pending..</span>
                        </td>
                        <td className="d-none d-sm-table-cell text-end fw-medium">
                          $1199,99
                        </td>
                        <td className="text-center text-nowrap fw-medium">
                          <a href="#">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fw-semibold">MacBook Pro 15"</span>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          <span className="fs-sm text-muted">today</span>
                        </td>
                        <td>
                          <span className="fw-semibold text-warning">Pending..</span>
                        </td>
                        <td className="d-none d-sm-table-cell text-end fw-medium">
                          $2.299,00
                        </td>
                        <td className="text-center text-nowrap fw-medium">
                          <a href="#">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fw-semibold">Nvidia GTX 2080 Ti</span>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          <span className="fs-sm text-muted">today</span>
                        </td>
                        <td>
                          <span className="fw-semibold text-warning">Pending..</span>
                        </td>
                        <td className="d-none d-sm-table-cell text-end fw-medium">
                          $1200,00
                        </td>
                        <td className="text-center text-nowrap fw-medium">
                          <a href="#">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fw-semibold">Playstation 4 Pro</span>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          <span className="fs-sm text-muted">today</span>
                        </td>
                        <td>
                          <span className="fw-semibold text-danger">Canceled</span>
                        </td>
                        <td className="d-none d-sm-table-cell text-end fw-medium">
                          $399,00
                        </td>
                        <td className="text-center text-nowrap fw-medium">
                          <a href="#">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fw-semibold">Nintendo Switch</span>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          <span className="fs-sm text-muted">yesterday</span>
                        </td>
                        <td>
                          <span className="fw-semibold text-success">Completed</span>
                        </td>
                        <td className="d-none d-sm-table-cell text-end fw-medium">
                          $349,00
                        </td>
                        <td className="text-center text-nowrap fw-medium">
                          <a href="#">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fw-semibold">iPhone 11</span>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          <span className="fs-sm text-muted">yesterday</span>
                        </td>
                        <td>
                          <span className="fw-semibold text-success">Completed</span>
                        </td>
                        <td className="d-none d-sm-table-cell text-end fw-medium">
                          $999,00
                        </td>
                        <td className="text-center text-nowrap fw-medium">
                          <a href="#">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fw-semibold">Airpods Pro</span>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          <span className="fs-sm text-muted">yesterday</span>
                        </td>
                        <td>
                          <span className="fw-semibold text-success">Completed</span>
                        </td>
                        <td className="d-none d-sm-table-cell text-end fw-medium">
                          $39,99
                        </td>
                        <td className="text-center text-nowrap fw-medium">
                          <a href="#">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fw-semibold">Xbox One X</span>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          <span className="fs-sm text-muted">yesterday</span>
                        </td>
                        <td>
                          <span className="fw-semibold text-success">Completed</span>
                        </td>
                        <td className="d-none d-sm-table-cell text-end fw-medium">
                          $499,00
                        </td>
                        <td className="text-center text-nowrap fw-medium">
                          <a href="#">
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="block-content block-content-full block-content-sm bg-body-light fs-sm text-center">
                  <a className="fw-medium" href="#">
                    View all orders
                    <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                  </a>
                </div>
              </div>
              {/* <!-- END Latest Orders --> */}
            </div>
            <div className="col-md-4 d-flex flex-column">
              {/* <!-- Stats --> */}
              <div className="block block-rounded">
                <div className="block-content block-content-full d-flex justify-content-between align-items-center flex-grow-1">
                  <div className="me-3">
                    <p className="fs-3 fw-bold mb-0">
                      35,698
                    </p>
                    <p className="text-muted mb-0">
                      Completed orders
                    </p>
                  </div>
                  <div className="item rounded-circle bg-body">
                    <i className="fa fa-check fa-lg text-primary"></i>
                  </div>
                </div>
                <div className="block-content block-content-full block-content-sm bg-body-light fs-sm text-center">
                  <a className="fw-medium" href="#">
                    View Archive
                    <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                  </a>
                </div>
              </div>
              <div className="block block-rounded text-center d-flex flex-column flex-grow-1">
                <div className="block-content block-content-full d-flex align-items-center flex-grow-1">
                  <div className="w-100">
                    <div className="item rounded-3 bg-body mx-auto my-3">
                      <i className="fa fa-archive fa-lg text-primary"></i>
                    </div>
                    <div className="fs-1 fw-bold">75</div>
                    <div className="text-muted mb-3">Products out of stock</div>
                    <div className="d-inline-block px-3 py-1 rounded-pill fs-sm fw-semibold text-warning bg-warning-light">
                      5% of portfolio
                    </div>
                  </div>
                </div>
                <div className="block-content block-content-full block-content-sm bg-body-light fs-sm">
                  <a className="fw-medium" href="#">
                    Order supplies
                    <i className="fa fa-arrow-right ms-1 opacity-25"></i>
                  </a>
                </div>
              </div>
              {/* <!-- END Stats --> */}
            </div>
          </div>
          {/* <!-- END Latest Orders + Stats --> */}
        </div>
        {/* <!-- END Page Content --> */}

    </AppLayout>
  )
}

export default Index