import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT } from "./store/counter/counter-action";
import { counterReducer } from "./store/counter/counter-reducer";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(counterReducer);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(INCREMENT(5));
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch(DECREMENT(5));
        }}
      >
        DECREMENT
      </button>
      <h1>Hello World</h1>
    </div>
  );
};
export default App;

//********************Use-State Hook */

////*********************************UseReducer */
// const ACTION_TYPES = {
//   INCREMENT: "INCREMENT",
//   DECREMENT: "DECREMENT",
// };

// const reducer = (state, action) => {
//   const { type } = action;
//   // if (action.type === "INCREMENT") {
//   //   return state + 1;
//   // }
//   // if (action.type === "DECREMENT") {
//   //   return state - 1;
//   // }
//   // return state;
//   switch (type) {
//     case ACTION_TYPES.INCREMENT:
//       return state + 1;
//     case ACTION_TYPES.DECREMENT:
//       return state - 1;

//     default:
//       return state;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, 0);

//   return (
//     <>
//       <div className="App">
//         <button
//           className="button"
//           onClick={() => dispatch({ type: "INCREMENT" })}
//         >
//           +
//         </button>
//         <span className="count">{state}</span>
//         <button
//           className="button"
//           onClick={() => dispatch({ type: "DECREMENT" })}
//         >
//           -
//         </button>
//       </div>
//     </>
//   );
// }
