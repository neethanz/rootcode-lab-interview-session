const addInitialLoadedTracks = tracks => {
  return {
    type: 'tracks/addResultInitial',
    payload: tracks,
  };
};

const addResultsOnScroll = tracks => {
  return {
    type: 'tracks/addResultOnScroll',
    payload: tracks,
  };
};

const addInitailSearchedTracks = tracks => {
  return {
    type: 'tracks/addSearchedResultInitail',
    payload: tracks,
  };
};

const addSearchedResultOnScroll = tracks => {
  return {
    type: 'tracks/addSearchedResultOnScroll',
    payload: tracks,
  };
};

export {
  addInitialLoadedTracks,
  addResultsOnScroll,
  addInitailSearchedTracks,
  addSearchedResultOnScroll,
};
