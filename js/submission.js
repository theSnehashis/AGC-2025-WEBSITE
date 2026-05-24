/**
 * submission.js
 * Handles flip card exclusive toggling for publication cover cards.
 */

let activeCard = null;

document.querySelectorAll('.flip-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    card.addEventListener('click', () => {
        if (card === activeCard) {
            card.classList.remove('is-flipped');
            activeCard = null;
        } else {
            if (activeCard) activeCard.classList.remove('is-flipped');
            card.classList.add('is-flipped');
            activeCard = card;
        }
    });

    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});
