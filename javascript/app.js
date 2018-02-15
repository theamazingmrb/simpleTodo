// var toDo = new Object(),
// 	toDos = [],
// 	list = document.getElementById('list'),
// 	item = document.getElementById("input");

var	toDos = [],
	list = document.getElementById('list'),
	item = document.getElementById("input");


// creates the toDo object 
function ToDo(item,notes){
	this.item = item;
	this.notes = notes;
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

//   trims dom li text content string down to just the text
	function cutString() {
		for(i=0;i<deleteMe.length;i++){
				if(deleteMe[i] != ""){
	 		holder.push(deleteMe[i])
	 	} if(deleteMe[i] == ""){
	 		return true
	 	}
		}
	}

	cutString()


		toDos = toDos.filter(function(item) {

			return holder.join('') != item.item
		})

	list.removeChild(del)
}

	

function expand(ev) {
	var box = ev.srcElement.nextSibling;
	box.innerHTML == " " ? box.innerHTML = "<button type='button' id= '" +  box.id + "' onclick='deleteTodo(event)''>x</button>" + " <button type='button' id= '" +  box.id + "' onclick='finishTodo(event)''>&#10004</button>" + "<button type='button' id= '" +  box.id + "' onclick='info(event)''>&#10597</button>" : box.innerHTML = " " ;
}



 

// function info(ev) {
//  var notes = document.getElementsByClassName('notes')[ev.srcElement.id],
//      ul = document.createElement('ul');
//      li = document.createElement('li')
//      li.innerHTML ="<p>test</p>"
//     ul.append(li)
//     console.log(notes)

  

//     if(notes.innerHTML == " "){
//      notes.innerHTML = "<input>" + "<button onclick=alert('poop')>poop here</button>"
//  	}else{
//  		notes.innerHTML = " ";
//  	}
//     // if(notes.innerHTML.includes('ul')) {
//     //     console.log('found');
//     //     var ul_ref = notes.firstChild;
//     //     notes.append(li);
//     // } else {
//     //     notes.innerHTML = "<ul>"+ul.innerHTML+"</ul>"
//     // }
// }