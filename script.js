//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    let counterValue = 0;
    
    incrementBtn.addEventListener('click', function() {
        // Show alert with the un-incremented value
        alert(`The current value before incrementing is: ${counterValue}`);
        
        // Increment the counter
        counterValue++;
        
        // Update the display
        counterElement.textContent = counterValue;
    });
});