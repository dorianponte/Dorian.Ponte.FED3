onload = function() { //onload wordt pas uitgevoerd als alles geload is.
    
    var hetMenu = document.querySelector("body > header nav");
    
    hetMenu.addEventListener("click", menuToggle);
	
	runScript();
}


function menuToggle () {
    
    var deBody = document.querySelector("body");
    
    deBody.classList.toggle("navigatie");
    
    console.log(deBody.classList);
}

