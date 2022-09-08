import "./account.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressCard, faArrowsRotate, faBarsProgress, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";

function Account() {
  return (
    <div class="account">
        <div class="account__title-box">
            <h1 class="account__title-box-titre">Mon Compte</h1>
        </div>
        <div class="account__profile">
            <p class="account__profile-name"><FontAwesomeIcon icon={faFaceSmileBeam} className="icon__name" /> Steven Pasparla</p>
            <p class="account__profile-description">Membre depuis 2022 - 4 Commandes</p>
        </div>
        <div class="account__link">
            <li class="account__link-menu">
                <ol class="account__link-menu-categories">
                    <a href="#" class="account__link-menu-categories-a"><FontAwesomeIcon icon={faBarsProgress} className="icon__orders" /> Mes commandes</a>
                </ol>
                <ol class="account__link-menu-categories">
                    <a href="#" class="account__link-menu-categories-a"><FontAwesomeIcon icon={faAddressCard} className="icon__orders" />  Mes données personnelles</a>
                </ol>
                <ol class="account__link-menu-categories">
                    <a href="#" class="account__link-menu-categories-a"><FontAwesomeIcon icon={faArrowsRotate} className="icon__orders" />  Aides & retours</a>
                </ol>
                <ol class="account__link-menu-categories">
                    <a href="#" class="account__link-menu-categories-a"><FontAwesomeIcon icon={faHandshakeSimple} className="icon__orders" />  Parrainage</a>
                </ol>
            </li>
        </div>
    </div>
  )
}

export default Account;
