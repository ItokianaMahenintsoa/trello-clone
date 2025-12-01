import React, { Children } from "react";
import { ColumnContainer, ColumnTitle } from "./style";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

// In typescript, we need to provide a type or an interface to define the form of props objects
// interface ColumnProps {
//     text?: string;  //to make props optional, we can use the '?' symbol
// }

type ColumnProps = {
    text: string
    index: number
    // children?: React.ReactNode;
}

export const Column = ({text,  index} : React.PropsWithChildren<ColumnProps>) => {
    const {state} = useAppState();
    
    
    return (
        <ColumnContainer>
            <ColumnTitle>{text} </ColumnTitle>
            {state.lists[index].tasks.map(task => (
                <Card text={task.text} key={task.id}></Card>
            ))}
            <AddNewItem toggleButtonText="+Add another task" onAdd={console.log} dark/>
        </ColumnContainer>
    )
}