import { toast } from "react-toastify"
import { ADD_TO_CART, CHANGE_PAGE, CHANGE_QUANTITY, REMOVE_ITEM, SHOW_MESSAGE_ADD, SHOW_MESSAGE_DELETE, VIEW_DETAIL } from "../constant/constant"
import { PAGE_HOME, shoeArr } from "../data"

const initialState = {
    page: PAGE_HOME, // default page
    cart: [],
    viewingItem: {},
    shoeArr: shoeArr
}
export let shoeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_PAGE:
            state.page = payload
            return { ...state }
        case ADD_TO_CART:
            var cloneCart = [...state.cart]
            let shoe = payload
            var index = cloneCart.findIndex((item) => { return item.id === shoe.id })
            if (index < 0) {
                let newShoe = {
                    ...shoe,
                    soLuong: 1
                }
                newShoe.calSubtotal = () => { return newShoe.price * newShoe.soLuong }
                cloneCart.push(newShoe)
            } else {
                cloneCart[index].soLuong++
            }
            showMessage(SHOW_MESSAGE_ADD)
            return { ...state, cart: cloneCart }
        case VIEW_DETAIL:
            return { ...state, viewingItem: payload }
        case CHANGE_QUANTITY:
            var cloneCart = [...state.cart]
            let { id, option } = payload
            var index = cloneCart.findIndex((item) => { return item.id === id })
            if (index < 0) {
                console.log(`Không tìm thấy id này: ${id}`);
            } else {
                option ? cloneCart[index].soLuong++ : cloneCart[index].soLuong--
                cloneCart[index].soLuong < 1 && cloneCart.splice(index, 1) && showMessage(SHOW_MESSAGE_DELETE)
            }
            return { ...state, cart: cloneCart }
        case REMOVE_ITEM:
            var cloneCart = [...state.cart]

            var index = cloneCart.findIndex((item) => { return item.id === payload })
            if (index < 0) {
                console.log(`Không tìm thấy id này: ${id}`);
            } else {
                cloneCart.splice(index, 1)
            }
            showMessage(SHOW_MESSAGE_DELETE)
            return { ...state, cart: cloneCart }
        default:
            return state
    }
}

let showMessage = (message) => {
    toast(`🦄 ${message}`, { position: "bottom-right", });
}