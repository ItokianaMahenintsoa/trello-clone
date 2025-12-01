import React, { Children } from "react";
import { ColumnContainer, ColumnTitle } from "./style";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

// In typescript, we need to provide a type or an interface to define the form of props objects
// interface ColumnProps {
//     text?: string;  //to make props optional, we can use the '?' symbol
// }

type ColumnProps = {
    text: string
    children?: React.ReactNode;
}

export const Column = ({text, children} : React.PropsWithChildren<ColumnProps>) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text} </ColumnTitle>
            {children}
            <AddNewItem toggleButtonText="+Add another task" onAdd={console.log} dark/>
        </ColumnContainer>
    )
}