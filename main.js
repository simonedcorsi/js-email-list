const mails = document.getElementById('lista-mail');

//codice da eseguire in caso di successo
for(let i = 0; i < 10; i++){
    fetch('https://flynn.boolean.careers/exercises/api/random/mail', {method: "GET"})
        .then((response) => response.json()) 
        .then((data) => {
            console.log(data.response);

            mails.innerHTML += `<li>${data.response}`
        })
        .catch(error => {
            console.error(error);
        });  
}

