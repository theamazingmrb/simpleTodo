var toDo = [],
	list = document.getElementById('list'),
	item = document.getElementById("input");


function addTodo(item){
// input text box data
var item = document.getElementById("input");	

	item.value != "" ? toDo.push(item.value) : console.log("fail")  

	displayTodo();
	item.value = "";
}

function displayTodo() {
	var newLI = document.createElement('li');


	for(i=0;i<toDo.length;i++){
		toDo[i] ? newLI.innerHTML = toDo[i] + " <button type='button' id= '" +  i + "' onclick='deleteTodo(event)''>x</button>" + " <button type='button' id= '" +  i + "' onclick='finishTodo(event)''>&#10004</button>" : console.log("nonething there");
	}
	
	if(item.value !== ""){
		list.append(newLI)
	}
}

function deleteTodo(ev) {

	toDo.shift(ev.srcElement.id)
	list.removeChild(list.childNodes[ev.srcElement.id])
}

function finishTodo(ev) {

	console.log(ev.srcElement.parentNode.className= "done")
}
