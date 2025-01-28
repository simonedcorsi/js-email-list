const mails = document.getElementById('lista-mail');

axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
    
    .then(response => {
     console.log(response.data.response)
     //codice da eseguire in caso di successo

     mails.innerHTML = response.data.response

        //    numero = response.data.response;
    })
    .catch(error => {
        // codice da eseguire in caso di errore
     console.error(error)
    })