import './basket.scss';
import {
  Badge,
  Dropdown,
} from 'react-bootstrap';
// import picture
import { NavLink } from 'react-router-dom';
const imageUrlBeauty = 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906716/visuels%20produits/Beaut%C3%A9/Maison%20Marc%C3%A9/MasqueCheveux_miniature_rqybee.jpg';
const imageUrlFurniture = 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906793/visuels%20produits/Meubles/Bomeubles/Fauteuil_miniature_ls6aom.jpg';
const imageUrlFood = 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906849/visuels%20produits/Loisirs/Les%20gourmands%20Verts/coursCuisine_miniature_wsv61x.jpg';
function Basket() {
  return (
    <div className="basket">
      <div className="title">
        <p className="title_name"> Panier</p>
      </div>
      <div className="product">
        <div className="product_brand">
          Maison Marcé
          <img className="product_picture" src={imageUrlBeauty} alt="hair-mask" />
        </div>
        <div className="delivery">
          <div className="delivery_product">
            <p className="delivery_fee">Frais de livraison: 2.99 € </p>
            <p className="delivery_time"> Estimation de livraison: 19-22 Juillet </p>
          </div>
          <div className="delivery_title">
            Masque cheveux secs
          </div>
          <div className="quantity">
            <Dropdown.Toggle>
              <Badge> {1} </Badge>
            </Dropdown.Toggle>
            <p className="quantity_price"> 30€ </p>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_brand">
          Les Bomeubles
          <img className="product_picture" src={imageUrlFurniture} alt="furniture" />
        </div>
        <div className="delivery">
          <div className="delivery_product">
            <p className="delivery_fee">Frais de livraison: 29 € </p>
            <p className="delivery_time"> Estimation de livraison: 31 Juillet </p>
          </div>
          <div className="delivery_title">
            Fauteuil Velours - Bleu
          </div>
          <div className="quantity">
            <Dropdown.Toggle>
              <Badge> {1} </Badge>
            </Dropdown.Toggle>
            <p className="quantity_price"> 149€ </p>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product_brand--green">
          Les Gourmands Verts
          <img className="product_picture" src={imageUrlFood} alt="food" />
        </div>
        <div className="delivery">
          <div className="delivery_title">
            Cours de cuisine végétale
          </div>
          <div className="quantity">
            <Dropdown.Toggle>
              <Badge> {1} </Badge>
            </Dropdown.Toggle>
            <p className="quantity_price"> 99€ </p>
          </div>
        </div>
      </div>
      <div className="total">
        <div className="total_title">
          <p className="total_delivery"> Total livraison</p>
          <p className="total_TTC"> TOTAL TTC </p>
        </div>
        <div className="price">
          <p className="price_delivery"> 31,99€ </p>
          <p className="price_TTC"> 309,99€</p>
        </div>
      </div>
      <NavLink to="/order">
        <div>
          <button type="submit" className="product_button">Valider mon panier</button>
        </div>
      </NavLink>
    </div>
  );
}
export default Basket;
