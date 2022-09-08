import { combineReducers } from 'redux';
import {GET_ALL_PRODUCT,ADD_CART,DELETE_CART} from  '../actions/cartActions';

const initProduct = {
  numberCart:0,
  Carts:[],
  Products:[],
}

function todoCart(state = initProduct, action) {
  switch(action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        Products: action.payload
      }

    case ADD_CART:
      if(state.numberCart===0) {
        let cart = {
          
        }
      }

      
  }
}
