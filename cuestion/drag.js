function dragstart_handler(ev) {
	// Set the drag effect to copy
	ev.dataTransfer.dropEffect = "copy";
	// Log Start
		//console.log("dragStart");
	// Add the target element's id to the data transfer object
	ev.dataTransfer.setData("text/plain", ev.target.id);
	// Set data
	ev.dataTransfer.setData("text/html", "<p>Example paragraph</p>");
	ev.dataTransfer.setData("text/uri-list", "https://developer.mozilla.org");
	console.log("This = ");
	console.dir(this);
}

function dragover_handler(ev) {
	ev.preventDefault();
	// Set the dropEffect to move
	ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
	ev.preventDefault();
	console.dir(ev);
	console.dir(ev.target.parentElement);
	if(ev.target.className === "droppable"){
		// Get the id of the target and add the moved element to the target's DOM
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	} else if(ev.target.parentElement.className === "droppable"){
		// Get the id of the target and add the moved element to the target's DOM
		var data = ev.dataTransfer.getData("text");
		console.dir(ev.dataTransfer);
		//ev.target.parentElement.appendChild(document.getElementById(data));
		ev.target.parentElement.insertBefore(document.getElementById(data), ev.target.nextSibling);
	}

}
