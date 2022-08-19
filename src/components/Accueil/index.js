
import Header from "../Header"

function Accueil () {
  return(
    <div>
      <Header/>
      {/*La page home*/}
    <div>Pub1</div>
    <div class="search-bar_container" >
      <input class="search-bar" placeholder="Search"></input>
    </div>
    <div class="search_filter">
        <div class="search_filter--biome search_option">Biome</div>
        <div class="search_filter--country search_option">Pays</div>
        <div class="search_filter--alimentation search_option">Homnivore</div>
    </div>
   
      <span class="number-results">8 Résultats</span>
    </div>
  )
}

export default Accueil;
