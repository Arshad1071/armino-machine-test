import React from 'react';
import './assets/css/theme.css'
import { Link} from "react-router-dom"
import foodLogo from './assets/img/gallery/hero-header.png'
import proOne from './assets/img/gallery/discount-item-1.png';
import proTwo from './assets/img/gallery/discount-item-2.png';
import selectLocation from './assets/img/gallery/location.png';
import chooseOrder from './assets/img/gallery/order.png';
import payAdv from './assets/img/gallery/pay.png';
import enjoyMeels from './assets/img/gallery/meals.png';


const App = () => {

  return (

    <div>
      <main class="main" id="top">

        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-navbar-on-scroll="data-navbar-on-scroll">
          <div class="container"><a class="navbar-brand d-inline-flex" href="index.html"><img class="d-inline-block" src={require("./assets/img/gallery/logo.svg").default} alt="logo" /><span class="text-1000 fs-3 fw-bold ms-2 text-gradient">Armino</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"> </span></button>
            <div class="collapse navbar-collapse border-top border-lg-0 my-2 mt-lg-0" id="navbarSupportedContent">
              <div class="mx-auto pt-5 pt-lg-0 d-block d-lg-none d-xl-block">
                <p class="mb-0 fw-bold text-lg-center">Deliver to: <i class="fas fa-map-marker-alt text-warning mx-2"></i><span class="fw-normal">Current Location </span>
                  <span>
                    West Nadakkavu Kozhikode
                  </span></p>
              </div>
              <form class="d-flex mt-4 mt-lg-0 ms-lg-auto ms-xl-0">
                <div class="input-group-icon pe-2"><i class="fas fa-search input-box-icon text-primary"></i>
                  <input class="form-control border-0 input-box bg-100" type="search" placeholder="Search Food" aria-label="Search" />
                </div>
                <button class="btn btn-white shadow-warning text-warning" type="submit"> <i class="fas fa-user me-2"></i><Link to='cart'>Cart</Link></button>
              </form>
            </div>
          </div>
        </nav>

        <section class="py-5 overflow-hidden bg-primary" id="home">
          <div class="container">
            <div class="row flex-center">
              <div class="col-md-5 col-lg-6 order-0 order-md-1 mt-8 mt-md-0"><a class="img-landing-banner" href="#!">
                <img class="img-fluid" src={foodLogo} alt="hero-header" /></a></div>
              <div class="col-md-7 col-lg-6 py-8 text-md-start text-center">
                <h1 class="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">Lori</h1>
                <h1 class="text-800 mb-5 fs-4">Within a few clicks, find meals that<br class="d-none d-xxl-block" />are accessible near you</h1>
                <div class="card w-xxl-75">
                  <div class="card-body">
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active mb-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i class="fas fa-motorcycle me-2"></i>Delivery</button>
                        <button class="nav-link mb-3" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><i class="fas fa-shopping-bag me-2"></i>Pickup</button>
                      </div>
                    </nav>
                    <div class="tab-content mt-3" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <form class="row gx-2 gy-2 align-items-center">
                          <div class="col">
                            <div class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                              <label class="visually-hidden" for="inputDelivery">Address</label>
                              <input class="form-control input-box form-foodwagon-control" id="inputDelivery" type="text" placeholder="Enter Your Address" />
                            </div>
                          </div>
                          <div class="d-grid gap-3 col-sm-auto">
                            <button class="btn btn-danger" type="submit">Find Food</button>
                          </div>
                        </form>
                      </div>
                      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <form class="row gx-4 gy-2 align-items-center">
                          <div class="col">
                            <div class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                              <label class="visually-hidden" for="inputPickup">Address</label>
                              <input class="form-control input-box form-foodwagon-control" id="inputPickup" type="text" placeholder="Enter Your Address" />
                            </div>
                          </div>
                          <div class="d-grid gap-3 col-sm-auto">
                            <button class="btn btn-danger" type="submit">Find Food</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-0">
          <div class="container">
            <div class="row h-100 gx-2 mt-7">
              <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
                <div class="card card-span h-100">
                  <div class="position-relative">
                    <img class="img-fluid rounded-3 w-100"
                      src={proOne}
                      alt="..." />
                    <div class="card-actions">
                      <div class="badge badge-foodwagon bg-primary p-4">
                        <div class="d-flex flex-between-center">
                          <div class="text-white fs-7">15</div>
                          <div class="d-block text-white fs-2">% <br />
                            <div class="fw-normal fs-1 mt-2">Off</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-0">
                    <h5 class="fw-bold text-1000 text-truncate">Flat Hill Slingback</h5><span class="badge bg-soft-danger py-2 px-3"><span class="fs-1 text-danger">6 days Remaining</span></span>
                  </div><a class="stretched-link" href="#"></a>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
                <div class="card card-span h-100">
                  <div class="position-relative"> <img class="img-fluid rounded-3 w-100" src={proTwo} alt="..." />
                    <div class="card-actions">
                      <div class="badge badge-foodwagon bg-primary p-4">
                        <div class="d-flex flex-between-center">
                          <div class="text-white fs-7">10</div>
                          <div class="d-block text-white fs-2">% <br />
                            <div class="fw-normal fs-1 mt-2">Off</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-0">
                    <h5 class="fw-bold text-1000 text-truncate">Ocean Blue Ring</h5><span class="badge bg-soft-danger py-2 px-3"><span class="fs-1 text-danger">6 days Remaining</span></span>
                  </div><a class="stretched-link" href="#"></a>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
                <div class="card card-span h-100">
                  <div class="position-relative"> <img class="img-fluid rounded-3 w-100" src={proTwo} alt="..." />
                    <div class="card-actions">
                      <div class="badge badge-foodwagon bg-primary p-4">
                        <div class="d-flex flex-between-center">
                          <div class="text-white fs-7">25</div>
                          <div class="d-block text-white fs-2">% <br />
                            <div class="fw-normal fs-1 mt-2">Off</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-0">
                    <h5 class="fw-bold text-1000 text-truncate">Brown Leathered Wallet</h5><span class="badge bg-soft-danger py-2 px-3"><span class="fs-1 text-danger">6 days Remaining</span></span>
                  </div><a class="stretched-link" href="#"></a>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
                <div class="card card-span h-100">
                  <div class="position-relative"> <img class="img-fluid rounded-3 w-100" src={proTwo} alt="..." />
                    <div class="card-actions">
                      <div class="badge badge-foodwagon bg-primary p-4">
                        <div class="d-flex flex-between-center">
                          <div class="text-white fs-7">20</div>
                          <div class="d-block text-white fs-2">% <br />
                            <div class="fw-normal fs-1 mt-2">Off</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-0">
                    <h5 class="fw-bold text-1000 text-truncate">Silverside Wristwatch</h5><span class="badge bg-soft-danger py-2 px-3"><span class="fs-1 text-danger">6 days Remaining</span></span>
                  </div><a class="stretched-link" href="#"></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-0 bg-primary-gradient">

          <div class="container">
            <div class="row justify-content-center g-0">
              <div class="col-xl-9">
                <div class="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
                  <h5 class="fw-bold text-danger fs-3 fs-lg-5 lh-sm my-6">How does it work</h5>
                </div>
                <div class="row">
                  <div class="col-sm-6 col-md-3 mb-6">
                    <div class="text-center"><img class="shadow-icon" src={selectLocation} height="112" alt="..." />
                      <h5 class="mt-4 fw-bold">Select location</h5>
                      <p class="mb-md-0">Choose the location where your food will be delivered.</p>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3 mb-6">
                    <div class="text-center">
                      <img class="shadow-icon" src={chooseOrder} height="112" alt="..." />
                      <h5 class="mt-4 fw-bold">Choose order</h5>
                      <p class="mb-md-0">Check over hundreds of menus to pick your favorite food</p>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3 mb-6">
                    <div class="text-center"><img class="shadow-icon" src={payAdv} height="112" alt="..." />
                      <h5 class="mt-4 fw-bold">Pay advanced</h5>
                      <p class="mb-md-0">It's quick, safe, and simple. Select several methods of payment</p>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3 mb-6">
                    <div class="text-center"><img class="shadow-icon" src={enjoyMeels} height="112" alt="..." />
                      <h5 class="mt-4 fw-bold">Enjoy meals</h5>
                      <p class="mb-md-0">Food is made and delivered directly to your home.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        ß
      </main>


      <script src="vendors/@popperjs/popper.min.js"></script>
      <script src="vendors/bootstrap/bootstrap.min.js"></script>
      <script src="vendors/is/is.min.js"></script>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
      <script src="vendors/fontawesome/all.min.js"></script>
      <script src="assets/js/theme.js"></script> *

      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&amp;display=swap" rel="stylesheet" />

    </div>
  );


}

export default App;
