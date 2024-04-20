const INITIAL_BLOCK_COUNT = 12;

export function refreshBlockList(blockList) {
    blockList.innerHTML = '';

    for (let i = 0; i < INITIAL_BLOCK_COUNT; i++) {
        const block = new BlockBuilder()
            .applyRandomBg()
            .applyRandomSize(50, 150)
            .build();

        blockList.appendChild(block);
    }
}

export function changeBlockSize(block) {
    const width = prompt('Enter width');
    if (width === null) return false;

    const height = prompt('Enter height');
    if (height === null) return false;

    block.style.width = width + 'px';
    block.style.height = height + 'px';

    return true;
}

export function addTogglerBlock(blockList) {

}

class BlockBuilder {
    #block;

    constructor() {
        this.#block = document.createElement('div');
        this.#block.classList.add('block');
    }

    build() {
        return this.#block;
    }

    setToggle() {
        this.#block.setAttribute('data-toggle-id', crypto.randomUUID());
        return this;
    }

    applyRandomSize(minPx, maxPx) {
        this.#block.style.height = this.#randomPx(minPx, maxPx + 1);
        this.#block.style.width = this.#randomPx(minPx, maxPx + 1);
        return this;
    }

    applyRandomBg() {
        this.#block.style.backgroundColor = this.#getRandomColor();
        return this;
    }

    #randomPx(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower + 'px';
    }

    #getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}