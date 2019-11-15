//creare uno script che permetta di stampare in pagina qullo che l'user inserisce nella finestra di imput
$( document ).ready(function() {

    function userAttivo(){
        var userAttivo = $(".contact-me.contact-active").html();
        $(".chatname .chatname-name").html(userAttivo);
    }

    userAttivo();

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
        $(".chatbox.chat-active").append(elementmsg);
        
        //creo funzione e intervallo che fa comparire una risposta
        setTimeout(response, 1000);

        function response(){
            $(".chatbox.chat-active").append(risposta);
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
            $(".chatbox.chat-active").append(elementmsg);

            //creo funzione e intervallo che fa comparire una risposta
            setTimeout(response, 1000);

            function response(){
                $(".chatbox.chat-active").append(risposta);
            }
           
            //ripulisco il contenuto dell'inputfield
            $("input").val("");
        
        }

    })

    //creo la funzione di callback della searchbar
    $("#contact-search").click(function(){ //al click della lente d'ingrandimento dopo un input(se vuoto non fa nulla)

        $(".contact-me").hide(); //nasconde tutti i contatti

        var txt = $("#searchtxt").val(); //salvo il valore dell'input dell'utente

        $(".contact-me").each(function(){ //funzione per ciclare nella lista contatti

           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){ //se il testo inserito dall'utente corrisponde a qualcosa nella lista

               $(this).show(); //mostra i contatti corrispondenti
           }

        });

        //ripulisco la searchbar
        $("#searchtxt").val("");

    });

    //aggiunta funzione con tasto invio

    $("#searchtxt").keypress(function(y){ //all'input dell'utente(se vuoto non fa nulla)

    if(y.which == 13){

        $(".contact-me").hide(); //nasconde tutti i contatti

        var txt = $("#searchtxt").val(); //salvo il valore dell'input dell'utente

        $(".contact-me").each(function(){ //funzione per ciclare nella lista contatti

        if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){ //se il testo inserito dall'utente corrisponde a qualcosa nella lista

            $(this).show(); //mostra i contatti corrispondenti

        }

        });

        //ripulisco la searchbar
        $("#searchtxt").val("");

        }

    });

    $(".contact-me").click(function(){

        activeContact = $(".contact-me.contact-active")
        
        activeContact.removeClass("contact-active");
        
        $(this).addClass("contact-active");

        var chatActive = $(this).attr("data-name");
        
        $(".chatbox").removeClass("chat-active")

        $('.chatbox[data-name = "' + chatActive + '"]').addClass("chat-active");

        userAttivo()

    })
})



