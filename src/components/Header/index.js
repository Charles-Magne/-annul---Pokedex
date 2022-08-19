
import "./style.scss";

function header (){
  return (
    <div>
    {/*Le Header*/}
    <div class="title_contener">
      <span class="title_main">Anim'O</span>
    </div>
    <nav class="navbar">
      <navlink class="nav-bar_cat">Encyclopedie</navlink>
      <navlink class="nav-bar_cat">Chaine alimentaire</navlink>
      <navlink class="nav-bar_cat">Tableau des espèces</navlink>
      <navlink class="nav-bar_cat">Au hasard</navlink>
    </nav>
      </div>
  )
}

export default header;
