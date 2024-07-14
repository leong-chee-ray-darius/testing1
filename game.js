// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-game-button');
    const titleScreen = document.getElementById('title-screen');
    const mainGameScreen = document.getElementById('main-game-screen');

    startButton.addEventListener('click', function() {
        titleScreen.style.display = 'none';
        mainGameScreen.style.display = 'block';
    });

    // Add more interactivity as needed, for example:
    document.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', function() {
            // Handle action button clicks
            const action = this.innerText.toLowerCase();
            performAction(action);
        });
    });

    function performAction(action) {
        const narrative = document.getElementById('narrative');
        if (action === 'look around') {
            narrative.innerText = 'You look around and see a dense forest surrounding you.';
        } else if (action === 'move') {
            narrative.innerText = 'You move forward cautiously.';
        } else if (action === 'pick up') {
            narrative.innerText = 'You pick up a shiny object from the ground.';
            addToInventory('Shiny Object');
        }
    }

    function addToInventory(item) {
        const inventoryList = document.getElementById('inventory-list');
        const listItem = document.createElement('li');
        listItem.innerText = item;
        inventoryList.appendChild(listItem);
    }
});
