let blockInfoCount = 0;

export function refreshBlockInfoList(blockInfoList, blocks) {
    blockInfoCount = 0;
    blockInfoList.innerHTML = '';

    blocks.forEach(b => {
        const blockInfo = createBlockInfo(`Block ${blockInfoCount + 1}`, b.dataset.blockInfoId);

        blockInfoList.appendChild(blockInfo);
        updateBlockInfo(blockInfo, b);
        blockInfoCount++;
    });
}

export function appendBlockInfo(blockInfoList, block) {
    const blockInfo = createBlockInfo(`Block ${blockInfoCount + 1}`, block.dataset.blockInfoId);

    blockInfoList.appendChild(blockInfo);
    updateBlockInfo(blockInfo, block);
    blockInfoCount++;
}

export function updateBlockInfo(blockInfo, block) {
    console.log('AAAAAAAAAAA')
    const attrList = blockInfo.querySelector('.block-info__attrs');
    attrList.style.borderColor = block.style.backgroundColor;

    const blocksParent = block.parentElement;
    const containerTop = block.offsetTop - blocksParent.offsetTop;
    const containerLeft = block.offsetLeft - blocksParent.offsetLeft;
    const containerScrollTop = Math.floor(containerTop - blocksParent.scrollTop);

    attrList.innerHTML = `
    <p class="block-attr">width: ${block.clientWidth}px</p>       
             <p class="block-attr">height: ${block.clientHeight}px</p>
             <p class="block-attr">window offset X: ${block.offsetLeft}px</p>
             <p class="block-attr">window offset Y: ${block.offsetTop}px</p>
             <p class="block-attr">parent offset X: ${containerLeft}px</p>
             <p class="block-attr">parent offset Y: ${containerTop}px</p>
             <p class="block-attr">scroll offset Y: ${containerScrollTop}px</p>`;
}

export function scrollToBlockInfo(blockInfoList, blockInfo) {
    const PADDING = 20;
    blockInfoList.scrollTop = blockInfo.offsetTop - blockInfoList.offsetTop - PADDING;
}

function createBlockInfo(title, id) {
    const elem = document.createElement('article');
    elem.setAttribute('id', id);
    elem.classList.add('block-info');

    elem.innerHTML = `
    <h3 class="block-info__name">${title}</h3>
    <section class="block-info__attrs"></section>`;

    return elem;
}