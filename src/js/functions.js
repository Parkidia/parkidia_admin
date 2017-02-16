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
	}

	// Envoi de la requête
    $.ajax({
               type: 'POST',
               url: 'localhost:8080/GestionParking_war_exploded/' + nom_parking + '/' + latitude + '/' + longitude,
               dataType: 'json',
               contentType: 'application/json; charset=utf-8',
               success: function(response) {
				   valide_callout_parking.show();
                   valide_parking.text('Le parking ' + nom_parking + ' est créé');
               },
               error: function(error) {
                   erreur_callout_parking.show();
                   erreur_parking.text('Problème avec le web service');
               }
           });

});

bouton_valider_place.click(function(ev) {
	init_callout();
	alert("Création place : indisponible pour le moment");
	// TODO création d'un place
});

/* Initialise les messages callout */
function init_callout() {
	erreur_callout_parking.hide();
	valide_callout_parking.hide();
	erreur_callout_place.hide();
	valide_callout_place.hide();
}