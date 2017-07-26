

// var test = "Javascript lepszy niz cokolwiek";
// alert(test);

// console.log(typeof(12));
// console.log(typeof(true));
// console.log(typeof("cosik"));
// // console.log(typeof({type:"Fiat", model:"500"});
// console.log(typeof([2,6,8]));

// var myAge = prompt();
// if(myAge > 18){
// 	console.log(alert("Jestes pelnoletni"))
// }else{
// 	console.log("Dzieciak")
// }
// var num = 2;
// var i = 1;
// while (i < 12){
// 	i++;
// 	num = num*2;
// }
// console.log(num);
// var a = prompt();
// for (var i = 0; i < a; i++){
// 	if( i === 12){continue;}
// 	console.log("");
// 	for(var j = 0; j < i+1; j++)
// 		console.log("^");
// }
// var a = prompt();
// var text ="";
// for (var i = 0; i<a;i++){
// 	console.log(text = text +"*");
// }

// for(var i = 1; i< 101; i++){
// 	if(i%3==0 && i%5==0){
// 		console.log("Ferdek Kiepski");
// 	}else if(i%3 ==0){
// 		console.log("Ferdek");
// 	}else if(i%5==0){
// 		console.log("Kiepski");
// 	}else{
// 		console.log(i);
// 	}
// }

// var size = prompt();
// var text = "";
// for (var i = 0; i < size; i++){
// 	for(var j = 0; j < size; j++)
// 		if((i+j)%2 == 0) text+="#";
// 		else text +=" ";	
// text += "\n";
// }
// console.log(text);

// function s (x, y){
// return console.log((x*y) - (x+y));
// }
// s(4,2);


// var friends = ["Kasia", "Monika", ["Irek","Piotr"], "Pawel"];
// friends[2].push("Bart"); 
// for(var i = 0; i < friends.length ; i++){
// 	console.log(friends[i]);
// }
// var person = {
// 	firstName: "Bart",
// 	lastName: "Brzozowski",
// 	age: 12,

// 	fullName: function (){
// 		console.log(person.firstName+" "+person.lastName);
// 	}
// }
// person.fullName();
// var array = [];
//  function addSomething (firstName, lastName, age, sex){
//  	if(!sex)
//  		sex = "m";

// array.push({fName: firstName,
// 			lName: lastName,
// 			aAge: age,
// 			sSex: sex});
// }

// addSomething("Tomas","kolasa",33, "m");
// addSomething("Bart","Wojtyla",5, "m");
// addSomething("Ania","Polkaa",66,  'f');
// addSomething("Marta","Baginska",26,'f');

// for(var i = 0; i < array.length ; i++){
// 	if(array[i].sSex == "f")
// 	console.log(array[i]);
// }


	var nav = document.getElementById("navbar");
	var list = nav.getElementsByTagName("ul");

	var newListItem = document.createElement("li");
	var newLink = document.createElement("a");
	var newLinkText = document.createTextNode("Javascript");

	newLink.appendChild(newLinkText);
	newListItem.appendChild(newLink);

	list[0].appendChild(newListItem);

	newLink.setAttribute('href', '#');

function add (text, href){
	var nav = document.getElementById("navbar");
	var list = nav.getElementsByTagName("ul");

	var newListItem = document.createElement("li");
	var newLink = document.createElement("a");
	var newLinkText = document.createTextNode(text);

	newLink.appendChild(newLinkText);
	newListItem.appendChild(newLink);

	list[0].appendChild(newListItem);
	newLink.setAttribute('href', href);
}
add("test", "###");
add("Buttoniks", "#");



var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "red";