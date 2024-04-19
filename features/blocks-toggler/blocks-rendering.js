let blocksCount = 0;

export function fillWithNonToggleBlocks(blocksParent, count) {
    blocksParent.innerHTML = '';
    blocksCount = 0;

    for (let i = 0; i < count; i++) {
        const block = new BlockBuilder(i + 1)
            .setNonToggle()
            .applyRandomBg()
            .applyRandomSize(50, 150)
            .build();

        blocksParent.appendChild(block);
        blocksCount++;
    }
}

class BlockBuilder {
    #block;

    constructor(number) {
        this.#block = document.createElement('div');
        this.#block.setAttribute('id', `block-${number}`);
    }

    build() {
        return this.#block;
    }

    setNonToggle() {
        this.#block.classList.add('non-toggle-block');
        return this;
    }

    setToggle() {
        this.#block.classList.add('toggle-block');
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