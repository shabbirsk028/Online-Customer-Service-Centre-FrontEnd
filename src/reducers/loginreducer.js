const initialLoginState = {
    email: "",
    role: "",
    loggedIn: false,
    errMsg: "",
  };
  
  const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, ...action.payload };
      case "ERR_RES":
        return { ...state, errMsg: action.payload };
      case "LOGOUT":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default loginReducer;