import './App.css'

import Routes from './routes.tsx'

export default function App() {
  return (
    // <Login></Login>
    <Routes/>
  )
}

// function App() {
//   const { mutate } = useIdentityMutation()
//   const [name, setName] = useState("")
//   const [username, setUsername] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [cpf, setCpf] = useState("")

//   const submit = () => {
//     mutate({
//       name,
//       username,
//       email,
//       password,
//       cpf
//     })
//   }

//   return (
//     <div className='container'>
//       <form>
//         <div className='name-form-container'>
//           <PrimaryInput
//             value={name}
//             onChange={event => setName(event.target.value)}
//             name="name"
//             label="Nome"
//             placeholder="Nome"
//           />
//           <PrimaryInput
//             value={username}
//             onChange={event => setUsername(event.target.value)}
//             name="username"
//             label="Username"
//             placeholder="Username"
//           />
//         </div>
//         <Spacer height="4" />
//         <PrimaryInput
//           value={email}
//           onChange={event => setEmail(event.target.value)}
//           name="email"
//           label="Digite seu e-mail"
//           placeholder="nome@email.com"
//         />
//         <PrimaryInput
//           value={cpf}
//           onChange={event => setCpf(event.target.value)}
//           name="cpf"
//           label="Digite seu CPF:"
//           placeholder="000.000.000-00"
//         />
//         <Spacer height="4" />
//         <PasswordInput
//           value={password}
//           onChange={event => setPassword(event.target.value)}
//           name="password"
//           label="Digite sua senha:"
//           placeholder="Senha"
//         />
//         <Spacer height="4" />
//         <Button colorScheme='green' width="100%" onClick={submit}>Cadastrar</Button>
//       </form>
//     </div>
//   )
// }

// export default App