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
		toDo[i] ? newLI.innerHTML = "<div>"+"<a>" + toDo[i] + "</a>" + " <button type='button' id= '" +  i + "' onclick='expand(event)'> &#10562; </button>" + "<div class='buttons'> <button type='button' id= '" +  i + "' onclick='deleteTodo(event)''>x</button>" + " <button type='button' id= '" +  i + "' onclick='finishTodo(event)''>&#10004</button> </div> </div>" : console.log("nonething there");
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

	ev.srcElement.parentNode.parentNode.className== "done"? ev.srcElement.parentNode.parentNode.className= "" : ev.srcElement.parentNode.parentNode.className= "done"
}

function expand(ev) {
	var box = ev.srcElement.nextSibling;

	box.style.opacity == 1 ? box.style = "opacity:0"  : box.style = "opacity:1"

}
