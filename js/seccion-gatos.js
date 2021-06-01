
$(document).ready(function() {

    var nroTotalImagenes = 9;
    var nroColumnasPorFila = 3;
    var selectorTablaHTML = "#lista-gatos"
    var url = "https://api.thecatapi.com/v1/images/search?limit="+nroTotalImagenes
    var urlraza = "https://api.thecatapi.com/images/search?breed_id="
7	
8	
9	
    $('#fieldTipoContacto').change(function() {
	
        limpiar();
	
        if ($(this).val() == '2') {

            // Do something for option "b"
	
	
            //$("#lista-perros").remove();
	
            generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, urlraza + 2);

        }

        else{
    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");
	
            generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, urlraza);
	
        }
	
    });
	
    

});
	


function limpiar() {
	
    var Table = document.getElementById("lista-perros");
	
    Table.innerHTML = "";
	
}


function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
}