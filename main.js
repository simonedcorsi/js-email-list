const mails = document.getElementById('lista-mail');
    
    .then(response => {
     console.log(response.data.response)

     //codice da eseguire in caso di successo
     for(let i = 0; i < 10; i++){
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        
        .then(response => {
           mails.innerHTML = response.data.response

     })
     
        //    numero = response.data.response;
    }

    .catch(error => {
        // codice da eseguire in caso di errore
     console.error(error)
    })