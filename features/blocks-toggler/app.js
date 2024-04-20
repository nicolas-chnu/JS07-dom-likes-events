import {addTogglerBlock, changeBlockSize, refreshBlockList, scrollToBottom} from "./block-list.js";
import {appendBlockInfo, refreshBlockInfoList, scrollToBlockInfo, updateBlockInfo} from "./block-info-list.js";
import {addToggleForBlock, toggleToggle} from "./toggle-list.js";

let actionsButtons;
let blockList;
let blockInfoList;
let toggleList;

let isBlockInfoGenerated = false;

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
            refreshBlockInfoList(blockInfoList, blockList.childNodes);
            isBlockInfoGenerated = true;
            break;
        case "add-toggle-block":
            const block = addTogglerBlock(blockList);
            scrollToBottom(blockList);
            addToggleForBlock(toggleList, block)
            appendBlockInfo(blockInfoList, block);
            break;
        case "refresh-block-list":
            refreshBlockList(blockList);
            toggleList.innerHTML = '';

            if (blockInfoList.innerHTML !== '') {
                refreshBlockInfoList(blockInfoList, blockList.childNodes);
            }
            break;
    }
}

function handleBlockClick(event) {
    const block = event.target;

    if (!block.classList.contains('block')) {
        return;
    }

    if (event.ctrlKey &&
        !block.hasAttribute('data-toggle-id') &&
        !isBlockInfoGenerated) {
        alert('To access this feature click "Get blocks info"');
        return;
    }

    if (event.ctrlKey) {
        const blockInfo = blockInfoList.querySelector('#' + block.dataset.blockInfoId);
        scrollToBlockInfo(blockInfoList, blockInfo);
        return;
    }

    if (event.altKey &&
        !block.hasAttribute('data-toggle-id')) {
        alert('This feature only works with toggle blocks')
        return;
    }

    if (event.altKey &&
        block.hasAttribute('data-toggle-id')) {
        const toggle = toggleList.querySelector('#' + block.dataset.toggleId);
        toggleToggle(toggle);
        return;
    }

    if (changeBlockSize(block)) {
        const blockInfo = blockInfoList.querySelector('#' + block.dataset.blockInfoId);
        updateBlockInfo(blockInfo, block);
    }
}