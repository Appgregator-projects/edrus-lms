let course = localStorage.getItem('course')
  ? JSON.parse(localStorage.getItem('course'))
  : [];
let user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;


export const initialState = {
  course: [] || course,
  user : null || user,
  error : null,
  loading : false
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'INIT_START':
      return {
        ...initialState,
        loading: true,
      };
    case 'INIT_FINISH':
      return {
        ...initialState,
        loading: false,
      };
      case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload,
      };
      case 'LOGOUT_SUCCESS':
      return {
        ...initialState,
        user: null,
        error : null,
        loading : false
      };
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
