

$(document).ready(function() {

    var nroTotalImagenes = 10;
    var nroColumnasPorFila = 5;
    var selectorTablaHTML = "#lista-perros"
    var url = "https://api.thedogapi.com/v1/images/search?limit="+nroTotalImagenes

    var urlraza = "https://api.TheDogAPI.com/images/search?breed_id="
   	
   	
   	
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
    	
    	
        
    	
   
    
    	
    	
    	
    //<table id="lista-perros" class="table text-center">
    	
    	
    //</table>
    	
    	
    function limpiar() {
    	
        var Table = document.getElementById("lista-perros");
    	
        Table.innerHTML = "";
    	
    }
    	
	
});	
	
	
    function getBtnActionURL() {
    
    	
        return "https://api.thedogapi.com/v1/images/search?limit=1";
    	
    	
    }

    	