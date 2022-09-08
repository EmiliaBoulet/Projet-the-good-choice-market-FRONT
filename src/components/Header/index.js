import PropTypes from 'prop-types';
import logo from 'src/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, faEnvelope, faCircleUser, faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import './header.scss';

function Header() {
  const params = useParams();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {

        const response = await axios.get('https://the-good-choice-market-v1.herokuapp.com/api/category/sub_category');
        setCategory(response.data);

        console.log(response.data);
      }
      catch (err) {
        console.log(err.response.data);
      }
    };

    fetchCategory();
  }, []);

  const categoryHeader = category.filter((category) => category.category === params.category);
  return (
    <div className="navBar">
      <header className="header">
        <NavLink to="/">
          <img src={logo} className="header_logo" alt="logo the good choice market" />
        </NavLink>
        <nav className="header_all_categories">
          {
            category.map((data) => (
              <div className="category_dropdown" key={data.category}>
                <div className="header_category">{data.category}
                  <div className="dropdown_content">
                    <ul>
                      {data.sub_category.map((subCategory) => (
                        <NavLink to={`/subcategory/${subCategory}`}>
                          
                          <li className="dropdown_subcategory">
                            {subCategory}

                          </li>
                        </NavLink>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          }
        </nav>

        <nav className="header_icons">
          <ul className="header_icon_list">

            <li className="header_search">
              <a href="#">

                <FontAwesomeIcon icon={faSearch} className="icon" />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>
            </li>

            <li><NavLink to="/login"> <FontAwesomeIcon icon={faCircleUser} className="icon" /></NavLink>
            </li>

            <li>

              <NavLink to="/basket"><FontAwesomeIcon icon={faBagShopping} className="icon" /></NavLink>

            </li>
          </ul>
        </nav>

      </header>
    </div>
  );
}
//  <FontAwesomeIcon icon={faBagShopping} className="icon" />

export default Header;
