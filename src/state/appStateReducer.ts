import { nanoid } from "nanoid";
import { Action } from "./actions";
import { findItemIndexById } from "../utils/arrayUtils";

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
    default: {
      return state;
    }
  }
};