import './App.css'
import ButtonFatec from './components/ButtonFatec'
import ButtonInsert from './components/ButtonInsert'

function App() {

  return (
    <>
      <p>Entre em contato</p>
      <hr />
      <ButtonInsert type="text" placeholder="Nome"/> 
      <br />
      <ButtonInsert type="text" placeholder="Email"/>
      <br />
      <ButtonInsert type="text" placeholder="Telefone"/>
      <hr />
      <ButtonFatec type="button" label="Enviar"/>
    </>
  )
}

export default App
