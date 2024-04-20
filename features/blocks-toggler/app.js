import {refreshBlockList} from "./block-list.js";
import {} from "./block-info-list.js";
import {} from "./toggle-list.js";

const INITIAL_BLOCK_COUNT = 12;

document.addEventListener('DOMContentLoaded', () => {
    const actionsButtons = document.querySelector('.actions');
    const blockList = document.querySelector('.blocks-list');
    const blockInfoList = document.querySelector('.blocks-info');
    const toggleList = document.querySelector('.toggle-stack');

    actionsButtons.addEventListener('click', e => handleAction(e));
    blockList.addEventListener('click', e => handleBlockClick(e));

    refreshBlockList(blockList);
});

function handleAction(event) {
    return undefined;
}

function handleBlockClick(event) {
    return undefined;
}