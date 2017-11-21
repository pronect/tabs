$(function(){
	$(".tab").click(function(){
		$(".tab").removeClass("sel");
		$(this).addClass("sel");
		var id = $(this).attr("data-id");
		$(".content").hide();
		$(".content[data-id="+id+"]").show();
	});
});

//Новости
$(function(news){
	$("h2").click(function(){
		var elem = $(this).next();
			if(elem.is(":hidden"))
				{
				elem.slideDown(100);
				}
			else
				{
				elem.slideUp(100);
				}
	});		
});

//Галерея
$(function(){
	$(".slider #out img").css("display", "none");
	$(".slider #out img").first().css("display", "block");
	$(".slider #button_right").on("click", function(){
		var count = $(".slider #out img").length;
		$(".slider #out img").each(function(key){
			if($(this).is(":visible")){
				$(this).fadeOut();
				if(count == key+1){
					$(".slider #out img").first().fadeIn();
				}
				else{
					$(this).next().fadeIn();
				}
				return false;
			}
		});
	});


	$(".slider #button_left").on("click", function(){
		$(".slider #out img").each(function(key){
			if($(this).is(":visible")){
				$(this).fadeOut();
				if(key == 0){
					$(".slider #out img").last().fadeIn();
				}
				else{
					$(this).prev().fadeIn();
				}
				return false;
			}
		});
	});
});

//Контакты
$(function(){
	$(".map").click(function(){
		var map = "http://ekaterinburg-address.ru/img/1211150141766381.jpg";
		$(".alert .box").html("<img src=\""+map+"\" border=0>");
		$(".alert").fadeIn();
	});
	$(".alert").click(function(){
		$(this).fadeOut();
	});
});

//Форма обратной связи
function valid_email(email){
	var email = email.replace(/^\s+|\s+$/g, '');
	return (/^([a-z0-9_\-]+.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,7}$/i).test(email);
}

function valid_phone(phone){
	var phone = phone.replace(/^\s+|\s+$/g, '');
	return(/^[0-9]{11}$/i).test(phone);
}	 

$(function(){
	$(".send").click(function(){
		$(".warn").hide();
 		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var text = $("#text").val();
/* 		var from_who = $("#from_who").val();  */ 
			if(name!==""){
				if(email!==""){
					if(phone!==""){
						if(valid_email(email)==true){
							if(valid_phone(phone)==true){
								$(".feedback").html("Приянто");
							}else{
								$(".warn").html("В номере допускаются только цифры"); $(".warn").show();
							}
						}else{
							$(".warn").html("Email заполнен некорректно"); $(".warn").show();
						}
					}else{
						$(".warn").html("Поле email обязательно для заполнения"); $(".warn").show();
					}
				}else{
					$(".warn").html("Поле ФИО обязательно для заполнения"); $(".warn").show();
				}
			}
	});
});

/* $(function(){
	$(".send").click(function(){
		$(".warn").hide();
/* 		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var text = $("#text").val();
		var from_who = $("#from_who").val();  */
/* 			if(name!==""){
				if(email!==""){
					if(phone!==""){
						if(valid_email(email)==true){
							if(valid_phone(phone)==true){
								$(".feedback").html("Приянто");
							}else{
								$(".warn").html("В номере допускаются только цифры"); $(".warn").show();
							}
						}else{
							$(".warn").html("Email заполнен некорректно"); $(".warn").show();
						}
					}else{
						$(".warn").html("Поле email обязательно для заполнения"); $(".warn").show();
					}
				}else{
					$(".warn").html("Поле ФИО обязательно для заполнения"); $(".warn").show();
				}
			}
	});
}); */


