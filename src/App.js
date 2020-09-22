import React from 'react';
import './App.css';
import './Table.css';
import './Navbar.css';

function App() {
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
          <div style={{margin: "7px"}}>Estado:<br/>
          <input style={{fontSize: "30px"}} value="Nome da cidade" />
          </div>
        </div>

        <div className="case-status">
          <div className="case-type">
            Confirmados:<br/>
            <input className="" value="895.562" />
          </div>
          <div className="case-type">
            suspeitos:<br/>
            <input className=" " value="895.562" />
          </div>
        </div>

        <div className="case-status">
          <div className="case-type">
            Confirmados:<br/>
            <input className=" " value="895.562" />
          </div>
          <div className="case-type">
            suspeitos:<br/>
            <input className=" " value="895.562" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
