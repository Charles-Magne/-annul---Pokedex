import axios from 'axios';
import { FETCH_ALL_ANIMAL } from '../action/animal';

//les actions

// On branche le middleware au store

const animalMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_ANIMAL: {
      axios.get('https://api.api-ninjas.com/v1/animals')
      .then(
        (Response) => {
          console.log('Response API ->', Response.data);
          //store.dispatch(saveDeal(response.data));
        },
      )
      .catch(
        (error) => {
          console.log(error);
        },
      );

      return next(action);
    }
    default:
      return next(action);
  }
};

export default animalMiddleware;
