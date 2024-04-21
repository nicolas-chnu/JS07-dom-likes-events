export default class BlockBuilder {
    #block;

    constructor() {
        this.#block = document.createElement('div');
        this.#block.classList.add('block');
    }

    build() {
        return this.#block;
    }

    enableBlockInfo() {
        this.#block.setAttribute('data-block-info-id', 'info-' + crypto.randomUUID());
        return this;
    }

    enableToggle() {
        this.#block.setAttribute('data-toggle-id', 'toggle-' + crypto.randomUUID());
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