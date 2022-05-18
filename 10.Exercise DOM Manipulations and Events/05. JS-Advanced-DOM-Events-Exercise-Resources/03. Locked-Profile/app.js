function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        //    let parentDivElement = Array.from(e.target.parentELement.querySelectorAll('div')).find(d=> d.includes('HiddenFields'));
        let profile = e.target.parentElement;
        let isActive = profile.querySelector('input[type = "radio"][value = "unlock"]').checked;
        const hiddenFieldsElement = Array.from(profile.querySelectorAll('div')).find(d => d.id.includes('HiddenFields'));
        let showHideElement = e.target;
        if (isActive) {
            if (showHideElement.textContent === 'Show more') {
                hiddenFieldsElement.style.display = 'block';
                showHideElement.textContent = 'Hide it';
            } else {
                hiddenFieldsElement.style.display = '';
                showHideElement.textContent = 'Show more';
            }
        }
    }
}