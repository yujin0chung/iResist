// export const fetchInitDataReducer = (state={}, action) => {
//   switch (action.type) {
//     case 'FETCH_START': {
//       return {
//         ...state,
//         fetching: action.fetching
//       }
//     }
//     case 'FETCH_ERROR': {
//       return {
//         ...state,
//         fetching: action.fetching,
//         hasErrored: action.hasErrored,
//         error: action.error
//       }
//     }
//     case 'FETCH_SUCCESS': {
//       return {
//         ...state,
//         fetching: action.fetching,
//         data: action.data
//       }
//     }
//     default: return state;
//   }
// };
