import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  
  const objPadrao = {
    first_name: "Erro",
    last_name: "Erro",
    email: "Erro"
  }

  const alerta = () =>{
    alert("Olá")
  }

  const [user, setUser] = useState({objPadrao})

  const getUser = () => {
    fetch('https://reqres.in/api/users/')
    .then((resposta) => resposta.json())
    .then ((json) => {
      if (json.data)
        setUser(json.data)
      })
    }

  useEffect(() => { //são passados dois parâmetros para o useEffect, 1 - função, 2 - dependencias
    getUser()
  }, [])

  const enviar = (e) => {
    e.preventDefault()
    console.log(`${nome} ${email}`)
  }

  return (
    <>
      <Menu title="Site Fatec" />
      <p onClick={alerta}>Dados</p>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <hr />
      <form>
        <input onChange={(e) => {setNome(e.target.value)}} type="text" placeholder='Digite seu nome' /><br />
        <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder='Digite seu email' /> <br />
        <button onClick={enviar}>Cadastrar</button>
      </form>
      <hr />
      <p>Exemplo:</p>
      <p>Nome: {user.first_name} {user.last_name}</p>
      <p>Email: {user.email}</p>
    </>
  )
}

export default App
