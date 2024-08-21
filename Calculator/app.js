
let clear = document.querySelector('.clear');
let del = document.querySelector('.delete');

let input = document.querySelector('#input');
let result = document.querySelector('.result');
let equal = document.querySelector('.equal');


function handleInputClick(value) {
    input.value += value;
}

document.querySelectorAll('.button').forEach(button => {

    button.addEventListener('click', function() {
        handleInputClick(button.textContent);
    });

});



clear.addEventListener('click', function(){
    input.value = '';
    result.textContent = '';
})

del.addEventListener('click', function(){
    input.value = input.value.slice(0, -1);
})

equal.addEventListener('click', function(){
    try {
        result.textContent = eval(input.value); // turn the string into a valid expression and evaluate it
    } catch (error) {
        result.textContent = "Error"; // Display error if the expression is invalid
    }

})

