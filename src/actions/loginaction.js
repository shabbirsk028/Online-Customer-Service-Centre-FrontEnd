import axios from "axios";


// action for login
export const loginAction = (login) => (dispatch) => {
  axios
    .post("http://localhost:9090/api/login", login)
    .then((res) =>
      dispatch({
        type: "LOGIN",
        payload: res.data,
      })
    )
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({
        type: "ERR_RES",
        payload: error.response.data.message,
      });
    });
};
export const logoutAction = (logout) => async (dispatch) => {
  const result = await axios.patch(`http://localhost:3000/logout`,logout);
  console.log(result);
  const res = result.data;
  res.errMsg = "";
  dispatch({
    type: "LOGOUT",
    payload: res,
  });
};