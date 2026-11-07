// --- COUNTDOWN TIMER LOGIC ---
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Set end time (24 hours from now)
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);

    function updateTimer() {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            countdownElement.innerHTML = "EXPIRED";
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = 
            `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Run countdown when page loads
document.addEventListener('DOMContentLoaded', startCountdown);


























































