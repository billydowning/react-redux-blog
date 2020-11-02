import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
  posts: postsReducer
  // State will have a property called posts in PostList component
  // This property will hold all the data that this reducer has returned
});
