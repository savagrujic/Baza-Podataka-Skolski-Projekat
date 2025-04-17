import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [knjiga, setKnjiga] = useState({
    naslov: '',
    autor: '',
    izdavaca: ''
  })
  const [nizknjiga, setNizKnjiga] = useState([])

  function DodajKnjigu(e) {
    e.preventDefault()
    setNizKnjiga([...nizknjiga, knjiga])
    setKnjiga({
      naslov: '',
      autor: '',
      izdavaca: ''
    })
  }
  useEffect(() => {
    console.log(nizknjiga)
  }, [nizknjiga])

  return (
    <>
    <h1>Baze Projekat Zapis Knjiga</h1>
    <form onSubmit={DodajKnjigu}>
      <input
      placeholder='Unesi ime knjige'
      onChange={(e) => setKnjiga({...knjiga, naslov:e.target.value})}
      value={knjiga.naslov}
      />
      <input
      placeholder='Unesi Autora Knjige'
      onChange={(e) => setKnjiga({...knjiga, autor:e.target.value})}
      value={knjiga.autor}
      />
      <input
      placeholder='Unesi Izdavaca Knjige'
      onChange={(e) => setKnjiga({...knjiga, izdavaca:e.target.value})}
      value={knjiga.izdavaca}
      />
      <button>Unesi</button>
      

    </form>
    <div>
      {nizknjiga.map((item) => (
        <div style={{display:'flex', margin:'10px'}}>
        <p>Naslov: {item.naslov}</p>
        <p>Autor: {item.autor}</p>
        <p>Izdavac: {item.izdavaca}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
