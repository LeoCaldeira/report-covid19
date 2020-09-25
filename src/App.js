import React, { useState, useEffect } from 'react';
import { FaUserNurse } from 'react-icons/fa';
import './App.css';
import './Table.css';
import './Navbar.css';
import { logRoles } from '@testing-library/react';

/* onChange={(e) => setInputValue(e.target.value)} FAZ COM QUE SEJA MOSTRADO AS LETRAS SENDO ATUALIZADAS NO INPUT */

function App() {
  
  const [cityName, setCityName] = useState(" Nome da Cidade");
  const [confirmedCases, setConfirmedCases] = useState("958.651")
  const [suspectCases, setSuspectCases] = useState("832.123")
  const [recoveredCases, setRecoveredcases] = useState("569.325")
  const [numberDeath, setNumberDeath] = useState("102.985")
  const [covid, setCovid] = useState("");
  

  const getStateFromAPI = async () => {
    let response = await fetch("https://covid19-brazil-api.now.sh/api/report/v1");
        response = await response.json();
  /* 
    let variavel = {name: "logRoles", livro="mlktasd"], [name= "aslkdajklsd", livru="eqwuiewoiuoqiwe"]}
    setCovid(response); */

    setCovid(response);
    
    const verifyState = () => {

        if (response.data[num].state === enterCity);
    }
    // setConfirmedCases(response.data[num].cases);
    // setSuspectCases(response.dara[num].sus)
  
    console.log(response.data);

    //teste

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
              <div className="results">
                {confirmedCases}
              </div>
            </div>
            <div className="case-type">
              <span>suspeitos:</span><br/>
              <div className="results">
                {suspectCases}
              </div>
            </div>
          </div>

          <div className="case-status">
            <div className="case-type">
            <span>Recuperados:</span><br/>
              <div className="results">
                {recoveredCases}
              </div>
            </div>
            <div className="case-type">
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
