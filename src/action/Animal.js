import { func } from "prop-types";

// Ici on creer une action type => c'est elle qui fait le lien entre le composant, le reducer et le Middleware 
export const FETCH_ALL_ANIMAL = 'FETCH_ALL_ANIMAL';

//
export function fetchAllAnimal() {
  return {
    type: FETCH_ALL_ANIMAL,
  };
}
