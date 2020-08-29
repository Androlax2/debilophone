const $textarea = document.querySelector('#text');
const $transformedText = document.querySelector('#transformedText');
const $button = document.querySelector('#button');
const $copy = document.querySelector('#copy');

$button.addEventListener('click', e => {
    e.preventDefault();

    const text = $textarea.value.toLowerCase();
    let transformedText = '';

    for (let i = 0; i < text.length; i++) {
        let character = text.charAt(i);
        if (i % 2 === 0) {
            if (character !== 'i') character = character.toUpperCase();
        }
        if (character === 'l') character = character.toUpperCase();
        transformedText += character;
    }

    $transformedText.textContent = transformedText;
});

$copy.addEventListener('click', e => {
    e.preventDefault();

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents($transformedText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
});