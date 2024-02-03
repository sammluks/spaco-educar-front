import './style.css';

import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';

import { Button } from '@chakra-ui/react';


import { Card, CardHeader } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login-container">
            <Card maxW='sm'>
                <CardHeader ><h1>Spaco Educar</h1></CardHeader>
                <section className="form">
                    <div className='form-input'>
                        <FormControl isRequired>
                            <FormLabel>Nome de Usuário:</FormLabel>
                            <Input placeholder='Usuário' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Senha:</FormLabel>
                            <Input type='password' placeholder='Senha' />
                        </FormControl>
                    </div>
                    <div className='button'>
                        <Button colorScheme='green'>Login</Button>
                        <Link className='link' to="/register"><Button colorScheme='blue' >Registrar-se</Button></Link>
                    </div>
                </section>
            </Card>
        </div>
    )
}