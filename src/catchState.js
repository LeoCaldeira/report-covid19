function stateCatch () {
    const ufSelect = document.querySelector("select[name=estados]")
    
    fetch("https://covid19-brazil-api.now.sh/api/report/v1")
    .then( res => res.json() )
    .then( states => {

      for (const state of states){
        ufSelect.innerHTML += `<option value="${state.states}">${state.states}</option>`
      }
    })
  }