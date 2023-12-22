import { combineReducers } from 'redux';
import Map from './Map/reducer';
import User from './User/reducer';

export default combineReducers({
  Map,
  User,
});
