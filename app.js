// document.addEventListener('DOMContentLoaded', () => {
//     // Example of updating rain probability dynamically
//     const rainProbElement = document.getElementById('rain-prob');
//     const rainProbability = 75; // Replace with actual data
//     rainProbElement.textContent = `${rainProbability}%`;
// });

function changeContent() {
    document.getElementById('content').innerHTML = `
        <h1>New Content</h1>
        <p>This is the updated content after clicking the button.</p>
    `;
}
