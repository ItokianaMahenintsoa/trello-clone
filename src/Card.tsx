import { CartContainer } from "./style"

type CardProps = {
    text: string
}

export const Card = ({text}: CardProps) => {
    return <CartContainer>{text}</CartContainer>
} 