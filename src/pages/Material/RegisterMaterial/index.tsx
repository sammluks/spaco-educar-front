import { Button, Card, CardHeader, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";

import './styles.css';
import { useState } from "react";
import { Subject } from "../../../enums/Subject";
import getEnumKeys from "../../../enums/getEnumKeys";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

export default function RegisterMaterial() {
    const [title, setTitle] = useState('');
    const [currentSubject, setCurrentSubject] = useState('8');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    async function materialPost(e: any) {
        e.preventDefault();


        const data = {
            title: title,
            currentSubject: currentSubject,
        };

        try {
            const response = await api.post('/material/new', data)

            navigate('/');
        } catch (error) {
            alert("Não foi possível cadastrar. Favor tentar novamente")
        }

    }

    return (
        <Card maxW='sm'>
            <CardHeader ><h1>Cadastrar novo material</h1></CardHeader>
            <form onSubmit={materialPost}>
                <section className="form">
                    <div className='form-input'>
                        <FormControl isRequired>
                            <FormLabel>Título</FormLabel>
                            <Input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder='Usuário' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Disciplina</FormLabel>
                            <Select placeholder=''
                                value={currentSubject}
                                onChange={(e) => {
                                    setCurrentSubject(e.target.value);
                                }}
                            >
                                {getEnumKeys(Subject).map((key, index) => (
                                    <option key={key} value={index}>
                                        {Subject[key]}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Descrição</FormLabel>
                            <Input placeholder='Descrição' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Autor</FormLabel>
                            <Input placeholder='Autor' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Preço</FormLabel>
                            <NumberInput max={50} min={1}>
                                <NumberInputField />
                                <NumberInputStepper>
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                    </div>
                    <div className='button'>
                        <Button type="submit" colorScheme='green'>Cadastrar material</Button>
                    </div>
                </section>
            </form>
        </Card>
    )
}