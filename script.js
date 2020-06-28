// JavaScript Document
function myfunc(num){
	var existNum = $("#inpt1").val();
	$("#inpt1").val(existNum + num);
}
function clrFunc(){
	$("#inpt1").val("");
}
function makeEqal(){
	var doEqal = eval($("#inpt1").val());
	$("#inpt1").val(doEqal);
}
function delAlimt(){
	var mkeSting = $("#inpt1").val().toString();
	var delout = mkeSting.slice(0, -1);
	$("#inpt1").val(delout);
}



