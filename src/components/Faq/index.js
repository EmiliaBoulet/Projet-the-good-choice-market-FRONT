import "./faq.scss";

function Faq() {
  return(
    <div className="faq_container">
      <h2 className="faq_title">FAQ</h2>
      <ul className="faq_list">
        <li className="faq_list_theme"><h3 className="faq_list_title">The Good Choice Market</h3>
          <ul className="faq_list_container">
            <li className="faq_list_question">
              Qui sommes-nous ?
            </li>
            <p className="faq_answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel tincidunt elementum. 
              Praesent non rutrum tortor, eget lobortis felis. Nulla in risus a est pellentesque porttitor. 
              Aliquam sit.</p>
            <li className="faq_list_question">
              D'ou viennent les produits ?
            </li>
            <p className="faq_answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel tincidunt elementum. 
              Praesent non rutrum tortor, eget lobortis felis. Nulla in risus a est pellentesque porttitor. 
              Aliquam sit.</p>
            <li className="faq_list_question">
              Quelles sont nos valeurs ?
            </li>
            <p className="faq_answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel tincidunt elementum. 
              Praesent non rutrum tortor, eget lobortis felis. Nulla in risus a est pellentesque porttitor. 
              Aliquam sit.</p>
          </ul>
        </li>

        <li className="faq_list_theme"><h3 className="faq_list_title">Livraisons</h3>
          <ul className="faq_list_container">
            <li className="faq_list_question">
              Peut-on se faire livrer à domicile ?
            </li>
            <p className="faq_answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel tincidunt elementum. 
              Praesent non rutrum tortor, eget lobortis felis. Nulla in risus a est pellentesque porttitor. 
              Aliquam sit.</p>
            <li className="faq_list_question">
              Comment choisir et définir son point relais ?
            </li>
            <p className="faq_answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel tincidunt elementum. 
              Praesent non rutrum tortor, eget lobortis felis. Nulla in risus a est pellentesque porttitor. 
              Aliquam sit.</p>
          </ul>
        </li>

        <li className="faq_list_theme"><h3 className="faq_list_title">Communication</h3>
          <ul className="faq_list_container">
            <li className="faq_list_question">
              Comment contacter l'équipe The Good Choice Market ?
            </li>
            <p className="faq_answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel tincidunt elementum. 
              Praesent non rutrum tortor, eget lobortis felis. Nulla in risus a est pellentesque porttitor. 
              Aliquam sit.</p>
            <li className="faq_list_question">
              Comment recevoir les actualités de The Good Choice Market ?
            </li>
            <p className="faq_answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros vel tincidunt elementum. 
              Praesent non rutrum tortor, eget lobortis felis. Nulla in risus a est pellentesque porttitor. 
              Aliquam sit.</p>
          </ul>
        </li>

      </ul>
    </div>
  )
}

export default Faq;
