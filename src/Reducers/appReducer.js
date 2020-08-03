export const initialState = {
  currentPage: 1,
  lists: [],
  maxPages: 30,
  theme: 'light'
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_LISTS':
      return { ...state, lists: action.payload.results };
    case 'INCREMENT_PAGE':
      return { ...state, currentPage: state.currentPage + 1 };
    case 'DECREMENT_PAGE':
      return { ...state, currentPage: state.currentPage - 1 };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}
