let initialState = {
  fetching: true,
  hasErrored: false,
  data: []
};

export const fetchInitDataReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_START': {
      return {
        ...state, 
        fetching: action.fetching
      }
    }
    case 'FETCH_ERROR': {
      return {
        ...state, 
        fetching: action.fetching, 
        hasErrored: action.hasErrored, 
        error: action.error
      }
    }
    case 'FETCH_SUCCESS': {
      return {
        ...state,
        fetching: action.fetching,
        data: action.data
      }
    }
  }
};