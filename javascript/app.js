var	toDos = [],
	list = document.getElementById('list'),
	item = document.getElementById("input");

// creates the toDo object 
function ToDo(item,notes){
	this.item = item;

	if(notes){
		this.notes =[notes]
	}else{
		this.notes = [];	
	}	
}

// create and display example toDo on document load
document.addEventListener('DOMContentLoaded', function() {
	var example = new ToDo("An Example of a Task", "an example of a note")
	
	toDos.push(example)

	var newLI = document.createElement('li');

	for(i=0;i<toDos.length;i++){
		toDos[i] ? newLI.innerHTML = "<div class='liContainer'>"+  toDos[i].item + " <button type='button' id= '" +  i + "' onclick='expand(event)'> &#10562; </button>" + "<div class='buttons' id= '" +  i + "'> </div> </div><div class='notes'> </div>" : console.log("nonething there");
	}

		list.append(newLI)
	
}, false);

// grab new toDO from input and trigor display function

function addTodo(item){
	var item = document.getElementById("input");	

	//pushing value into toDos array for future use
	if(item.value != ""){
		var newToDo =  new ToDo(item.value)
		toDos.push(newToDo)
	 }else{
	  console.log("fail")  
	 }
	// triggor display function to add new todos to dom
	displayTodo();
	// reset input value
	item.value = "";
}

// grabs todo from array and adds to dom
function displayTodo() {
	// creates to li for list
	var newLI = document.createElement('li');

	for(i=0;i<toDos.length;i++){
		toDos[i] ? newLI.innerHTML = "<div class='liContainer'>"+  toDos[i].item + " <button type='button' id= '" +  i + "' onclick='expand(event)'> &#10562; </button>" + "<div class='buttons' id= '" +  i + "'> </div> </div><div class='notes'> </div>" : console.log("nonething there");
	}
	
	if(item.value != ""){
		list.append(newLI)
	}
}

function deleteTodo(ev) {
	//li parent node
	var del = ev.srcElement.parentNode.parentNode.parentNode;
	// text content array
	var deleteMe = del.textContent.split(" ")
	var holder = [];


	//  trims dom li text content string down to just the text
	cutString(deleteMe,holder)
		// compares removes the toDo from array
		toDos = toDos.filter(function(item) {
			return holder.join(' ') != item.item
		})

	list.removeChild(del)
}

// custom function to trim data down to comparison in delete todo function
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

//finish that todo
function finishTodo(ev) {
	ev.srcElement.parentNode.parentNode.className == "done"? ev.srcElement.parentNode.parentNode.className= "" : ev.srcElement.parentNode.parentNode.className= "done"
}

// button to show the delete done and notes button
function expand(ev) {
	var box = ev.srcElement.nextSibling;
	box.innerHTML == " " ? box.innerHTML = "<button type='button' id= '" +  box.id + "' onclick='deleteTodo(event)''>x</button>" + " <button type='button' id= '" +  box.id + "' onclick='finishTodo(event)''>&#10004</button>" + "<button type='button' id= '" +  box.id + "' onclick='info(event)''>&#10597</button>" : box.innerHTML = " " ;

}
 
// buton to display the input box and notes 
function info(ev) {
	var notes = ev.srcElement.parentNode.parentNode.nextSibling;

    if(notes.textContent == " "){

    	notes.innerHTML = "<input id='notes"+ ev.srcElement.id +"'>" + "<button onclick=addNote(event)>Submit</button><br> <ul id='addedNotes" + ev.srcElement.id + "'><ul>"
 
    	redisplayNotes(ev.srcElement.id, ev)
 	}else{
 		notes.innerHTML = " ";
 	}
}

function addNote(ev){
	//input from drop down add notes menu
	var notesI = ev.srcElement.parentNode.firstChild.value;
	let notesID = ev.srcElement.parentNode.firstChild.id;
	// parent todo div
	var toDo = ev.srcElement.parentNode.parentNode.firstChild;
	// parent todo div split to parse text
	var compare = toDo.textContent.split(" ");
	// holder for custom cut string function
	var holder2 = [];

	cutString(compare,holder2)

	

	for(i=0; i<toDos.length; i++) {


	// compares holder to cut string to verify note position in array
		if(holder2.join(" ") == toDos[i].item){
			toDos[i].notes.push(notesI)
		}

	}
		//grabs id number for display notes position
		var spot = notesID.split("").filter(function(spot) {
			if(spot >= 0){
				return spot
			}
		})


		displayNotes(notesI,parseInt(spot))
		//resets input on display call
		ev.srcElement.parentNode.firstChild.value = ""

}

// checks for notes and adds them to the dom
function displayNotes(note,notesID) {
	var newLI = document.createElement('li');
	var note = note;
	let notesNum = notesID;
	var noteContainer = document.getElementById('addedNotes' + notesNum);

	for(i=0;i<toDos.length;i++){

		toDos[i].notes ? newLI.innerHTML = note : console.log("fail") ;

		noteContainer.append(newLI)
	}
}

// redisplays notes when the tab open or closes
function redisplayNotes(IdNum, ev){

	toDos[IdNum].notes.forEach(function(note){
		
	var anotherLI = document.createElement('li');
	var noteContainer = document.getElementById('addedNotes' + IdNum);

		anotherLI.innerHTML = note
		noteContainer.append(anotherLI)
	})
}


