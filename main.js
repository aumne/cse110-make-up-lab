const input_form = document.getElementById('submission-form');

const input = document.getElementById('number_input');
const output = document.getElementById('number_output');

input_form.addEventListener('submit', increment_input);
function increment_input(event) {
    event.preventDefault();
    //TODO error handling
    output.textContent = input.value++;
}