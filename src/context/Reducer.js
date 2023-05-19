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
  loading : false,
  project_id : null,
  user_uid : null
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
        user: action.payload.user,
        user_uid: action.payload.user_uid,
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
    case 'ADD_PROJECT_SUCCESS':
      return {
        ...initialState,
        project_id: action.payload.project_id,
        user_uid: action.payload.user_uid
      };
    default:
      return {
        ...initialState,
      };
  }
};
