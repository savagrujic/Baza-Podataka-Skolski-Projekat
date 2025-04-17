import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection,deleteDoc,getDocs,doc } from 'firebase/firestore'
import { db } from './firebase-config'

function App() {
  const [knjiga, setKnjiga] = useState({
    naslov: '',
    autor: '',
    izdavaca: ''
  })
  const [nizknjiga, setNizKnjiga] = useState([])

  
  useEffect(() => {
    ProcitajPodatkeIzBaze()
  }, [nizknjiga])


  async function DodajKnjigu(e) {
    try {
      e.preventDefault()
      await addDoc(collection(db, 'spisakknjiga'), knjiga)
    }
    catch(e) {
      console.error(e)
    }
  }

  async function ProcitajPodatkeIzBaze() {
    const tempniz = []
     const qPodaci = await getDocs(collection(db,'spisakknjiga'))
     qPodaci.forEach((doc) => {
      const tempknjiga = {
        naslov: doc.data().naslov,
        autor: doc.data().autor,
        izdavaca: doc.data().izdavaca
      }
      tempniz.push(tempknjiga)
     })
     setNizKnjiga(tempniz)

  }

  async function Obrisi(naslov) {
    const qPodaci = await getDocs(collection(db,'spisakknjiga'))
    let id;
    qPodaci.forEach((doc) => {
      if(doc.data().naslov === naslov ) {
      id = doc.id
      }
    })
    await deleteDoc(doc(db, 'spisakknjiga', id))
  }

  return (
    <div className='wrapper'>
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
    <div className='wrapper'>
      {nizknjiga.length === 0 ? 'Ucitavanje...': nizknjiga.map((item) => (
        <div className='kolonaknjiga' style={{display:'flex', margin:'10px'}}>
        <p>Naslov: {item.naslov}</p>
        <p>Autor: {item.autor}</p>
        <p>Izdavac: {item.izdavaca}</p>
        <button onClick={() => {Obrisi(item.naslov)}}>Obrisi</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default App
