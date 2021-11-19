import { createStore } from 'redux';
import reducers from './reducers';

// const initialStoreState = {
//     loggedUserName: '',
// }


export const store = createStore(reducers);