const addToRecentlyPlayed = recentlyPlayed => {
  return {
    type: 'recentlyPlayed/add',
    payload: recentlyPlayed,
  };
};

const recentlyPlayedInitialLoad = recentlyPlayed => {
  return {
    type: 'recentlyPlayed/initialLoad',
    payload: recentlyPlayed,
  };
};

export {addToRecentlyPlayed, recentlyPlayedInitialLoad};
