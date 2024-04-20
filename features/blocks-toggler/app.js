import {addTogglerBlock, refreshBlockList} from "./block-list.js";
import {generateBlockInfoList, updateBlockInfoList} from "./block-info-list.js";
import {generateBlockInfoList, scrollToBlockInfo, updateBlockInfo, updateBlockInfoList} from "./block-info-list.js";
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
    blockList.addEventListener('block-changed', e => handleBlockChanged(e));

    refreshBlockList(blockList);
});

function handleAction(event) {
    const action = event.target.hasAttribute('data-action');

    if (!action) {
        return;
    }

    switch (action) {
        case "get-blocks-info":
            generateBlockInfoList(blockInfoList, blockList.children);
            break;
        case "add-toggle-block":
            addTogglerBlock(blockList);
            break;
        case "refresh-block-list":
            refreshBlockList(blockList);

            if (blockInfoList.innerHTML !== '') {
                updateBlockInfoList(blockInfoList, blockList.children);
            }
            break;
    }
}

function handleBlockClick(event) {
    return undefined;
}

function handleBlockChanged(event) {
    const block = event.target;
    const blockInfoId = block.dataset.blockInfoId;
    const blockInfo = blockInfoList.querySelector('#' + blockInfoId);

    updateBlockInfo(blockInfo);
}