$(document).ready(function(){
$("#Student").change(function(){
$('.student_status').fadeOut(1000);
$('.bootable').fadeIn(1000);	
input1 = $("#Student option:selected").text()
	CreateTableFromJSON()
  })
})
var Data = ''

function bootStrapTable(){
	$('#table').bootstrapTable({
		data: Data
	});
}
function CreateTableFromJSON() {
	sort(newData)
	Data = sortedData
	bootStrapTable()
	}


function linkFormatter(value){
	if(value.charAt(value.length-1) == "/"){
		value = value.slice(0,-1)
	}
		return "<a href="+value+">"+value+"</a>"
	
}

function queryParams(){
	return{
		type: "owner",
		sort: "updated",
		directions: "desc",
		per_page: 100,
		page:1
	}
}
function scholarshipSorter(value){
	if(value.charAt(0) == "v" || value.charAt(0) == "V"){
		return 0
	}
}

