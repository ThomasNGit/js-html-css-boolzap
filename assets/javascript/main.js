//creare uno script che permetta di stampare in pagina qullo che l'user inserisce nella finestra di imput
$( document ).ready(function() {

    //creo la funzione che cliccando sul pulsante il messaggio viene inviato
    $(".sendmsg").click(function(){

        console.log("ho cliccato");
        
        //salvo il valore dell'input utente
        var messaggio = $(".usermsg").val();

        console.log(messaggio);
        

        var elementmsg = $("#template .userinput .usertxt").clone();

        console.log(elementmsg);
        

        //inserisco nella copia del template l'input dell'utente
        elementmsg.text(messaggio);

        //appendo il testo nel div della chatbox
        $(".chatbox").append(elementmsg);

        console.log(elementmsg);
        
        //ripulisco il contenuto dell'inputfield
        $("input").val("");

    })


})