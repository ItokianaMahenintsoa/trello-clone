import { nanoid } from "nanoid";
import { Action } from "./actions";
import { findItemIndexById, moveItem} from "../utils/arrayUtils";
import { DragItem } from "../DragItem";

export interface Task {
  id: string;
  text: string;
}

export interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
  draggedItem: DragItem | null
}

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            text: action.payload,
            tasks: [],
          },
        ],
      };
    }
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(state.lists, listId);
      
      return {
        ...state,
        lists: state.lists.map((list, index) => 
          index === targetListIndex
            ? {
                ...list,
                tasks: [
                  ...list.tasks,
                  {
                    id: nanoid(),
                    text,
                  },
                ],
              }
            : list
        ),
      };
    }
    case "MOVE_LIST": {
      const {draggedId, hoverId} = action.payload
      const drapIndex = findItemIndexById(state.lists, draggedId)
      const hoverIndex = findItemIndexById(state.lists, hoverId)
      return {
        ...state,
        lists: moveItem(state.lists, drapIndex, hoverIndex)
      }
    }
    case "SET_DRAGGED_ITEM" : {
      return {
        ...state, 
        draggedItem : action.payload
      }
    }
    default: {
      return state;
    }
  }
};