
import axios from 'axios';
import './product.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const imageUrl = 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906794/visuels%20produits/Meubles/Bomeubles/Fauteuil_full_size_q1reh1.jpg';

function Product() {

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("*********",id);
        const productResponse = await axios.get(`https://the-good-choice-market-v1.herokuapp.com/api/product/${id}`)
          setProduct(productResponse.data)
      } catch (err) {
        console.log(err.response.data);
      }
      }
      fetchProduct();
    },  [id])
    console.log("data:", product.product_name);
  return (
    <>
      <div className="title_container"><h2 className="title__name-product">{product.sub_category_name} </h2></div>
      <div className="product_container" key={product.product_id}>
          <img src={product.image} alt={`Photo illustrant le produit ${product.product_name}`} className="product_image"/>
          <div className="product_description-container">
            <h2 className="page__product-brand">{product.brand_name}</h2>
            <h3 className="product_name">{product.product_name}</h3>
            <p className="product_description">{product.description}</p>
            <div className="product_price">{product.price_ttc}€</div>
              <div className="button_container">
          <button type='submit' className="page__product-button">Ajouter au panier</button> </div>
          </div>
          </div>

    </>
  );
}

  
export default Product;
