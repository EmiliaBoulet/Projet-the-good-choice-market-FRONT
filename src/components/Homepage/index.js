import PropTypes from "prop-types";
import { setUserAction } from '../../actions/userActions'
import { useDispatch } from "react-redux";
import "./main.scss";
import logo from "src/assets/logoMain.png";

const logo1 = "https://res.cloudinary.com/drjw8g2yn/image/upload/v1659603325/Logo/autres/Capture_d_e%CC%81cran_2022-08-04_a%CC%80_09.50.05_rw8pqk.png";
const logo2 = "https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600034/Logo/autres/Lavish%20et%20Squalor.png";
const logo3 = "https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600037/Logo/autres/Maison%20Marc%C3%A9.png";
const logo4 = "https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600411/Logo/autres/Les%20gourmands%20verts.png";
const logo5 = "https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600808/Logo/autres/Stone%20Ceramics.png";
const logo6 = "https://res.cloudinary.com/drjw8g2yn/image/upload/v1659601127/Logo/autres/Vegan.png";
const logo7 = "https://res.cloudinary.com/drjw8g2yn/image/upload/v1659601595/Logo/autres/Ethique.png";
const logo8 = "https://res.cloudinary.com/drjw8g2yn/image/upload/v1659601379/Logo/autres/Ecologique.png";

function Homepage({ card }) {
  const dispatch = useDispatch();

  console.log('action user:', setUserAction('salut@gmail.com'))

  // Exemple, à virer plus tard :angel:
  const onButtonClick = () => {
    dispatch(setUserAction('salut@gmail.com'))
  }

  return (
  <div className="main_content">
    <div className="introduction">
        <div className="introduction_slogan">
          <div className="introduction_slogan_top">
              Le e-marché des créateurs 
          </div>
          <div className="introduction_slogan_bottom">
              avec de belles valeurs
          </div>
        </div>
        <div>
            <img src={logo} alt="logo" className="introduction_logo">

            </img>
        </div>
    </div>

    <div className="products">
        <h2 className="main_products_title">Nos produits favoris</h2>


        <div className="products_all_card">
          {
            card.map((cards) => (
              <div className="products_card" key={cards.id}>
                <img src={cards.img} alt="logo resize" className="products_card_image"/>
                <h3 className="products_card_brands">{cards.brands}</h3>
                <p className="products_card_name">{cards.name}</p>
                <p className="products_card_price">{cards.price}€</p>
              </div>
            ))
          }
            
            
        </div>
    </div>

    <div className="brands">
        <h2 className="main_brands_title">Nos marques </h2>
        <div className="brands_all_logo">
              <img src={logo1} alt="logo" className="brands_logo"></img>
              <img src={logo2} alt="logo" className="brands_logo"></img>
              <img src={logo3} alt="logo" className="brands_logo"></img>
              <img src={logo4} alt="logo" className="brands_logo"></img>
              <img src={logo5} alt="logo" className="brands_logo"></img>
        </div>
    </div>

    <div className="values">
        <h2 className="main_values_title">Leurs valeurs </h2>
        <div className="values_all_logo">
          <img src={logo6} alt="logo" className="values_logo"></img>
          <img src={logo7} alt="logo" className="values_logo"></img>
          <img src={logo8} alt="logo" className="values_logo"></img> 
        </div>
    </div>

    
      
  </div>    
  )
}

Homepage.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      brands: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Homepage;
