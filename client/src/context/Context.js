// import { createContext, useReducer, useEffect} from "react";
// import Reducer from "./Reducer";

// import jwt_decode from "jwt-decode";
// // import fetcher from '../../utils/fetcher';
// import checkToken from '../utils/currentTime ';

// const INITIAL_STATE = {
//   user: JSON.parse(localStorage.getItem("jwtToken") || null),
//   isFetching: false,
//   error: false,
// };

// export const Context = createContext(INITIAL_STATE);

// export const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

//   useEffect(() => {
//     localStorage.setItem("jwtToken", JSON.stringify(state.user))
//     if (state.user) {
//       const token = localStorage.getItem("jwtToken")
//       const decoded = jwt_decode(token);
//       checkToken(decoded);
//     }

    
//   }, [state.user])
//   return (
//     <Context.Provider
//       value={{
//         user: state.user,
//         isFetching: state.isFetching,
//         error: state.error,
//         dispatch,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };
