let currentBtn;
let currentTabPage;

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

        if (page === tabsPages[0]) {
            currentTabPage = page;
            currentBtn = button;
            button.classList.add('active');
        } else {
            page.classList.add('is-hidden');
        }

        button.innerText = page.dataset.tabname;
        tabsContainer.appendChild(button);
    })

    elem.addEventListener('click', e => updateTab(e))
    elem.prepend(tabsContainer);
}

function updateTab(event) {
    const button = event.target;

    if (!button.classList.contains('tab-btn') || button.classList.contains('active')) {
        return;
    }

    currentBtn.classList.remove('active');
    button.classList.add('active');
    currentBtn = button;

    const newTabPage = document.querySelector(`[data-tabname="${event.target.innerText}"]`);

    currentTabPage.classList.add('is-hidden');
    newTabPage.classList.remove('is-hidden');
    currentTabPage = newTabPage;
}