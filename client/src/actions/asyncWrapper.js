import { changeView } from './navActions';

export const asyncWrapper = (actions, redirect) => {
  return dispatch => Promise.all(actions)
    .then(response => {
      dispatch(changeView(redirect));
    });
};
