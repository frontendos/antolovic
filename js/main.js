$(function(){

	for(var i = 0; i < 10; i++){
		//alert("trollanje žirija " + i);
	}


	$("#returnTrip").on("change", function(){

		if($("#returnTrip:checked").length > 0){
			$("#returnDate").removeAttr("disabled");
			return;
		}

		$("#returnDate").attr("disabled", "disabled");


	});



	$("#bookTrigger").on("click", function(){

		if(!$("#departDate").val()){
			alert("Pa jesi glup? LEGA MORAŠ REĆ KAD KONTAŠ IĆ!?");
			return;
		}



		var $cntElem = $("#availableCount");
		var cnt = parseInt($cntElem.text());
		$cntElem.text(--cnt);

		var $feedbackElem = $("#formFeedback");

		$feedbackElem.text("Znači ti si čoek, bravo, svaka čast lega. Uplati nam neke pare pa da idemo svi skupa kontaš.").show();


	});



});