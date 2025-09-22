import React from "react";
import { ColumnContainer, ColumnTitle } from "./style";
import { Card } from "./Card";

// In typescript, we need to provide a type or an interface to define the form of props objects
// interface ColumnProps {
//     text?: string;  //to make props optional, we can use the '?' symbol
// }

type ColumnProps = {
    text: string
    // children?: React.ReactNode;
}

export const Column = ({text} : ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text} </ColumnTitle>
            <Card text="Generate app scaffold"/>
            <Card text="Learn Typescript"/>
            <Card text="Begin to use static typing"/>
        </ColumnContainer>
    )
}