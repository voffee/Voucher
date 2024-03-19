
// Declaring Variables
const cardFlip = document.querySelector('.voucher-container');
const unWrap = document.querySelector('.unwrapper-container');
const wrapperActual = document.querySelector('.voucher-unwrap');


// Creating Event Listeners
cardFlip.addEventListener('click', function() {
    cardFlip.classList.toggle('is-flipped');
});

unWrap.addEventListener('click', unwrapVoucher);

// Creating Function
function unwrapVoucher() {

    if(cardFlip.classList.contains('unwrap')) {
        cardFlip.classList.remove('unwrap');
        wrapperActual.classList.add('button-transform');
    }

    else {
        cardFlip.classList.add('unwrap');
        wrapperActual.classList.remove('button-transform');
    }
}