import './styles.css';
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Card, CardHeader } from '@chakra-ui/react';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function register(e: any) {
        e.preventDefault();

        const data = {
            username: username,
            password: password
        };

        try {
            const response = await api.post('/auth/register', data)

            navigate('/');
        } catch (error) {
            alert("Não foi possível cadastrar. Favor tentar novamente")
        }

    }

    return (
        <div className="register-container">
            <Card maxW='inherit'>
                <CardHeader >
                    <div className='header'><h1>Spaco Educar</h1></div>
                    <div id='register'><strong><h2>Registro de Usuário</h2></strong></div>
                </CardHeader>
                <form onSubmit={register}>
                    <section className="form">
                        <div className='form-input'>
                            <FormControl isRequired>
                                <FormLabel>Nome de Usuário:</FormLabel>
                                <Input
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder='Usuário' />
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

                                <Input
                                    type='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder='Senha' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Repita a senha:</FormLabel>
                                <Input type='password' placeholder='Confirme a senha' />
                            </FormControl>
                        </div>
                        <div className='button'>
                            <Button type='submit' colorScheme='green'>Registrar-se</Button>
                        </div>
                    </section>
                </form>
            </Card>
        </div>
    )
}