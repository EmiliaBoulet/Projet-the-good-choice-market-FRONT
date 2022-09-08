import { useState } from "react";
import axios from "axios";
import "./register.scss";

function Register() {


  const [email, setEmail] = useState("pasparla3@wanadoo.fr");
  const [password, setPassword] = useState(1234);
  const [firstName, setFirstName] = useState("test");
  const [lastName, setLastName] = useState("test2");
  const [birthday, setBirthday] = useState("1950-02-02");
  const [phoneNumber, setPhoneNumber] = useState("0725859587");
  const [address, setAddress] = useState("rue");
  const [postalCode, setPostalCode] = useState(13127);
  const [city, setCity] = useState("Vitrolles");
  const [country, setCountry] = useState("France");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello", email, password);
    axios.post("https://the-good-choice-market-v1.herokuapp.com/api/user", {
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
      birthday: birthday,
      phone_number: phoneNumber,
      address: address,
      postal_code: postalCode,
      city: city,
      country: country
    })
    .then((response) => {
      //console.log(response);
      const user = response.data[0];
      //console.log(user);
    })
  }

  

  return (
    <div className="login_wrapper">
      <div className="register_title">Création de compte</div>
      <form onSubmit={handleSubmit} className="register_form">
        <label>
          <p className="register_name">Prénom</p>
          <input type="text" 
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          className="register_input"/>
        </label>
        <label>
          <p className="register_name">Nom</p>
          <input type="text" 
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          className="register_input"/>
        </label>
        <label>
          <p className="register_name">Email</p>
          <input type="email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="register_input"/>
        </label>
        <label>
          <p className="register_name">Mot de passe</p>
          <input type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="register_input"/>
        </label>
        <div>
          <button className="register_button" type="submit">Créer un compte</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
