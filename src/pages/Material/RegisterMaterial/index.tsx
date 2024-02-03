import { Button, Card, CardHeader, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

import './styles.css';

export default function RegisterMaterial() {
    return (
        <Card maxW='sm'>
            <CardHeader ><h1>Cadastrar novo material</h1></CardHeader>
            <section className="form">
                <div className='form-input'>
                    <FormControl isRequired>
                        <FormLabel>Título</FormLabel>
                        <Input placeholder='Usuário' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Disciplina</FormLabel>
                        <Select placeholder='Disciplina'>
                            <option>Português</option>
                            <option>Matemática</option>
                            <option>História</option>
                            <option>Outros</option>
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
                        <Input placeholder='Preço' />
                    </FormControl>
                </div>
                <div className='button'>
                    <Button colorScheme='green'>Cadastrar material</Button>
                </div>
            </section>
        </Card>
    )
}