import { Button, Input, InputGroup, InputRightElement, Spacer } from "@chakra-ui/react";

import React, { ChangeEventHandler } from "react";

import "./password-input.css";

interface PrimaryInputProps {
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string,
    placeholder: string
}

export default function PasswordInput({ name, value, onChange, label }: PrimaryInputProps) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <><label className="label">{label}</label>
            <Spacer height="4" />
            <div className="input-group-container">
                <InputGroup size='md'>
                    <Input
                        variant='filled'
                        pr='10rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Senha'
                        onChange={onChange}
                        value={value}
                        name={name} />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Esconder' : 'Mostrar'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </div>
        </>
    )
}