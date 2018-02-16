var	toDos = [],
	list = document.getElementById('list'),
	item = document.getElementById("input");


// creates the toDo object 
function ToDo(item,notes){
	this.item = item;
	this.notes = [];
}

// grab toDO from input and trigor display function

function addTodo(item){
var item = document.getElementById("input");	

	if(item.value != ""){
		var newToDo =  new ToDo(item.value)
		toDos.push(newToDo)
	 }else{
	  console.log("fail")  
	 }

	displayTodo();
	item.value = "";
}

function displayTodo() {
	var newLI = document.createElement('li');


	for(i=0;i<toDos.length;i++){
		toDos[i] ? newLI.innerHTML = "<div class='liContainer'>"+  toDos[i].item + " <button type='button' id= '" +  i + "' onclick='expand(event)'> &#10562; </button>" + "<div class='buttons' id= '" +  i + "'> </div> </div><div class='notes'> </div>" : console.log("nonething there");
	}
	
	if(item.value !== ""){
		list.append(newLI)
	}
}

function deleteTodo(ev) {
	//li parent node
	var del = ev.srcElement.parentNode.parentNode.parentNode;
	// text content array
	var deleteMe = del.textContent.split(" ")
	var holder = [];
	console.log(del)
//   trims dom li text content string down to just the text
	cutString(deleteMe,holder)


		toDos = toDos.filter(function(item) {

			return holder.join('') != item.item
		})

	list.removeChild(del)
}

function cutString(array,holder) {
	var deleteMe = array;
	var holder = holder;
	for(i=0;i<deleteMe.length;i++){
			if(deleteMe[i] != ""){
 		holder.push(deleteMe[i])
 	} if(deleteMe[i] == ""){
 		return true
 	}
	}
}


function finishTodo(ev) {

	ev.srcElement.parentNode.parentNode.className == "done"? ev.srcElement.parentNode.parentNode.className= "" : ev.srcElement.parentNode.parentNode.className= "done"
}

function expand(ev) {
	var box = ev.srcElement.nextSibling;
	box.innerHTML == " " ? box.innerHTML = "<button type='button' id= '" +  box.id + "' onclick='deleteTodo(event)''>x</button>" + " <button type='button' id= '" +  box.id + "' onclick='finishTodo(event)''>&#10004</button>" + "<button type='button' id= '" +  box.id + "' onclick='info(event)''>&#10597</button>" : box.innerHTML = " " ;

}
 
function info(ev) {
 var notes = document.getElementsByClassName('notes')[ev.srcElement.id];
  
    if(notes.innerHTML == " "){
     notes.innerHTML = "<input id='notes"+ ev.srcElement.id +"'>" + "<button onclick=addNote(event)>poop here</button><br> <ul id='addedNotes" + ev.srcElement.id + "'><ul>"
 	}else{
 		notes.innerHTML = " ";
 	}
}

function addNote(ev){
	//input from drop down add notes menu
	var notesI = ev.srcElement.parentNode.firstChild.value;
	var notesID = ev.srcElement.parentNode.firstChild.id;
	// parent todo div
	var toDo = ev.srcElement.parentNode.parentNode.firstChild;
	// parent todo div split to parse text
	var compare = toDo.textContent.split(" ");
	// holder for custom cut string function
	var holder = [];

	cutString(compare,holder)

	console.log(notesID)

	for(i=0; i<toDos.length; i++) {
		if(holder.join("") == toDos[i].item){
			toDos[i].notes.push(notesI)
		}


		var spot = notesID.split("").filter(function(spot) {
			if(spot >= 0){
				return spot
			}
		})
		console.log(spot)

		displayNotes(notesI,parseInt(spot))

	}
}


function displayNotes(note,notesID) {
	var newLI = document.createElement('li');
	var note = note;
	var notesID = notesID;
	var noteContainer = document.getElementById('addedNotes' + notesID);

	for(i=0;i<toDos.length;i++){

		toDos[i].notes ? newLI.innerHTML = note : console.log("fail") ;
		noteContainer.append(newLI)
	}
	
}
