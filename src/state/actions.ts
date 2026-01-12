// Here we used discriminated union == defined a type Action and then passed two interfaces separated by a vertical line to it
// It means that Action now can resolve to one of the forms that we passed

import { DragItem } from "../DragItem";

interface AddListAction {
  type: "ADD_LIST";
  payload: string;
}

interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; listId: string };
}

interface MoveItemAction {
  type : "MOVE_LIST"
  payload : {
    draggedId: string 
    hoverId: string
  }
}

interface SetDraggeditemAction {
  type : "SET_DRAGGED_ITEM"
  payload: DragItem | null
}


export type Action = AddListAction | AddTaskAction | MoveItemAction | SetDraggeditemAction;

// Exemples d'utilisation du type narrowing
// if (action.type === "ADD_LIST") {
//   return typeof action.payload;
//   // Will return "string"
// }
// if (action.type === "ADD_TASK") {
//   return typeof action.payload;
//   // Will return { text: string; listId: string }
// }

export const addTask = (text: string, listId: string): AddTaskAction => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
});

export const addList = (text: string): AddListAction => ({
  type: "ADD_LIST",
  payload: text,
});

export const moveList = (draggedId: string, hoverId : string): MoveItemAction => ({
  type : "MOVE_LIST",
  payload : {
    draggedId,
    hoverId
  }
})

export const setDraggeditem = (draggedItem: DragItem | null) : SetDraggeditemAction => ({
  type : "SET_DRAGGED_ITEM",
  payload: draggedItem
})

