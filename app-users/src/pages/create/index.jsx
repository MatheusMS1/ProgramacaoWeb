import { Button, Container, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react"
import { useForm } from "react-hook-form" // npm i react-hook-form
import { useCreateUser } from "../../hooks/MutationUser"

const Create = () => {
    const {reset,register,handleSubmit} = useForm()
    const {mutate: mutateCreateUser, isLoading, isError} = useCreateUser()
    const onSubmit = (data) => {
        mutateCreateUser(data)
        if(!isError){
            alert('Cadastro com sucesso!')
            reset()
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input type='text' {...register('name',{required: true})}
                        placeholder="Digite o nome" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>E-mail</FormLabel>
                        <Input type='email' {...register('email',{required: true})}
                        placeholder="Digite o e-mail" />
                    </FormControl>
                    <Button isLoading={isLoading} type="submit" colorScheme='blue'>Cadastrar</Button>
                    <Button type="button" onClick={() => reset()}
                    colorScheme='red'>Limpar</Button>
                </Stack>
            </form>
        </Container>
    )
}

export default Create