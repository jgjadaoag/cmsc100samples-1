$(document).ready(function(){
	$("#intro").hide();
	$("#show_this").hide();
	
	$("#show_heading").click(function(){
		$("#intro").slideToggle();
	});

	/*$("p.p1").mouseover(function() {
		$("#show_this").fadeIn();
	});

	$("p.p1").mouseout(function() {
		$("#show_this").fadeOut();
	});*/

	/* Revise p.p1 to ... */
	$("p.p1").on({
		"mouseover": function() {
			$("#show_this").fadeIn();
		},
		"mouseout": function() {
			$("#show_this").fadeOut();
		}
	});

	$(".textbox").keyup(function() {
		a = Number($("#a").val());
		b = Number($("#b").val());

		sum = a + b;

		$("#sum").val(sum);

	});


	$("button[name='get_students']").click(function() {
		$.get("http://localhost:5000/degree-programs/1",function(resp) {
			console.log(resp);
			});
		/*$("#newContent").load("jquery_test.html", function (html) {
			alert("Content updated!");
		});*/
	});

	
});