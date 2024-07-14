// Initial game state
var player = {
    name: "Player",
    health: 100,
    maxHealth: 100,
    magic: 50,
    maxMagic: 50,
    strength: 10,
    defense: 5,
    area: 1,  // Player starts in Area 1
    city: false,  // Not in city initially
    level: 1,
    experience: 0,
    gold: 0,
    traits: [],
    activeSpell: null,
    activeShield: false
};

var enemy = {
    name: "Enemy",
    health: 80,
    maxHealth: 80,
    magic: 40,
    maxMagic: 40,
};

// Function to update bars
function updateBars() {
    // Player bars
    var playerHealthPercentage = (player.health / player.maxHealth) * 100;
    document.getElementById("playerHealthBar").style.width = playerHealthPercentage + "%";

    var playerMagicPercentage = (player.magic / player.maxMagic) * 100;
    document.getElementById("playerMagicBar").style.width = playerMagicPercentage + "%";

    // Enemy bars
    var enemyHealthPercentage = (enemy.health / enemy.maxHealth) * 100;
    document.getElementById("enemyHealthBar").style.width = enemyHealthPercentage + "%";

    var enemyMagicPercentage = (enemy.magic / enemy.maxMagic) * 100;
    document.getElementById("enemyMagicBar").style.width = enemyMagicPercentage + "%";
}

// Example function for exploring
function explore() {
    document.getElementById('gameText').textContent = "You explore the area.";
    // Add logic for exploration (e.g., encounter enemies, find items)
}

// Example function for starting a fight
function startFight() {
    document.getElementById('gameText').textContent = "You start a fight.";
    // Add logic for fighting (e.g., combat mechanics)
}

// Example function for entering a city
function enterCity() {
    document.getElementById('gameText').textContent = "You enter the city.";
    // Add logic for city interactions (e.g., buying items, learning skills)
}

// Example function for selling loot
function sellLoot() {
    document.getElementById('gameText').textContent = "You sell your loot.";
    // Add logic for selling items
}

// Example function for buying items
function buyItems() {
    document.getElementById('gameText').textContent = "You buy items.";
    // Add logic for purchasing items
}

// Example function for learning skills
function learnSkills() {
    document.getElementById('gameText').textContent = "You learn new skills.";
    // Add logic for learning skills
}

// Example function for exploring the city
function exploreCity() {
    document.getElementById('gameText').textContent = "You explore the city.";
    // Add logic for exploring the city
}

// Example function for casting a spell
function castSpell(spell) {
    document.getElementById('gameText').textContent = `You cast ${spell} spell.`;
    // Add logic for casting spells
}

// Example function for using a shield
function useShield() {
    document.getElementById('gameText').textContent = "You use your shield.";
    // Add logic for using shields
}

// Example function for saving the game
function saveGame() {
    alert("Game saved!");
}

// Example function for toggling settings menu
function toggleSettings() {
    var settingsMenu = document.getElementById("settingsMenu");
    settingsMenu.style.display = (settingsMenu.style.display === "block") ? "none" : "block";
}

// Example function for toggling dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// Example function for changing text size
function changeTextSize() {
    var textSize = document.getElementById("textSizeSelect").value;
    var gameText = document.getElementById("gameText");

    switch (textSize) {
        case "normal":
            gameText.style.fontSize = "16px";
            break;
        case "large":
            gameText.style.fontSize = "20px";
            break;
        default:
            break;
    }
}

// Initialize the game
updateBars();
document.getElementById('gameText').textContent = "Welcome to the Text RPG! Begin your adventure...";
