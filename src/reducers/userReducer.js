const initialState = {
  email: '',
  firstName: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        email: action.email,
      };

    default:
      return state;
  }
};

export default userReducer;
