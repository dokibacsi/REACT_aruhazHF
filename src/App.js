import './App.css';
import Kosar from './components/kosar/Kosar';
import Termekek from './components/termekek/Termekek';
import { kosarLista, termekLista } from './datas';
import { useState } from "react"

function App() {
  const [klist, setList] = useState(kosarLista)

  function athelyez(termek) {
    const ujKosarList = [...klist]
    console.log(ujKosarList)
    console.log(termek)
    let hunci = 0
    while(hunci < ujKosarList.length && ujKosarList[hunci].kategoria !== termek.kategoria){
      hunci++
    }
    if(hunci < ujKosarList.length){
      ujKosarList[hunci].db += 1
    }else{
      termek.db = 1
      ujKosarList.push(termek)
    }
    setList(ujKosarList)

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
      </header>
      <main>
        <div className="termekek">
          <Termekek lista={termekLista} athelyez={athelyez} />
        </div>
        <div className="kosar">
          <div className='elemek'>
            <p>Termék</p>
            <p>darab</p>
            <p>ár</p>
          </div>
          <Kosar lista={klist} />
        </div>
      </main>
    </div>
  );
}

export default App;
