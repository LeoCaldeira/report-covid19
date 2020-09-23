import React, { useState, useEffect } from 'react';
import { FaUserNurse } from 'react-icons/fa';
import './App.css';
import './Table.css';
import './Navbar.css';

/* onChange={(e) => setInputValue(e.target.value)} FAZ COM QUE SEJA MOSTRADO AS LETRAS SENDO ATUALIZADAS NO INPUT */

function App() {
  
  const [cityName, setCityName] = useState(" Nome da Cidade");
  const [confirmedCases, setConfirmedCases] = useState("958.651")
  const [suspectCases, setSuspectCases] = useState("832.123")
  const [recoveredCases, setRecoveredcases] = useState("569.325")
  const [numberDeath, setNumberDeath] = useState("102.985")
  const [response, setResponse] = useState("");



  const getStateFromAPI = async () => {
    let response = await fetch ("https://covid19-brazil-api.now.sh/api/report/v1");
    response = await response.json();
  
    console.log(response);
  }

  
  

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

      <h1 style={{textAlign: "center"}}>Evolução Coronavírus (COVID-19)</h1>

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
              <span>Confirmados:</span><br/>
              <input className="" readOnly={true} value={confirmedCases} />
            </div>
            <div className="case-type">
            <span>suspeitos:</span><br/>
              <input className=" " readOnly={true} value={suspectCases} />
            </div>
          </div>

          <div className="case-status">
            <div className="case-type">
            <span>Confirmados:</span><br/>
              <input className=" " readOnly={true} value={recoveredCases} />
            </div>
            <div className="case-type">
            <span>suspeitos:</span><br/>
              <input className=" " readOnly={true} value={numberDeath} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
