import {renderNonToggleBlocks} from "./blocks-rendering.js";
import {renderBlocksInfo} from "./blocks-info.js";

const BLOCKS_COUNT = 20;

document.addEventListener('DOMContentLoaded', () => {
    const blockList = document.querySelector('.blocks-list');
    renderNonToggleBlocks(blockList, BLOCKS_COUNT);

    const blocksInfoElem = document.querySelector('.blocks-info');

    document.querySelector('.get-blocks-info-btn')
        .addEventListener('click', () => {
            blocksInfoElem.innerHTML = '';
            renderBlocksInfo(blocksInfoElem, blockList);
        });

    document.querySelector('.regenerate-blocks-btn')
        .addEventListener('click', () => {
            blockList.innerHTML = '';
            blocksInfoElem.innerHTML = '';
            renderNonToggleBlocks(blockList, BLOCKS_COUNT);
        });

    blockList.addEventListener('click', e => {
        if (!e.target.matches('.blocks-list > div')) {
            return;
        }

        e.target.style.width = prompt('Enter width') + 'px';
        e.target.style.height = prompt('Enter height') + 'px';

        if (blocksInfoElem.innerHTML === '') {
            return;
        }
        blocksInfoElem.innerHTML = '';
        renderBlocksInfo(blocksInfoElem, blockList);
    });
});