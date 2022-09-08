

import { useState } from "react";
import "./login.scss";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const navigateToAccount = () => {
    
    navigate('/account');
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("https://the-good-choice-market-v1.herokuapp.com/api/user/login", {
      email: email,
      password: password,
    }, {withCredentials: true,
      credentials: 'include',})
    .then((response) => {
      console.log(response);
      const user = response.data.result;
      console.log(user);

      // TODO: Envoyer une action à redux pour mettre à jour l'user dans le store
    });
  }

  
  return (
  
    <div className="login_wrapper">
      <div className="login_title">Connexion</div>
      

      <form onSubmit={handleSubmit} className="login_form">
      
        <label className="login_label">
          <p className="login_name">Email</p>
          <input type="email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="login_input"/>
        </label>
        <label className="login_label">
          <p className="login_name">Mot de passe</p>
          <input type="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="login_input"/>
        </label>
        <div className="login__container">
          <p className="login_text">Réinitialiser son mot de passe</p>
          <button className="login_button" type="submit" onClick={navigateToAccount}>Se Connecter</button>
        </div>
      </form>

        <div className="register_container">
          <p className="register_text">Vous n'avez pas encore de compte ?</p>
          <NavLink to="/register"><button className="login__register-button">Créer un compte</button></NavLink>
        </div>
    </div>
  )
}

export default Login;
