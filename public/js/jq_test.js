$(document).ready(function(){
	$("#intro").hide();
	/*
	$("p.p1").mouseover(function() {
		$("#show_this").fadeIn();
	});
	$("p.p1").mouseout(function() {
		$("#show_this").fadeOut();
	});
	*/
	$("p.p1").on({
		"mouseover": function() {
			$("#show_this").fadeIn();},
		"mouseout": function() {
			$("#show_this").fadeOut();}
	});
	$(".textbox").keyup(function() {
		a = Number($("#a").val());
		b = Number($("#b").val());
		sum = a + b;
		$("#sum").val(sum);
	});
/*
	$("#newContent").load("index.html", function(resp) {
		//alert("Content updated!");
	});
*/
	$("button[name='get_students']").click(function() {
		/*
		$.get("http://localhost:5000/degree-programs/1",
			function (resp) {
				console.log(resp);
			});
		*/
		$.post("http://localhost:5000/degree-programs", {
			code: "BAPHLO",
			name: "BA Philosophy"
		}, function(resp) {
			console.log(resp);
		});
	});
	$("button[name='reverse']").click( function() {
		var checked = $("input[type='checkbox']:checked");
		$("input[type='checkbox']").prop('checked', true);
		checked.prop('checked', false);
	});
	$("button[name='reset']").click (function() {
		$("input[type='checkbox']").prop('checked', false);
	});
});
