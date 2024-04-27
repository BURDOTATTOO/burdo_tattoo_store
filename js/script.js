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










$(document).ready(function() {
	//responsive menu toggle
	$("#menutoggle").click(function() {
	  $('.xs-menu').toggleClass('displaynone');

	  });
	//add active class on menu
	$('ul li').click(function() {
	  e.preventDefault();
	  $('li').removeClass('active');
	  $(this).addClass('active');
	});
  //drop down menu  
	  $(".drop-down").hover(function() {
		$('.mega-menu').addClass('display-on');
	  });
	  $(".drop-down").mouseleave(function() {
		$('.mega-menu').removeClass('display-on');
	  });
  
  });





