// import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
// class Landing extends Component {
//   logOut(e) {
//     e.preventDefault();
//     localStorage.removeItem("usertoken");
//     this.props.history.push(`/`);
//   }
//   render() {
//     const loginRegLink = (
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link to="/login2" className="nav-link">
//             로그인
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/signup" className="nav-link">
//             회원가입
//           </Link>
//         </li>
//       </ul>
//     );
//     const userLink = (
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link to="/profile" className="nav-link">
//             User
//           </Link>
//         </li>
//         <li className="nav-item">
//           <a href="" onClick={this.logOut.bind(this)} className="nav-link">
//             로그아웃
//           </a>
//         </li>
//       </ul>
//     );
//     return (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarsExample10"
//           aria-controls="navbarsExample10"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div
//           className="collapse navbar-collapse justify-content-md-center"
//           id="navbarsExample10"
//         >
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </li>
//           </ul>
//           {localStorage.usertoken ? userLink : loginRegLink}
//         </div>
//       </nav>
//     );
//   }
// }
// export default withRouter(Landing);
