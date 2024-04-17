document.addEventListener('DOMContentLoaded', () => {
    const pageContainer = document.querySelector('.my-pages');
    createTabs(pageContainer);
});


function createTabs(elem) {
    const tabsPages = elem.querySelectorAll('[data-tabname]');
    const tabsContainer = document.createElement('nav');

    tabsPages.forEach(page => {
        const button = document.createElement('button');
        button.classList.add('tab-btn');

        if (page !== tabsPages[0]) {
            page.classList.add('is-hidden');
        } else {
            button.classList.add('active');
        }

        button.innerText = page.dataset.tabname;
        tabsContainer.appendChild(button);
    })

    elem.addEventListener('click', e => {
        if (!e.target.classList.contains('tab-btn') || e.target.classList.contains('active')) {
            return;
        }

        const previousBtn = elem.querySelector('nav button.active');
        previousBtn.classList.remove('active');

        e.target.classList.add('active');

        const previousPage = elem.querySelector('[data-tabname]:not(.is-hidden)');
        previousPage.classList.add('is-hidden');

        const currentPage = elem.querySelector(`[data-tabname="${e.target.innerText}"]`);
        currentPage.classList.remove('is-hidden');
    })

    elem.prepend(tabsContainer);
}