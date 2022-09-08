// == Import

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Homepage from 'src/components/Homepage';
import Login from 'src/components/Login';
import Subcategory from 'src/components/Subcategory';
import Register from 'src/components/Register';
import Product from 'src/components/Product';
import Basket from 'src/components/Basket';
import Account from 'src/components/Account';
import Faq from 'src/components/Faq';
import Cgv from 'src/components/Cgv';

import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';

import dataTest from 'src/data/test';
import Order from '../Order/order';
import Error from '../404/index';
import Superdev from '../Superdev/index';


// == Composant
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Homepage card={dataTest.cards} />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/subcategory/:id" element={<Subcategory />} />

          <Route path="/product/:id" element={<Product />} />

          <Route path="/basket" element={<Basket />} />

          <Route path="/order" element={<Order />} />

          <Route path="/account" element={<Account />} />

          <Route path="/superdev" element={<Superdev />} />

          <Route path="/faq" element={<Faq />} />

          <Route path="/cgv" element={<Cgv />} />

          <Route path="*" element={<Error />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

// == Export
export default App;
