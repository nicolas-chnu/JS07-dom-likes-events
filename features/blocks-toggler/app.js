import {addTogglerBlock, changeBlockSize, refreshBlockList, scrollToBottom} from "./block-list.js";
import {refreshBlockInfoList, scrollToBlockInfo, updateBlockInfo} from "./block-info-list.js";
import {} from "./toggle-list.js";

let actionsButtons;
let blockList;
let blockInfoList;
let toggleList;

document.addEventListener('DOMContentLoaded', () => {
    actionsButtons = document.querySelector('.actions');
    blockList = document.querySelector('.blocks-list');
    blockInfoList = document.querySelector('.blocks-info');
    toggleList = document.querySelector('.toggle-stack');

    actionsButtons.addEventListener('click', e => handleAction(e));
    blockList.addEventListener('click', e => handleBlockClick(e));

    refreshBlockList(blockList);
});

function handleAction(event) {
    const action = event.target.getAttribute('data-action');

    if (!action) {
        return;
    }

    switch (action) {
        case "get-blocks-info":
            refreshBlockInfoList(blockInfoList, blockList.children);
            break;
        case "add-toggle-block":
            addTogglerBlock(blockList);
            scrollToBottom(blockList);
            break;
        case "refresh-block-list":
            refreshBlockList(blockList);

            if (blockInfoList.innerHTML !== '') {
                refreshBlockInfoList(blockInfoList, blockList.children);
            }
            break;
    }
}

function handleBlockClick(event) {
    const block = event.target;

    if (!block.classList.contains('block')) {
        return;
    }

    if (event.ctrlKey) {
        scrollToBlockInfo(blockInfoList, block.dataset.blockInfoId);
        return;
    }

    if (changeBlockSize(block)) {
        const blockInfo = blockInfoList.querySelector('#' + block.dataset.blockInfoId);
        updateBlockInfo(blockInfo);
    }
}