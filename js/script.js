window.onload = function(){
	$('#onload').fadeOut();
	$('body').removeClass('hidden')
}




$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});









function field_focus(field, email) {
    if(field.value == email) {
      field.value = '';
    }
  }

  function field_blur(field, email) {
    if(field.value == '') {
      field.value = email;
    }
  }

  $(document).ready(function(){
    $('.box').hide().fadeIn(1000);

    // Asignar usuario y contraseña automáticamente
    document.getElementsByClassName("email")[0].value = "Burdo";       // Usuario
    document.getElementsByClassName("email")[1].value = "";   // Contraseña

    // Validación de login
    $('#signin').click(function() {
      let usuario = document.getElementsByClassName("email")[0].value;
      let contraseña = document.getElementsByClassName("email")[1].value;

      if (usuario === "Burdo" && contraseña === "12345678") {
        window.location.href = "/pasarela.html";
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    });
  });

  // Stop all other <a> clicks
  $('a').click(function(event){
    event.preventDefault(); 
  });




