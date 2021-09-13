let block = document.querySelector('.block-ver-input');
block.addEventListener('onblur', valid);

function valid() {
    debugger
    let inputCollection = document.querySelectorAll('.block-ver-input');
    for (let key of inputCollection) {
        if (key.innerText.length === key.getAttribute('.data-length')) {
            key.setAttribute('class', 'susses');
        }
        else {
            key.setAttribute('class', 'invalid');
        }
    }
}