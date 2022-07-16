let addForm = document.addfrm;
let text = addForm.add;
let ul = document.querySelector(".todos");

ul.addEventListener("click",(e) => {
	if(e.target.nodeName === "I")	// click hone pe kya click hua hai li pe span,blankarea(li),trashIcon pe I aayega e.target.nodeName se
		e.target.parentElement.remove();	//parent ul se jo target hoga jo click kiya hoga wo haat jayega
});
let addItem = (item) =>{

	// we can add element with help of appendchild as well but we want li with decoration i mean we have to set lots of attributes that's why we're using this trick
	let str = `<li class="list-group-item d-flex justify-content-between align-items-center">
				<span>${item}</span>
				<i class="far fa-trash-alt delete"></i>
			</li>`;
	ul.innerHTML += str;

}

addForm.addEventListener("submit",(e) => {
	
	e.preventDefault();		// canceling the default behaviour of form
	let item = text.value;	// we will get whatever user will enter as there todo list
	if(item.length > 0)		// empty row ko add nhi hone den
	addItem(item);
	text.value = "";	//for text box erase

});

//for searching 
let searchItem = (text) => {
	let listitems = ul.children;
	for(let li of listitems)
	{
		if(li.innerText.toLowerCase().indexOf(text)===-1)	//equalsIgnoreCase() bhi laga skate hai thys
			li.classList.add("filtered");
		else
			li.classList.remove("filtered");
	}
}

let serachText = document.querySelector(".search input");	// serach parent class me input dundo
serachText.addEventListener("keyup",(e) =>{
	searchItem(serachText.value.toLowerCase());
});