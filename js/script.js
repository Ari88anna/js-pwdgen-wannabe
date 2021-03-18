//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21

var nomeUtente = prompt ('Ciao dimmi il tuo nome');
console.log(nomeUtente)

var cognomeUtente = prompt ('Ora il tuo cognome');
console.log(cognomeUtente)

var colorePreferito = prompt ('Il tuo colore preferito è');
console.log(colorePreferito)

var annoCorrente = '21';

var password = nomeUtente + cognomeUtente + colorePreferito + annoCorrente;
console.log(password)

document. getElementById("userpw").innerHTML = password;
