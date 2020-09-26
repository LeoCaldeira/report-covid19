import React, { useState, useEffect } from 'react';
import { FaUserNurse } from 'react-icons/fa';
import './App.css';
import './Table.css';
import './Navbar.css';

/* onChange={(e) => setInputValue(e.target.value)} FAZ COM QUE SEJA MOSTRADO AS LETRAS SENDO ATUALIZADAS NO INPUT */

function App() {
  
  const [cityName, setCityName] = useState(" Nome da Cidade");
  const [confirmedCases, setConfirmedCases] = useState(" ")
  const [suspectCases, setSuspectCases] = useState(" ")
  const [recoveredCases, setRecoveredCases] = useState(" ")
  const [numberDeath, setNumberOfDeath] = useState(" ")
  const [covid, setCovid] = useState("");
  

  const getStateFromAPI = async () => {
    let response = await fetch("https://covid19-brazil-api.now.sh/api/report/v1");
        response = await response.json();
 
    setCovid(response);
    
    let parametro = response
    verifyState(parametro);
    //teste

  }

  const verifyState = (response) => {
    let sizeObject = response.data.length;
    let num = 0;
    let valida = '';

    for (num=0; num < sizeObject; num++){
      valida = response.data[num].state;

      if (valida == cityName){      
        setConfirmedCases(response.data[num].cases);
        setSuspectCases(response.data[num].suspects);
        setRecoveredCases(response.data[num].refuses);
        setNumberOfDeath(response.data[num].deaths);

      }
    }
      
  }

  /* function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  } */
  
  
  const onCLickCity = () => {
    setCityName("");
  };

  return (
    <div className="App">
      
      <div className="nav-bar">  
        <a href="./public/index.html" className="logo" />
        <div style={{display: "flex", marginRight:"3%"}}>  
          <div className="options">Como se<br />proteger ?</div>
          <div className="options">Grupo <br />de risco</div>
          <div className="options">Sintomas</div>
        </div>
      </div>

      <h1 className="tittle">Evolução Coronavírus (COVID-19)</h1>

      <div className="search-table">
        <div className="city-search">
          <div style={{margin: "7px", cursor: "default"}}>
            Estado:<br/>
            <div className="align-center" >
              <input style={{fontSize: "30px"}} value={cityName} onFocus={onCLickCity} onChange={(e) => setCityName(e.target.value)}/>
              <button className="send-icon" onClick={getStateFromAPI}>
                <FaUserNurse color="#000" size="40px"/>
              </button>

            </div>
          </div>
        </div>

          <div className="case-status">
            <div className="case-type">
            <span>Negados (ultimas 24 hrs):</span><br/>
              <div className="results">
                {recoveredCases}
              </div>
            </div>
            <div className="case-type">
              <span>Suspeitos (ultimas 24 hrs):</span><br/>
              <div className="results">
                {suspectCases}
              </div>
            </div>
          </div>

          <div className="case-status">
            <div className="case-type" style={{backgroundColor: "lightGreen"}}>
              <span>Confirmados:</span><br/>
              <div className="results">
                {confirmedCases}
              </div>
            </div>
            <div className="case-type" style={{backgroundColor: "gray", color: "white"}}>
            <span>Mortes:</span><br/>
              <div className="results">
                {numberDeath}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
