export default function orderReduer(state = {}, action) {
  switch (action.type) {
    case "SET_ORDER_DATA": {
      return { ...state, ...action.payload };
    }
    case "ALL_ORDER_REQUEST": {
      return { ...state, ...action.payload, }
    }
    case "ORDER_ALL_SUCCESS": {
      return { ...state, ...action.payload }
    }
    case "ORDER_ALL_FAILED": {
      return { ...state, ...action.payload }
    }
    default: {
      return { ...state }
    }
  }
}
