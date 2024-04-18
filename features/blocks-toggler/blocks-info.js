export function renderBlocksInfo(destElem, blocksParent) {
    let i = 1;

    blocksParent.childNodes.forEach(b => {
        const blockId = b.getAttribute('id');
        const blockInfo = createBlockInfo(`Block ${i}`, blockId);

        destElem.appendChild(blockInfo);
        updateBlockInfoAttrs(b, blockInfo);
        i++;
    });
}

export function createBlockInfo(title, blockId) {
    const elem = document.createElement('article');
    elem.setAttribute('data-block-id', blockId);
    elem.classList.add('block-info');

    elem.innerHTML = `
    <h3 class="block-info__name">${title}</h3>
    <section class="block-info__attrs"></section>`;

    return elem;
}

export function updateBlockInfoAttrs(block, blockInfo) {
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