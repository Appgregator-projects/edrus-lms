let course = localStorage.getItem('course')
  ? JSON.parse(localStorage.getItem('course'))
  : [];
export const initialState = {
  course: [] || course,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...initialState,
        course: action.cart,
      };
    default:
      return {
        ...initialState,
      };
  }
};
