/* set up XMLHttpRequest */
var url = "./Scholarship_Database.xlsx";
var oReq = new XMLHttpRequest();
var newData = ''
var sortedData = []
var input1 = 'High School Students'
var input2 = 'x'
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  /* convert data to binary string */
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");

  /* Call XLSX */
  var workbook = XLSX.read(bstr, {type:"binary"});

  /* DO SOMETHING WITH workbook HERE */
var first_sheet_name = workbook.SheetNames[0];
/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];
newData = XLSX.utils.sheet_to_json(worksheet)
}

oReq.send();

function sort(arr){
for(var i = 0; i < arr.length; i++){
	if(arr[i].DropbdownSelection === input1){
		if(input2 != '' && arr[i]['Input box number only'] === input2){
			sortedData.push(arr[i])
			}
		else if(input2 == ''){
			sortedData.push(arr[i])
	return sortedData
		}
		
	}
	}
}


