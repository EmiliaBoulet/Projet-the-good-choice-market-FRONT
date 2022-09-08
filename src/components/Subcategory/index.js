import logo from "src/assets/logoResize.png";
import "./subcategory.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

function Subcategory() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await axios.get(`https://the-good-choice-market-v1.herokuapp.com/api/product/sub_category/${id}`)
          setProducts(productsResponse.data.product)
      } catch (err) {
        console.log(err.response.data);
      }
      }
      fetchProducts();
    },  [id])


  return(
    <div className="subcategory_container">
      <div className="title__decoration"></div><h2 className="subcategory_title">{id}</h2>
      <div className="subcategory_allcard_container">

        {
          products.map((product) => {
            return(
            <div className="subcategory_card_container" key={product.id}>
              <img src={product.image} className="subcategory_card_img" alt={product.name}/>
              <h3 className="subcategory_card_title">{product.brand_name}</h3>
              <NavLink to={`/product/${product.id}`}><p className="subcategory_card_name">{product.name}</p></NavLink>
              <p className="subcategory_card_price">{product.price_ht}€</p>
            </div>
            )
          })
        }
        
        
      </div>
    </div>
  )
}

export default Subcategory;
