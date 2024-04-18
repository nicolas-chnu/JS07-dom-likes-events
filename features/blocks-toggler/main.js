import {renderNonToggleBlocks} from "./blocks-rendering.js";

const BLOCKS_COUNT = 12;

document.addEventListener('DOMContentLoaded', () => {
    const blockList = document.querySelector('.blocks-list');
    renderNonToggleBlocks(blockList, BLOCKS_COUNT);
});