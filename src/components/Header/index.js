import "./style.scss";

function header() {
  return (
    <div>
      <div class="title_contener">
        <span class="title_main">Anim'O</span>
        <nav class="navbar">
          <navlink class="nav-bar_cat">Encyclopedie</navlink>
          <navlink class="nav-bar_cat">Chaine alimentaire</navlink>
          <navlink class="nav-bar_cat">Tableau des espèces</navlink>
        </nav>
      </div>
    </div>
  );
}

export default header;
