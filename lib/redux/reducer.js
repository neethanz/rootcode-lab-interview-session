import {combineReducers} from '@reduxjs/toolkit';

const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case 'tracks/addResultInitial':
      return [...action.payload];
    case 'tracks/addResultOnScroll':
      return [...state, ...action.payload];
    case 'tracks/addSearchedResultInitail':
      return [...action.payload];
    case 'tracks/addSearchedResultOnScroll':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const recentlyPlayedReducer = (state = [], action) => {
  switch (action.type) {
    case 'recentlyPlayed/initialLoad':
      return [...action.payload];
    case 'recentlyPlayed/add':
      return [action.payload, ...state];

    default:
      return state;
  }
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'user/save':
      return action.payload;
    case 'user/remove':
      return null;
    default:
      return state;
  }
};

const reducer = combineReducers({
  recentlyPlayed: recentlyPlayedReducer,
  user: userReducer,
  tracks: tracksReducer,
});

export default reducer;
