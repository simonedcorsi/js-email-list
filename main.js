const mails = document.getElementById('lista-mail');
let mail = [];

     //codice da eseguire in caso di successo
     for(let i = 0; i < 10; i++){
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => response.json()) // Funzione anonima per il JSON
                .then((data) => {
                    mail.push(data.response);
    
    })
.catch(error => {

    console.error(error);
});