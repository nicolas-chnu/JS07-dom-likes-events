import {addTogglerBlock, refreshBlockList} from "./block-list.js";
import {generateBlockInfoList, updateBlockInfoList} from "./block-info-list.js";
import {} from "./toggle-list.js";

const INITIAL_BLOCK_COUNT = 12;

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