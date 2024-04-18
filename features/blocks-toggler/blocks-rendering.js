export function renderNonToggleBlocks(elem, count) {
    for (let i = 0; i < count; i++) {
        const block = document.createElement('div')
        block.setAttribute('data-block-id', 'block-' + i)
        block.classList.add('non-toggle-block');

        applyRandomBg(block);
        applyRandomSize(block, 50, 150);

        elem.appendChild(block);
    }
}

function applyRandomSize(elem, minPx, maxPx) {
    elem.style.height = randomPx(minPx, maxPx + 1);
    elem.style.width = randomPx(minPx, maxPx + 1);
}

function applyRandomBg(elem) {
    elem.style.backgroundColor = getRandomColor();
}

function randomPx(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower + 'px';
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}