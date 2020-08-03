export const initialState = {
  currentPage: 1,
  lists: []
};

export default function reducer(state, action) {
  console.log(state.currentPage, 'appreducer');
  switch(action.type) {
    case 'SET_LISTS':
      return { ...state, lists: action.payload.results };
    case 'INCREMENT_PAGE':
      return { ...state, currentPage: initialState.currentPage + 1 };
    case 'DECREMENT_PAGE':
      return { ...state, currentPage: initialState.currentPage - 1 };
    default:
      return state;
  }
}
