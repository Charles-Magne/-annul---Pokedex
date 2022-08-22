// == Import
import { Route, Routes } from 'react-router-dom';



//On import les composants dont on a besoin
import Accueil from '../Accueil';
import Header from '../Header';


// == Composant
function App() {
   //<Route path="/Ici c'est le chemin de la page " element={<Le element correspond au composant />} /
  return (
    <div className="app">
     <Header/>
     <Routes>
      <Route path="/" element={<Accueil />}/>
     </Routes>
    </div>
  );
}

// == Export
export default App;



