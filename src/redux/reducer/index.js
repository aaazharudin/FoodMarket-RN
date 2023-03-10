import {combaineReducer} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';

const reducer = combaineReducer({registerReducer, globalReducer});

export default reducer;
