import { Button, Container } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Sobre = () => {
    return (
        <Container>
            <h1>Sobre</h1>
            <hr />
            <Link to='/'>
                <Button type="button" colorScheme='blue'>
                    Página inicial
                </Button>
            </Link>
        </Container>
    )
}

export default Sobre