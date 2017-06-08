export const changeView = (newView, optionalEventId) => {
  return {
    type: 'CHANGE_VIEW',
    newView,
    optionalEventId
  };
};
