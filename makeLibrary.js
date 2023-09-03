function addMore(){
    document.getElementById('error').innerHTML = "";

    let name = document.getElementById('name').value;
    if(name==''){
        document.getElementById('error').innerHTML = "enter value";
    }
    else{
        let box = document.getElementById('box');

        let li = document.createElement('li');
        li.textContent = name;

        let a = document.createElement('a');
        a.textContent = 'x';
        a.href = "javascript:void(0)";
        a.className = 'remove';
        li.appendChild(a);
        let pos = box.firstElementChild;

        if(pos==null){    
            box.appendChild(li);
        }
        else{
            box.insertBefore(li , pos);
        }
    }
    saveData();
    document.getElementById('name').value="";

}

let btn = document.querySelector('ul');
btn.addEventListener('click' , function(e){
    let box = document.getElementById('box');

    let li =e.target.parentNode;
    box.removeChild(li);
    saveData();
});








//  saving data

function saveData(){
    localStorage.setItem("data" , box.innerHTML);
}

function show(){
    box.innerHTML =  localStorage.getItem("data");
}
show();



app.js

window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);

 
   
    function showData(){
        items.innerHTML =  localStorage.getItem("data");
    }
    
    showData();
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Submit") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").style.display
			= alert("Text edited successfully");

		document.getElementById("lblsuccess")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess")
							.style.display = "none";
		}, 2000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		"btn-danger btn btn-sm float-right delete";

	deleteButton.appendChild(document.createTextNode("Delete"));

	let editButton = document.createElement("button");

	editButton.className =
			"btn-success btn btn-sm float-right edit";

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);

    saveData();
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").style.display
				= alert("deleted");

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 1000);
		}
	}
	// if (e.target.classList.contains("edit")) {
	// 	document.getElementById("item").value =
	// 		e.target.parentNode.childNodes[0].data;
	// 	submit.value = "EDIT";
	// 	editItem = e;
	// }
    saveData();
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
	document.getElementById(btnID).style.backgroundColor = "#7c8184";
}




//  saving data

function saveData(){
    localStorage.setItem("data" , items.innerHTML);
}
