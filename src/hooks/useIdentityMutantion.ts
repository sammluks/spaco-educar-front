import { useMutation } from "@tanstack/react-query";
import { PersonData } from "../interfaces/person-data";
import axios from "axios";

const postData = (data: PersonData) => {
    return axios.post("http://localhost:8080/usuarios", data);
}

export function useIdentityMutation(){
    const { mutate, isSuccess, isError } = useMutation({
        mutationFn: (data: PersonData) => postData(data)
    })

    return {
        mutate,
        isSuccess,
        isError
    }
}