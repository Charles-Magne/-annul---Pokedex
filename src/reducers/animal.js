// ici on import les actions

import { FETCH_ALL_ANIMAL } from "../action/animal";

//on appelle le initalSate
const initialState = {
  fetchAllAnimal: '',
}

function animalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_ALL_ANIMAL:

  }
}

export default animalReducer;
