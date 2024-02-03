import './styles.css';

import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';

import { Button } from '@chakra-ui/react';

import { Card, CardHeader } from '@chakra-ui/react';

export default function Register() {
    return (
        <div className="register-container">
            <Card maxW='inherit'>
                <CardHeader >
                    <div className='header'><h1>Spaco Educar</h1></div>
                    <div id='register'><strong><h2>Registro de Usuário</h2></strong></div>
                </CardHeader>
                {/* <Container maxW='md' bg='#F8EAE7' color='black'> */}
                <section className="form">
                    <div className='form-input'>
                        <FormControl isRequired>
                            <FormLabel>Nome de Usuário:</FormLabel>
                            <Input placeholder='Usuário' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Nome:</FormLabel>
                            <Input placeholder='Nome' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email:</FormLabel>
                            <Input placeholder='E-mail' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Senha:</FormLabel>
                            <Input type='password' placeholder='Senha' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Repita a senha:</FormLabel>
                            <Input type='password' placeholder='Confirme a senha' />
                        </FormControl>
                    </div>
                    <div className='button'>
                        <Button colorScheme='green'>Registrar-se</Button>
                    </div>
                </section>
                {/* </Container> */}
            </Card>
        </div>
    )
}