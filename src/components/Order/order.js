import './order.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faApplePay, faCcApplePay } from '@fortawesome/free-brands-svg-icons';

function Order() {
  return (
    <>

      <div className="order">
        <div className="order_title">
          Commande

        </div>

        <form className="order_contact">
          <p className="order_contact_title">
            Adresse d'expédition
          </p>
          <p className="order_contact_fName">
            <input placeholder="Prénom" />
          </p>

          <p className="order_contact_lName">
            <input placeholder="Nom" />
          </p>

          <p className="order_contact_adresse">
            <input placeholder="Adresse" />
          </p>

          <p className="order_contact_CP">
            <input placeholder="Code Postal" />
          </p>
          <p className="order_contact_city">
            <input placeholder="Ville" />
          </p>

          <p className="order_contact_phone">
            <input placeholder="Numéro de téléphone" />
          </p>

        </form>

        <p className="order_contact_title">
          Mode de paiement
        </p>

        <div className="order_paiement">

          <div className="order_paiement_icon">
            <p className="order_paiement_icon_BK">
              <FontAwesomeIcon icon={faCreditCard} className="icon__paiement" />
            </p>
            <p className="order_paiement_icon_apple">
              <FontAwesomeIcon icon={faCcApplePay} className="icon__paiement" />
            </p>

          </div>


          <div className="round">
          <FontAwesomeIcon icon={faSquareCheck} className="icon__paiement" />

          <FontAwesomeIcon icon={faSquareCheck} className="icon__paiement" />
          </div>


        </div>

        <p className="order_contact_title">
          Recapitulatif de votre commande
        </p>

        <div className="order_items">

          <div className="order_items_brand">

            <p className="Marce">
              <p className="Marce_color">
                Maison Marcé
              </p>
              <p className="brand_light">
                Masque pour cheveux secs
              </p>
            </p>

            <p className="Bomeubles">
              <p className="Bomeubles_color">
                Les Bomeubles
              </p>
            </p>
              <p className="brand_light">
                Fauteuil velours - bleu
              </p>

            <p className="Gourmands">
              <p className="Gourmands_color">
                Les Gourmands verts
              </p>
              <p className="brand_light">
                Cours de cuisine végétale
              </p>
            </p>
          </div>

          <div className="order_items_delivery">


            <p className="order_items_delivery_Marce">
              Frais de livraison
              Est. de livraison
            </p>

            <p className="order_items_delivery_Bomeubles">
              Frais de livraison
              Est. de livraison

            </p>
          </div>

          <div className="order_items_price">


            <p className="order_items_price_Marce">
              2.99€
            </p>
            <p className="order_items_date">


              19-22 Juillet
            </p>
            <p className="price_light">
              30€
            </p>

            <p className="order_items_price_Bomeubles">
              29€
            </p>


            <p className="order_items_date">
              31 Juillet
            </p>

            <p className="price_light">
              149€
            </p>



            <p className="order_items_price_Gourmands">
              <p className="price_light">
                99€


              </p>
            </p>
          </div>
        </div>
      </div>

      <div className="order_total">


        <div className="order_total_title">
          <p className="order_total_delivery"> Total livraison</p>
          <p className="order_total_TTC"> TOTAL TTC </p>
        </div>

        <div className="order_price">
          <p className="order_price_delivery"> 31.99€ </p>

          <p className="order_price_TTC"> 309,99€</p>

        </div>
      </div>

      <div>
        <button type="submit" className="order_button">Valider ma commande</button>
      </div>
    </>
  );
}
export default Order;
