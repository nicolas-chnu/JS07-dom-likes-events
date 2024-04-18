export function renderBlocksInfo(destElem, blocksParent) {
    let i = 1;

    blocksParent.childNodes.forEach(b => {
        const containerTop = b.offsetTop - blocksParent.offsetTop;
        const containerLeft = b.offsetLeft - blocksParent.offsetLeft;
        const containerScrollTop = Math.floor(containerTop - blocksParent.scrollTop);

        destElem.innerHTML += `
        <article class="block-info">
            <h3 class="block-info__name">Block ${i}</h3>
            <section class="block-info__attrs" style="border-color: ${b.style.backgroundColor}">
                 <p class="block-attr">width: ${b.clientWidth}px</p>       
                 <p class="block-attr">height: ${b.clientHeight}px</p>
                 <p class="block-attr">window offset X: ${b.offsetLeft}px</p>
                 <p class="block-attr">window offset Y: ${b.offsetTop}px</p>
                 <p class="block-attr">parent offset X: ${containerLeft}px</p>
                 <p class="block-attr">parent offset Y: ${containerTop}px</p>
                 <p class="block-attr">current scroll offset Y: ${containerScrollTop}px</p>
            </section>
        </article>`
        i++;
    });
}