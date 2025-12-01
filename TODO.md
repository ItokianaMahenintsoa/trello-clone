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



7. Define Props in Column Components 



