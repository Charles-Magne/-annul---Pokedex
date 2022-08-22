import "./style.scss";

import face from "../../assets/pictures/face-a-face.jpg";
import globe from "../../assets/icone/monde.png";
import biome from "../../assets/icone/savane.png";
import plate from "../../assets/icone/en-mangeant.png";

//Les actions 
import {

} from '../../action/animal';

function CardAnimal() {
  return (
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
                  <img class="icone_world icone" src={biome} alt="word icone" />
                  <span class="info-name">Biome</span>
                </div>
                <div class="contenaire-info">
                  <img
                    class="icone_world icone"
                    src={globe}
                    alt="world icone"
                  />
                  <span class="info-name">pays</span>
                </div>
                <div class="contenaire-info">
                  <img class="icone_world icone" src={plate} alt="word icone" />
                  <span class="info-name">régime</span>
                </div>
              </div>
            </div>
          </article>
  )
}

export default CardAnimal;
