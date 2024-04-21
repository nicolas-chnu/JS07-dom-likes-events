import BlockBuilder from "../shared/block-builder.js";

const INITIAL_BLOCK_COUNT = 12;

export function refreshBlockList(blockList) {
    blockList.innerHTML = '';

    for (let i = 0; i < INITIAL_BLOCK_COUNT; i++) {
        const block = new BlockBuilder()
            .enableBlockInfo()
            .applyRandomBg()
            .applyRandomSize(50, 150)
            .build();

        blockList.appendChild(block);
    }
}

export function changeBlockSize(block) {
    const width = prompt('Enter width');
    if (width === null) return false;

    const height = prompt('Enter height');
    if (height === null) return false;

    block.style.width = width + 'px';
    block.style.height = height + 'px';

    return true;
}

export function addTogglerBlock(blockList) {
    const block = new BlockBuilder()
        .enableBlockInfo()
        .enableToggle()
        .applyRandomBg()
        .applyRandomSize(50, 150)
        .build();

    blockList.appendChild(block);
    return block;
}

export function scrollToBottom(blockList) {
    blockList.scrollTop = blockList.scrollHeight;
}