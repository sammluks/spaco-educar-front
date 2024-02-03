import { ChangeEventHandler } from "react";
import { Input, Spacer } from "@chakra-ui/react";

import "./primary-input.css";

interface PrimaryInputProps {
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string,
    placeholder: string
}

export default function PrimaryInput({ name, value, onChange, label, placeholder } : PrimaryInputProps){
    return(
        <div className="input-container">
            <label className="label">{label}</label>
            <Spacer height="4" />
            <Input 
                variant='filled' 
                placeholder={placeholder}
                name={name} 
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}