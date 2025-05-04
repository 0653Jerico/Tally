document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('appraisal-table');
    
    // Prevent context menu on right-click
    table.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Handle mouse clicks
    table.addEventListener('mouseup', function(e) {
        if (e.target.classList.contains('counter')) {
            const currentValue = parseInt(e.target.textContent);
            
            // Left click increases, right click decreases
            if (e.button === 0) { // Left click
                e.target.textContent = currentValue + 1;
            } else if (e.button === 2) { // Right click
                if (currentValue > 0) { // Prevent negative values
                    e.target.textContent = currentValue - 1;
                }
            }
        }
    });
});
