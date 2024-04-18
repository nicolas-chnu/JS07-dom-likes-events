import {renderNonToggleBlocks} from "./blocks-rendering.js";
import {renderBlocksInfo, updateBlocksInfo} from "./blocks-info.js";

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
            renderNonToggleBlocks(blockList, BLOCKS_COUNT);

            if (blocksInfoElem.innerHTML === '') {
                return;
            }
            blocksInfoElem.innerHTML = '';
            renderBlocksInfo(blocksInfoElem, blockList);
        });

    blockList.addEventListener('click', e => {
        if (!e.target.matches('.blocks-list > div')) {
            return;
        }

        e.target.style.width = prompt('Enter width') + 'px';
        e.target.style.height = prompt('Enter height') + 'px';

        if (blocksInfoElem.innerHTML !== '') {
            updateBlocksInfo(blocksInfoElem, blockList);
        }
    });

    blockList.addEventListener('contextmenu', e => {
        if (!e.target.matches('.blocks-list > div')) {
            return;
        }

        e.preventDefault();

        if (blocksInfoElem.innerHTML === '') {
            alert('Press "Get blocks info" to access this feature');
            return;
        }

        const blockId = e.target.getAttribute('id');
        const blockInfo = blocksInfoElem.querySelector(`[data-block-id=${blockId}]`);
        blocksInfoElem.scrollTop = blockInfo.offsetTop - blocksInfoElem.offsetTop - 20;
    });
});