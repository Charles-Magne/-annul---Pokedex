import Header from "../Header";
import "./style.scss";

//les icones
import face from "../../assets/pictures/face-a-face.jpg";
import globe from "../../assets/icone/monde.png";
import biome from "../../assets/icone/savane.png";
import plate from "../../assets/icone/en-mangeant.png";

// font alsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
              <div class="search_filter--biome search_option">Biome</div>
              <div class="search_filter--country search_option">Pays</div>
              <div class="search_filter--alimentation search_option">
                Omnivore
              </div>
              <button>Au hasard</button>
            </div>
          </div>
          <div class="number-results">8 Résultats</div>
          <article class="card-animal">
            <img class="img1" src={face} alt="animal picture" />
            <div class="selection-1">
              <div class="name-espece-container">
                <span class="animal-name">Aigle</span>
                <span class="animal-sort">Espece</span>
                <span class="animal-underSort">sous-espece</span>
              </div>
              <div class="biome-pays-regime">
                <div class="contenaire-info">
                  <img class="icone_world icone" src={biome} alt="word icone"/>
                  <span class="info-name">Biome</span>
                </div>
                <div class="contenaire-info">
                  <img class="icone_world icone" src={globe} alt="world icone"/>
                  <span class="info-name" >pays</span>
                </div>
                <div class="contenaire-info">
                  <img class="icone_world icone" src={plate} alt="word icone"/>
                  <span class="info-name" >régime</span>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="ad-droit">Pub2</div>
      </div>
    </div>
  );
}

export default Accueil;
