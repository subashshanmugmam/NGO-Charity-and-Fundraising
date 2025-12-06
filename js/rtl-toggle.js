/**
 * Event Management Website - RTL Toggle
 * Handles bidirectional language switching.
 */

document.addEventListener('DOMContentLoaded', () => {
    initRTL();
});

function initRTL() {
    const toggleBtn = document.getElementById('rtl-toggle');
    const html = document.documentElement;

    // Check saved preference
    const savedDir = localStorage.getItem('dir') || 'ltr';
    setDirection(savedDir);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentDir = html.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            setDirection(newDir);
        });
    }
}

function setDirection(dir) {
    const html = document.documentElement;
    const toggleBtn = document.getElementById('rtl-toggle');

    html.setAttribute('dir', dir);
    localStorage.setItem('dir', dir);

    if (toggleBtn) {
        if (dir === 'rtl') {
            toggleBtn.innerHTML = '<span class="font-bold">LTR</span>';
            toggleBtn.setAttribute('aria-label', 'Switch to LTR');
        } else {
            toggleBtn.innerHTML = '<span class="font-bold">RTL</span>';
            toggleBtn.setAttribute('aria-label', 'Switch to RTL');
        }
    }
}
