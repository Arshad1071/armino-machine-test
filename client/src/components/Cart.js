import React, { useState } from 'react';
import '../assets/css/theme.css';

const Cart = () => {

    const [productList, setProductList] = useState([{}, {}, {}])


    return (
        <div>

            <main class="main" id="top">
                <section class="py-5 overflow-hidden bg-primary" id="home">
                    <div class="container">
                        <div class="row flex-center">

                            <div class="col-md-7 col-lg-6 py-8 text-md-start text-center">

                                <h1 class="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">Cart</h1>

                                <div class="card w-xxl-75">
                                    <div class="card-body">
                                        <nav>
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">

                                                <button class="nav-link mb-3" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><i class="fas fa-shopping-bag me-2"></i>Product List</button>
                                            </div>
                                        </nav>
                                        <div class="tab-content mt-3" id="nav-tabContent">

                                            {
                                                productList.map((items, index) => {
                                                    return (
                                                        <div style={{ "padding": "25px" }} class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                                                            <form class="row gx-2 gy-2 align-items-center">
                                                                <div  class="col">
                                                                    <div style={{ "padding": "10px" }} class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                                        <label class="visually-hidden" for="inputDelivery">Address</label>
                                                                        <input class="form-control input-box form-foodwagon-control" id="inputDelivery" type="text" placeholder="Enter Product Name" />
                                                                    </div>
                                                                    <div  style={{ "padding": "10px" }} class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                                        <label class="visually-hidden" for="inputDelivery">Address</label>
                                                                        <input class="form-control input-box form-foodwagon-control" id="inputDelivery" type="text" placeholder="Enter Price" />
                                                                    </div>
                                                                    <div  style={{ "padding": "10px" }} class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                                        <label class="visually-hidden" for="inputDelivery">Address</label>
                                                                        <input class="form-control input-box form-foodwagon-control" id="inputDelivery" type="text" placeholder="Enter Price" />
                                                                    </div>
                                                                </div>
                                                                {
                                                                    productList.length == index + 1 ?
                                                                        <div class="d-grid gap-3 col-sm-auto">
                                                                            <button class="btn btn-danger" type="submit">Add Product</button>
                                                                        </div>
                                                                        : null
                                                                }
                                                            </form>

                                                        </div>
                                                    )
                                                })
                                            }


                                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <form class="row gx-4 gy-2 align-items-center">
                                                    <div class="col">
                                                        <div class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                            <label class="visually-hidden" for="inputPickup">Address</label>
                                                            <input class="form-control input-box form-foodwagon-control" id="inputPickup" type="text" placeholder="Enter Your Address" />
                                                        </div>
                                                    </div>
                                                    <div class="d-grid gap-3 col-sm-auto">
                                                        <button class="btn btn-danger" type="submit">Add product</button>
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
            </main>


            <script src="vendors/@popperjs/popper.min.js"></script>
            <script src="vendors/bootstrap/bootstrap.min.js"></script>
            <script src="vendors/is/is.min.js"></script>
            <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
            <script src="vendors/fontawesome/all.min.js"></script>
            <script src="assets/js/theme.js"></script> *

            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&amp;display=swap" rel="stylesheet" />

        </div>
    )
}

export default Cart