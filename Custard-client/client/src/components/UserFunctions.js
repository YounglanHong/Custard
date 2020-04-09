// import axios from "axios";
// export const register = newUser => {
//   return axios
//     .post("http://localhost:4000/users/signup", {
//       username: newUser.username,
//       email: newUser.email,
//       password: newUser.password
//     })
//     .then(response => {
//       console.log("가입성공");
//     });
// };
// export const login = user => {
//   return axios
//     .post("users/signin", {
//       email: user.email,
//       password: user.password
//     })
//     .then(response => {
//       localStorage.setItem("usertoken", response.data);
//       console.log("로그인 성공", response.data);
//       localStorage.removeItem(localStorage);
//       return response.data;
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
