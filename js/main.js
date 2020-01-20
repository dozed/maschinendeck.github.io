
//Call this function to update the space
function updateSpaceState(spaceStateElement) {

	$.getJSON("http://maschinenstate.42dots.de/", function(response){

		console.log(response);

		var statusText = "Raumstatus: " + (response.state.open ? "Offen" : "Geschlossen");
    var statusField = $("#space_open_status");
    spaceStateElement.text(statusText);
    if (response.state.open) {
      spaceStateElement.css({color: "green"});
    } else {
    	spaceStateElement.css({});
    }

	});

}
