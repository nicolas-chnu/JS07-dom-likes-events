document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    container.addEventListener('click', e => {
        if (!e.target.classList.contains('tree-node__name')) {
            return;
        }

        const node = e.target.parentElement;
        node.classList.toggle('is-content-shown');

        if (node.classList.contains('is-content-shown')) {
            return;
        }

        node.querySelectorAll('.tree-node')
            .forEach(elem => elem.classList.remove('is-content-shown'));
    })
});