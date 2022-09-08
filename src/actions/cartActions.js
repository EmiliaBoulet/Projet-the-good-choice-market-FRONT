import axios from "axios";
export const ADD_CART = "ADD_CART";
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const DELETE_CART = 'DELETE_CART';

export const fetchAllProduct = () => {
  return (dispatch) => {
      return axios.get("https://the-good-choice-market-v1.herokuapp.com/api/product").then(res => {
        
          dispatch(getAllProduct(res.data));
      });
  }
}

export function getAllProduct(payload){
  return{
      type:'GET_ALL_PRODUCT',
      payload
  }
}

export function AddCart(payload){
  return {
      type:'ADD_CART',
      payload
  }
}

export function DeleteCart(payload){
  return{
      type:'DELETE_CART',
      payload
  }
}
