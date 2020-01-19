$(document).ready(function(){
    $.ajax({
        //L'URL de la requête 
        url: "http://localhost:82/apiRest/produits",
        
        //La méthode d'envoi (type de requête)
        method: "GET",

        //Le format de réponse attendu
        dataType : "json",
    })
    //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
    /*On peut par exemple convertir cette réponse en chaine JSON et insérer
     * cette chaine dans un div id="res"*/
    .done(function(response){
        //let data = JSON.stringify(response);
        console.log(response);

        for (i=0 ; i<response.length ; i++){
        produit = response[i];
        console.log(produit.name); 
        var txt1 = $("<p></p>").text(produit.name);
        var txt2 = $("<p></p>").text(produit.description);
        var txt3 = $("<p></p>").text(produit.price);
        $("div#res").append(txt1, txt2, txt3);
        }
       
    })

    //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
    //On peut afficher les informations relatives à la requête et à l'erreur
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    //Ce code sera exécuté que la requête soit un succès ou un échec
    .always(function(){
        console.log("Requête effectuée");
    });

    
});