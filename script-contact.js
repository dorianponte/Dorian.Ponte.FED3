function runScript() {

    var fieldsetOne = document.querySelector('fieldset:nth-of-type(2)');
    var fieldsetTwo = document.querySelector('fieldset:nth-of-type(3)');

    fieldsetOne.classList.add('off');
    fieldsetTwo.classList.add('off');

    document.querySelector('input[value="stage"]').onclick = function () {
        fieldsetOne.classList.add('off');
        fieldsetTwo.classList.remove('off');
    };
    
    document.querySelector('input[value="project"]').onclick = function () {
        fieldsetTwo.classList.add('off');
        fieldsetOne.classList.remove('off');
    };
	
	console.log('executed');

}

window.onload = runScript;