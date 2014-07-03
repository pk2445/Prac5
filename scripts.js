

function dataLoaded(unempData){
	
	var myObsArray = unempData.observations;
	console.log("unempData");
	var myDataList = [];
	var myHeader = ["Date", "Buying", "Selling", "Middle"];
	myDataList.push(myHeader);
	
	
	
	/* coverting json data to an array of arrays using a for loop
	 
	 */
	
	for(var i=0; i<myObsArray.length; i++){
		
	var myObsObj = myObsArray[i];
	var myDataArray = [myObsObj.date, Number(myObsObj. Buying), Number(myObsObj.Selling), Number(myObsObj.Middle)];
	myDataList.push(myDataArray);	
	
	}
	
	
	var option = {
title : "Historic Exchange Rate Between NRs Vs US$",
height:400,
width:800,
tooltip: {isHtml: true}
};


	var myDataTable = google.visualization.arrayToDataTable(myDataList);
	var myChart = new google.visualization.LineChart(document.getElementById("myChartDiv"));
	myChart.draw(myDataTable, option);
	
	console.log (myDataList);
}

/* below is the function for callback for googleVizLoaded */
function googleVizloaded(){
 $.get("rate.json", dataLoaded, "json");	
	
}

function pageLoaded(){
	console.log("page worked");
	
	/* Now below we are loading the google charting pakacge */
	
	google.load("visualization", "1", {
packages : ["corechart"],
callback : "googleVizloaded"

});
	
}


/* Docment ready function and pageloaded is the name of my callback. */
$(document).ready(pageLoaded);
