let blockCounter = 1;
const blockFactory = new BlockFactory();

export function fillWithNonToggleBlocks(blocksParent, count) {
    blocksParent.innerHTML = '';
    blockFactory.resetCount()

    while (blockFactory.blocksCount < count) {
        const block = blockFactory.createNonToggleBlock();

        applyRandomBg(block);
        applyRandomSize(block, 50, 150);

        blocksParent.appendChild(block);
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

class BlockFactory {
    blocksCount = 0;

    createNonToggleBlock() {
        const block = this.#createBlock();
        block.classList.add('non-toggle-block');

        return block;
    }

    resetCount() {
        this.blocksCount = 0;
    }

    #createBlock() {
        const block = document.createElement('div');
        block.setAttribute('id', `block-${this.blocksCount + 1}`);
        this.blocksCount++;

        return block;
    }
}