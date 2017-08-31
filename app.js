$(document).ready(function(){
$("#student").change(function(){
	input1 = $("#student option:selected").text()
	})
})
var Data = ''
function CreateTableFromJSON() {
//for (var i=0;i<12;i++){
// input1=$('.dropdown-content')[0].childNodes[i].innerText
//input1 = $('#myDropdown a:selected').text()
//$('.dropdown-content')[0].childNodes[i].click=function(){
//input1=$this.childNodes[i].innerText
//if($('.dropdown-content')[0].childNodes[i].innerText=="High School Student"){
 //input1=$('.dropdown-content')[0].childNodes[i].innerText
//console.log(input1)}
//$('.dropdown-content').on('click',function(){
//	input1=$(this).childNode.innerText;console.log($('.dropdown-content'))
//	console.log(input1)})
	//$('#mySelect').on('change', function() {
  	//input1 = $(this).val();})   
	//console.log(input1)
	//get data from get_data file  and store it in Data
	sort(newData)
	Data = sortedData
/*
console.log("hello")


        // EXTRACT VALUE FOR HTML HEADER.

        var col = [];
        for (var i = 0; i < Data.length; i++) {
            for (var key in Data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
           	var th = document.createElement("th");      // TABLE HEADER.
            th.setAttribute("class","th-inner sortable both desc")
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < Data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = Data[i][col[j]];
            }
        }


        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
  */
  	

	}

function bootStrapTable(){
	$('#table').bootstrapTable({
		data: Data
	});
}

function linkFormatter(value){
	if(value.charAt(value.length-1) == "/"){
		value = value.slice(0,-1)
	}
		return "<a href="+value+">"+value+"</a>"
	
}




