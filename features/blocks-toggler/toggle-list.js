export function toggleToggle(toggle) {
    toggle.style.display = toggle.style.display === 'none' ? 'block' : 'none';
}

export function addToggleForBlock(toggleList, block) {
    const toggle = document.createElement('div');

    toggle.classList.add('toggle');
    toggle.style.backgroundColor = block.style.backgroundColor;
    toggle.innerText = 'Toggle me';
    toggle.setAttribute('id', block.dataset.toggleId)

    toggleList.appendChild(toggle);
}