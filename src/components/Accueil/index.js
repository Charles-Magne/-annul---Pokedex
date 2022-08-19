import Header from "../Header";
import "./style.scss";
import face from "../../assets/pictures/face-a-face.jpg";

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
                <span>Biome</span>
                <span>Pays</span>
                <span>Regime</span>
              </div>
            </div>
            <span>Proies</span>
            <span>predateurs</span>
          </article>
        </div>
        <div class="ad-right">Pub2</div>
      </div>
    </div>
  );
}

export default Accueil;
