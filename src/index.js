// == Import : npm
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import axios from "axios";

axios.defaults.withCredentials = true;
// == Import : local
// Composants
import App from 'src/components/App';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)

const store = createStore(rootReducer);

console.log('Etat initial', store.getState());

store.subscribe(() => {
  console.log('Store mis à jour !', store.getState());
});

const rootReactElement = (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);