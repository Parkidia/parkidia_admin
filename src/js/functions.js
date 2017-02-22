/**
 * functions.js					09/02/2017
 */

var bouton_valider_parking = $('.button-valider-parking');
var bouton_valider_place = $('.button-valider-place');
var erreur_callout_parking = $('.callout_erreur_parking');
var valide_callout_parking = $('.callout_valide_parking');
var erreur_callout_place = $('.callout_erreur_place');
var valide_callout_place = $('.callout_valide_place');
var erreur_parking = $('#erreur_parking');
var valide_parking = $('#valide_parking');

init_callout();
init_listeparking();


/* Évènement click création d'un parking */
bouton_valider_parking.click(function(ev) {
	init_callout();

	// On récupère les données du formulaire
	var nom_parking = $('#nom_parking').val();
	var longitude = $('#longitude').val();
	var latitude = $('#latitude').val();

	// Test validité formulaire création parking
    if (nom_parking == "" || longitude == "" || latitude == "") {
        erreur_callout_parking.show();
        erreur_parking.text('Veuillez compléter tout les champs');
    	return;
	} else if (isNaN(longitude) || isNaN(latitude)) {
        erreur_callout_parking.show();
        erreur_parking.text('Latitude ou Longitude invalide');
        return;
	} else if (parseFloat(latitude) > 85 || parseFloat(latitude) < -85) {
        erreur_callout_parking.show();
        erreur_parking.text('Latitude doit être comprise entre -90 et 90');
        return;
	} else if (parseFloat(longitude) > 180 || parseFloat(latitude) < -180) {
        erreur_callout_parking.show();
        erreur_parking.text('Longitude doit être comprise entre -180 et 180');
        return;
	}

    /* $.post( 'http://localhost:8080/GestionParking_war_exploded/parking/' + nom_parking + '/' + latitude + '/' + longitude ,function( data ) {

    });



*/
    // Solution 1
/*    $.ajax({
               type: 'POST',
               url: 'http://localhost:8080/GestionParking_war_exploded/parking/' + nom_parking + '/' + latitude + '/' + longitude,
               dataType: 'json',
               success: function () {
                   valide_callout_parking.show();
                   valide_callout_parking.text('Le parking ' + nom_parking + ' est créé');
               },
               error: function (jqXHR, textStatus, errorThrown) {
                   alert("jqXHR= " + jqXHR + ", textStatus= " + textStatus + ", errorThrown= " + errorThrown)
               }
           });
*/

    $.post('http://localhost:8080/GestionParking_war_exploded/parking/' + nom_parking + '/' + latitude + '/' + longitude,
           function(data) {
        alert("cool");
    }, "Json")
        .fail(function (xhr, status, error) {
            alert("Xhr : " + xhr.status + " Status : " + status + " error : " + error);
        });


    init_listeparking();

    return false;
});

bouton_valider_place.click(function(ev) {
	init_callout();
	alert("Création place : indisponible pour le moment");

	// Concaténation UUID
    var UUID = $('#uuid-zone1').val() + '-' + $('#uuid-zone2').val() + '-' + $('#uuid-zone3').val()
		+ '-' + $('#uuid-zone4').val() + '-' + $('#uuid-zone5').val();

	// Gestion d'erreur


	// Envoi de la requete au webservice

});

/* Initialise les messages callout */
function init_callout() {
	erreur_callout_parking.hide();
	valide_callout_parking.hide();
	erreur_callout_place.hide();
	valide_callout_place.hide();
}

/* Initialise la liste des parkings */
function init_listeparking() {
	// TODO
}