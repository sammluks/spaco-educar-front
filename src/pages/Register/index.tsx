import {
    Button,
    Card, CardHeader,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';


export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    let isError = false;
    let errorMessage;
    if (password != passwordConfirm) {
        isError = true;
        errorMessage = "As senhas precisam ser iguais"
    }

    async function register(e: any) {
        e.preventDefault();


        const data = {
            username: username,
            name: name,
            password: password,
            email: email
        };

        try {
            const response = await api.post('/auth/register', data)

            navigate('/');
        } catch (error) {
            alert("Não foi possível cadastrar. Favor tentar novamente")
        }

    }

    return (
        <>
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
                                        minLength={4}
                                        placeholder='Usuário' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Nome:</FormLabel>
                                    <Input
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        minLength={5}
                                        placeholder='Nome' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Email:</FormLabel>
                                    <Input
                                        value={email}
                                        type='email'
                                        onChange={e => setEmail(e.target.value)}
                                        minLength={4}
                                        placeholder='E-mail' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Senha:</FormLabel>
                                    <Input
                                        type='password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        minLength={6}
                                        placeholder='Senha' />
                                </FormControl>
                                <FormControl isRequired isInvalid={isError}>
                                    <FormLabel>Repita a senha:</FormLabel>
                                    <Input
                                        type='password'
                                        value={passwordConfirm}
                                        onChange={e => setPasswordConfirm(e.target.value)}
                                        minLength={6}
                                        placeholder='Confirme a senha' />
                                    {!isError ? (
                                        null
                                    ) : (
                                        <FormErrorMessage>{errorMessage}</FormErrorMessage>
                                    )}
                                </FormControl>
                            </div>
                            <div className='button'>
                                <Button type='submit' colorScheme='green'>Registrar-se</Button>
                            </div>
                        </section>
                    </form>
                </Card>
            </div>
        </>
    )
}