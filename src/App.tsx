import React, { useReducer } from "react";
import { AppContainer } from "./style";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";


// This is an exemple to useReducer in Typescript
// interface State {
//   count: number;
// }

// this is an exemple of union type in Typescript
// type Action =
//   | {
//       type: "increment";
//     }
//   | {
//       type: "decrement";
//     };

// const counterReducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };

//     default:
//       throw new Error();
//   }
// };

// This is an exemple to useReducer in Typescript
// const App = () => {
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });
//   return (
//     <>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//     </>
//   );
// };
// End of use Reducer in Typescript


const App = () => {
  const {state} = useAppState() // Call the hook

  
  return (
    <AppContainer>
      {state.lists.map((list, i ) => (
        <Column text={list.text} key={list.id} index={i}/>
      ))}
      {/* <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column> */}
      <AddNewItem toggleButtonText="+Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
