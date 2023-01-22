const saveUser = user => {
  return {
    type: 'user/save',
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: 'user/remove',
  };
};

export {saveUser, removeUser};
