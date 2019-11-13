//creare uno script che permetta di stampare in pagina qullo che l'user inserisce nella finestra di imput
$( document ).ready(function() {


    //creo la funzione che cliccando sul pulsante il messaggio viene inviato
    $(".sendmsg").click(function(){

        console.log("ho cliccato");
        
        //salvo il valore dell'input utente
        var messaggio = $(".usermsg").val();

        console.log(messaggio);
        

        var elementmsg = $("#template #userinput").clone();

        var risposta =$("#risposta").clone();

        console.log(elementmsg);
        

        //inserisco nella copia del template l'input dell'utente
        elementmsg.text(messaggio);

        //appendo il testo nel div della chatbox
        $(".chatbox").append(elementmsg);
        
        //creo funzione e intervallo che fa comparire una risposta
        setTimeout(response, 1000);

        function response(){
            $(".chatbox").append(risposta);
        }
        
        
        //ripulisco il contenuto dell'inputfield
        $("input").val("");

    })

    //funzione per inviare il messaggio alla pressione del tasto invio
    $(".usermsg").keypress(function(e){

        if(e.which == 13){

            console.log("ho cliccato");

                    //salvo il valore dell'input utente
            var messaggio = $(".usermsg").val();

            console.log(messaggio);
            

            var elementmsg = $("#template #userinput").clone();

            var risposta =$("#risposta").clone();

            console.log(elementmsg);
            

            //inserisco nella copia del template l'input dell'utente
            elementmsg.text(messaggio);

            //appendo il testo nel div della chatbox
            $(".chatbox").append(elementmsg);

            //creo funzione e intervallo che fa comparire una risposta
            setTimeout(response, 1000);

            function response(){
                $(".chatbox").append(risposta);
            }
           
            //ripulisco il contenuto dell'inputfield
            $("input").val("");
        
        }

    })
    $("#contact-search").click(function(){
        $(".contact-me").hide();
        var txt = $("#searchtxt").val();
        $(".contact-me").each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
    });

})



