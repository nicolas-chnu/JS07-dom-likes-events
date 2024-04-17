const FADE_DURATION = 300;
let currentBtn;
let currentTabPage;
let isAnimating = false;

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

    elem.addEventListener('click', async e => await updateTab(e))
    elem.prepend(tabsContainer);
}

async function updateTab(event) {
    if (isAnimating) {
        return
    }

    isAnimating = true;
    const button = event.target;

    if (!button.classList.contains('tab-btn') || button.classList.contains('active')) {
        return;
    }

    currentBtn.classList.remove('active');
    button.classList.add('active');
    currentBtn = button;

    const newTabPage = document.querySelector(`[data-tabname="${event.target.innerText}"]`);

    setTimeout(() => currentTabPage.style.opacity = '0');

    await new Promise(resolve => setTimeout( resolve, FADE_DURATION));

    currentTabPage.classList.add('is-hidden');

    newTabPage.style.opacity = '0';
    newTabPage.classList.remove('is-hidden');
    setTimeout(() => newTabPage.style.opacity = '1');
    currentTabPage = newTabPage;

    await new Promise(resolve => setTimeout( resolve, FADE_DURATION));

    isAnimating = false;
}