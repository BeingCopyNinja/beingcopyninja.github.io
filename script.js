document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const gameItems = document.querySelectorAll('.game-item');
    const modal = document.getElementById('game-info-modal');
    const closeButton = document.querySelector('.close-btn');
    const infoText = document.getElementById('game-info-text');

    // Game information
    const gameInfos = {
        '1': "Minecraft is a sandbox-style game that lets you explore, build, and survive in a blocky 3D world.",
        '2': "Battlegrounds Mobile India (BGMI) is one of India's most popular online multiplayer battle royale games.",
        '3': "Grand Theft Auto IV is an action-adventure game played from a third-person perspective."
    };

    // Show modal with game information
    gameItems.forEach(item => {
        item.addEventListener('click', () => {
            const gameId = item.getAttribute('data-game');
            const gameInfo = gameInfos[gameId] || 'No information available.';
            infoText.textContent = gameInfo;
            modal.style.display = 'flex';
        });
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

      // Set the date of birth
    const birthDate = new Date("July 24, 2007").getTime();

    // Update the timer every 1 second
    const x = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();

        // Calculate the time elapsed since birthDate
        const elapsed = now - birthDate;

        // Time calculations for years, months, days, hours, minutes, and seconds
        const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((elapsed % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((elapsed % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer-display"
        document.getElementById("timer-display").innerHTML = 
            years + " Years " + months + " Months " + days + " Days "/** +
            hours + " hours " + minutes + " minutes " + seconds + " seconds"**/;

    }, 1000);
});
