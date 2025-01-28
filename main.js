const mails = document.getElementById('lista-mail');
let mail = [];

     //codice da eseguire in caso di successo
     for(let i = 0; i < 10; i++){
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => response.json()) 
            .then((data) => {
             mail.push(data.response);

             mail.innerHTML(mail)
            })
}
.catch(error => {

    console.error(error);
});