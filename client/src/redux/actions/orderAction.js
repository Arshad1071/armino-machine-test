import axios from "axios"

export const listAllOrders = () => (dispatch) => {
    dispatch({ type: 'ALL_ORDERS_REQUEST', payload: { all_vms_loader: true } })
    axios.get(`http://localhost:5000/api/orders`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: 'ORDER_ALL_SUCCESS', payload: {
                        all_orders_data: res ? res : [],
                    }
                })
            } else {
                dispatch({ type: 'ORDER_ALL_FAILED', payload: { all_vms_loader: false } })
            }
        })
        .catch(error => {
            dispatch({ type: 'ORDER_ALL_FAILED', payload: { all_vms_loader: false } })
        }
        )
}

export const getOrder = () => (dispatch) => {
    dispatch({ type: 'ALL_ORDERS_REQUEST', payload: { all_vms_loader: true } })
    axios.get(`http://localhost:5000/api/createorder`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: 'ORDER_ALL_SUCCESS', payload: {
                        payment_order_data: res ? res : [],
                    }
                })
            } else {
                dispatch({ type: 'ORDER_ALL_FAILED', payload: { all_vms_loader: false } })
            }
        })
        .catch(error => {
            dispatch({ type: 'ORDER_ALL_FAILED', payload: { all_vms_loader: false } })
        }
        )
}
export const grabStatus = (paymentId) => (dispatch) => {
    dispatch({ type: 'ALL_ORDERS_REQUEST', payload: { all_vms_loader: true } })
    axios.get(`http://localhost:5000/api/payments/${paymentId}`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: 'ORDER_ALL_SUCCESS', payload: {
                        payment_status_data: res ? res : [],
                    }
                })
            } else {
                dispatch({ type: 'ORDER_ALL_FAILED', payload: { all_vms_loader: false } })
            }
        })
        .catch(error => {
            dispatch({ type: 'ORDER_ALL_FAILED', payload: { all_vms_loader: false } })
        }
        )
}


