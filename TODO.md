To create a React application with typescript 
    Run the following command line : npx create-react-app template typescript trello-clone
    

tsconfig.json : contains Typescript configuration
index.tsx : most important file in /src folder => application entry point
file with *.d.ts contains typescript types definitions

1. Remove logo.svg, App.css, App.test.tsx, serviceWorker.ts
    Remove all the reportWebVitals mention

2. Add Global Styles in src/index.css

3. Install styled-components : npm install styled-components
    Create styles.ts file (in src folder) 
    Add import styled from 'styled-components'; => we have an error 
    Install the missing types : npm install @types/styled-components

4. In styles.css , create AppContainer container
    Import AppContainer to src/App.tsx 
    And use it 

5. In style.css, create  ColumnContainer, ColumnTitle, CartContainer

6. Create Column Components : src/Column.tsx
    Use ColumnContainer an ColumnTitle inside
    Create ColumnProps for Column Components

7. Create Card Components

8. Use Card Components in src/Column.tsx

<!-- COMPONENTS FOR ADDING NEW ITEMS -->
1. In src/styles.ts, define a new type AddItemButtomProps for add new "Add another cart" button
define the button styled-component

2. Create AddNewItem Components

3. Create Input Form => scr/NewItemForm.tsx

4. Update AddNewItem to add NewItemForm component

5. Add AddNewItem to App Layout in src/App.tsx => to add New List
    Add AddNewItem to Column Layout in Column.tsx to add new Task

6. Create a new file scr/utils/useFocus.ts => to get access to the rendered input element

7. Go back to scr/NewItemForm.tsx => use the hooks useFocus

<!-- ADD GLOBAL STATE AND BUSINESS LOGIC -->
1. Open App.tsx , and add a counter exemple : (I comment all the code of counter exemple)

2. Create a new file : scr/AppStateContext.tsx
    Define the application data
    Define the types
    Define AppStateContext
    Define AppStateProvider

3. Go to index.tsx
    Wrap the <App/> into AppStateProvider.

4. Using Data From Global Context => Implement Custom Hook
    Go back to src AppStateContext.tsx 
    Import useContext
    Define a new function => useAppState
    
5. Get The Data From AppStateContext
    Go to src/App.tsx
    Import the hook 
    Update the layoout to use the appData *
    Update Column.tsx props to accept index props
    Continue Updating Column.tsx to use he hook useAppState

<!-- ADDING ITEMS -->
1. Adding Two Actions: ADD_TASK and ADD_LIST in src/AppStateContext
    Don't forget the Type

2. Define appStateReducer : scr/state/appStateReducer.ts

3. Update AppStateProvider : src/AppStateContext.tsx

4. Adding List : => we will use nanoid librairies (Nanoid is a Javascript librairy for generate ID)
    Install nanoid via npm/yarn
    Import nanoid in scr/state/appStateReducer.ts
    Update the ADD_LIST block to the reducer 

5. Adding Tasks:
    Create a new file src/utils/arrayUtils.ts
    Define a new type Item inside
    Return to scr/state/appStateReducer.ts
    Import findIemByIndex
    Define the ADD_TASK Handler

6. Provide Dispatch Through the context : implement adding lists and tasks on the ui
    Open src/state/AppStateContext 
    Add the imports
    
7. Dispatching Actions:
    Go to src/App.tsx 
    Import addList action creator form scr/state/actions.ts
    Update the App component definition 
    Open src/Column.tsx 
    Import the addTask 


    <!-- MOVING ITEMS -->
1. Define the moveItem helper function 
    Goal : define a utility function to help moving the items inside the array
    Open src/utils/arrayUtils.ts 
    Define removeItemAtIndex function 
    Define insertItemAtIndex function 
    Define moveItem function

2. Handling the MOVE_LIST action
    Open src/state/appStateReducer.ts
    Import the moveItem function 
    Open action.ts and add a new action type to the Action union type and the action creator 
    Add new case block to the appStateReducer

3. Add Drag and Drop :
    Install : react-dnd library and react-dnd-html5-backend
    Open src/index.tsx 
    Add DndProvider to the layout 

4. Define The Type for Dragging
    Create a new file scr/DragItem.ts
    Define ColumnDragItem and assigne it to the DragItem type

5. Store the Dragged Item In the State
    Go to he src/state/appStateReducer.ts
    import DragItemType 
    Update AppState type
    Go to src/state/AppStateContext.tsx and update the appData constat and the draggedItem field with value null
    Add the draggedItem field to the AppStateContectProps
    Update AppStateProvider 
    In the src/state/actions add a new Anction SET_DRAGGED_ITEM to the Action union type
    Define the action creator and define new case block 

6. Define the useItemDrag Hook
    Create a new file src/utils/useItemDrag.ts

7. Drag Column
    import the useRed and useItemDrag hook in Column Component
    Define the ref constant that will hold the reference to the dragged div element
    Pass the ref to the ColumnContainer element
    Use useItemDrag to find out when did the user begin dragging the column
    Get the draggedItem from the state
    Problemen => the hover event might be triggered too frequently => we should use throttle function from the throttle-debounce-ts package => Install throttle-debounce-ts
    Add the imports : useDrop from react-dnd , throttle from throttle-debounce-ts and moveList from action.ts
    Add the call to useDrop at the begining of the Column Component after useRefCall













