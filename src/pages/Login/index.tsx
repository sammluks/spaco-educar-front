import api from '../../services/api';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Card, CardHeader } from '@chakra-ui/react';


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function login(e: any) {
        e.preventDefault();

        const data = {
            username: username,
            password: password
        };

        try {
            const response = await api.post('/auth/login', data)

            localStorage.setItem('username', username);
            localStorage.setItem('token', response.data.token);

            navigate('/material/new');
        } catch (error) {
            alert("Não foi possível fazer login. Favor tentar novamente")
        }
    };

    return (
        <div className="login-container">
            <Card maxW='sm'>
                <CardHeader ><h1>Spaco Educar</h1></CardHeader>
                <form onSubmit={login}>
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
                                <FormLabel>Senha:</FormLabel>
                                <Input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type='password'
                                    placeholder='Senha' />
                            </FormControl>

                        </div>
                        <div className='button'>
                            <Button type='submit' colorScheme='green'>Login</Button>
                            <Link className='link' to="/register"><Button colorScheme='blue' >Registrar-se</Button></Link>
                        </div>
                    </section>
                </form>
            </Card>
        </div>
    )
}