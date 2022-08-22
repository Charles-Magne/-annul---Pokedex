import "./style.scss";

//Les composants
import Header from "../Header";
import CardAnimal from "../CardAnimal";

//les icones
import arrowDown from "../../assets/icone/fleche-bas.png";
import random from "../../assets/icone/random.png";


// font alsome
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Accueil() {
  return (
    <div>
      <Header />
      <div class="Pseudo_Body">
        <div class="ad-Left">Pub1</div>
        <div class="page-container">
          <div class="search-and-option-container">
            <div class="search-bar_container">
              <input class="search-bar" placeholder="Search"></input>
            </div>
            <div class="search_filter">
              <div class="search_filter--biome search_option">
                Biome
                <img class="arrow_down" src={arrowDown} alt="arrow_down" />
              </div>
              <div class="search_filter--country search_option">
                Pays
                <img class="arrow_down" src={arrowDown} alt="arrow_down" />
              </div>
              <div class="search_filter--alimentation search_option">
                Omnivore
                <img class="arrow_down" src={arrowDown} alt="arrow_down" />
              </div>
              <button class="ramdowm_button">
              <img class="random_icone" src={random} alt="random_icone" />
                Au hasard</button>
            </div>
          </div>
          <div class="number-results">8 Résultats</div>
          <CardAnimal/>
        </div>
        <div class="ad-droit">Pub2</div>
      </div>
    </div>
  );
}

export default Accueil;
