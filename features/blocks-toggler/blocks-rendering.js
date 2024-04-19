export function fillWithNonToggleBlocks(blocksParent, count) {
    blocksParent.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const block = new BlockBuilder()
            .applyRandomBg()
            .applyRandomSize(50, 150)
            .build();

        blocksParent.appendChild(block);
    }
}

class BlockBuilder {
    #block;

    constructor() {
        this.#block = document.createElement('div');
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