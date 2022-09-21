import React, { useEffect, useState } from 'react';
import '../assets/css/theme.css';

const Cart = () => {

    const [productList, setProductList] = useState([{}]);
    const [total, setTotal] = useState(0)

    const addProduct = () => {
        setProductList([...productList, {}])
    }

    const onValueChange = (e, index) => {
        let tempArr = productList;
        let tempObj = tempArr[index];
        tempObj[e.target.name] = e.target.value;

        if (tempObj.qty != undefined && tempObj.price != undefined) {
            if (e.target.name == "product" && e.target.value == "Notebook") {
                console.log('t1');
                if (tempObj.qty > 2 && tempObj.price > 499) {
                    console.log('Hi')
                }
            } else {
                tempObj.sub_total = tempObj.qty * tempObj.price;
            }
        }

        tempArr[index] = tempObj;
        setProductList(tempArr);
    }

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
                                                productList.map((item, index) => {
                                                    return (
                                                        <div key={index} style={{ "padding": "25px" }} class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                                                            <form class="row gx-2 gy-2 align-items-center">

                                                                <div class="col">

                                                                    <div style={{ "padding": "10px" }} class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                                        <input onChange={(e) => onValueChange(e, index)} name="product" class="form-control input-box form-foodwagon-control" id="productName" type="text" placeholder="Enter Product Name" />
                                                                    </div>

                                                                    <div style={{ "padding": "10px" }} class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                                        <input onChange={(e) => onValueChange(e, index)} name="price" class="form-control input-box form-foodwagon-control" id="price" type="text" placeholder="Enter Price" />
                                                                    </div>

                                                                    <div style={{ "padding": "10px" }} class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                                        <input onChange={(e) => onValueChange(e, index)} name="qty" class="form-control input-box form-foodwagon-control" id="qty" type="text" placeholder="Enter Qty" />
                                                                    </div>

                                                                    <div style={{ "padding": "10px" }} class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                                        <input
                                                                            readOnly
                                                                            name="qty" class="form-control input-box form-foodwagon-control" id="qty" type="text"
                                                                            value={item.sub_total}
                                                                            placeholder="sub_total" />
                                                                    </div>

                                                                </div>
                                                                {
                                                                    productList.length == index + 1 ?
                                                                        <div class="d-grid gap-3 col-sm-auto">
                                                                            <button class="btn btn-danger" onClick={(e) => {
                                                                                e.preventDefault();
                                                                                addProduct();
                                                                            }} >
                                                                                Add Product
                                                                            </button>
                                                                        </div>
                                                                        : null
                                                                }

                                                            </form>
                                                            {
                                                                productList.length == index + 1 ?
                                                                <form class="row gx-2 gy-2 align-items-center">
                                                                    <div class="col">
                                                                        <div style={{ "padding": "10px" }} class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                                            <label class="visually-hidden" for="inputDelivery">Address</label>
                                                                            <input class="form-control input-box form-foodwagon-control" id="cpCode" type="text" placeholder="Enter Cupone Code" />
                                                                        </div>
                                                                        <div style={{ "padding": "10px" }} class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                                                                            <label class="visually-hidden" for="inputDelivery">Address</label>
                                                                                <input class="form-control input-box form-foodwagon-control" id="total" type="text" value={total} />
                                                                        </div>
                                                                        </div>
                                                                    </form>
                                                                    : null
                                                            }

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