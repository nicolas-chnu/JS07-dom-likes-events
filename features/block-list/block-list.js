import BlockBuilder from "../shared/block-builder.js";

let blockList;
let bgRange;

document.addEventListener('DOMContentLoaded', () => {
    blockList = document.querySelector('.blocks-list');
    bgRange = document.querySelector('#alpha-range');

    document
        .querySelector('.add-block-btn')
        .addEventListener('click', () => addBlock());

    bgRange.addEventListener('input', () => updateBlocksAlpha(bgRange.value / 100))
    blockList.addEventListener('click', e => handleBlockClick(e));
    blockList.addEventListener('mouseover', e => handleBlockChangeBg(e));
});

function addBlock() {
    const text = prompt('Enter text');
    if (text === null) return;

    const block = new BlockBuilder()
        .addText(text)
        .applyRandomBg()
        .applyRandomSize(50, 150)
        .build();

    block.style.backgroundColor = changeAlpha(block.style.backgroundColor, bgRange.value / 100);
    blockList.scrollTop = blockList.scrollHeight;
    blockList.appendChild(block);

    setTimeout(() => block.classList.add('visible'));
}

function updateBlocksAlpha(value) {
    blockList.childNodes.forEach(b => {
        b.style.backgroundColor = changeAlpha(b.style.backgroundColor, value)
    })
}

function handleBlockClick(event) {
    const FADE_DURATION = 500;
    const block = event.target;

    if (!block.classList.contains('block')) {
        return;
    }

    if (event.ctrlKey) {
        setTimeout(() => block.classList.remove('visible'));
        setTimeout(() => block.remove(), FADE_DURATION);
        return;
    }

    const containerTop = block.offsetTop - blockList.offsetTop;
    const containerLeft = block.offsetLeft - blockList.offsetLeft;
    const containerScrollTop = Math.floor(containerTop - blockList.scrollTop);

    const blockInfo = `
    width: ${block.clientWidth}px
    height: ${block.clientHeight}px
    window offset X: ${block.offsetLeft}px
    window offset Y: ${block.offsetTop}px
    parent offset X: ${containerLeft}px
    parent offset Y: ${containerTop}px
    scroll offset Y: ${containerScrollTop}px`;

    alert(blockInfo);
}

function handleBlockChangeBg(event) {
    const block = event.target;

    if (block.classList.contains('block')) {
        block.style.backgroundColor = changeAlpha(getRandomColor(), bgRange.value / 100);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function changeAlpha(rgbString, alpha) {
    const rgbaRegex = /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([01](\.\d+)?)\s*\)$/;

    if (rgbaRegex.test(rgbString)) {
        return rgbString.replace(/([01](\.\d+)?)\s*\)$/, alpha.toString() + ')');
    }
    const rgbValues = rgbString.match(/\d+/g);
    return `rgba(${rgbValues.join(', ')}, ${alpha})`;
}