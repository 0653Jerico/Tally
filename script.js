document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('appraisal-table');
    let touchTimer = null;
    let touchTarget = null;
    
    // Prevent context menu on right-click
    table.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Handle touch events
    table.addEventListener('touchstart', function(e) {
        if (e.target.classList.contains('counter')) {
            e.preventDefault();
            touchTarget = e.target;
            touchTimer = setTimeout(() => {
                const currentValue = parseInt(touchTarget.textContent);
                if (currentValue > 0) {
                    touchTarget.textContent = currentValue - 1;
                }
                touchTarget = null;
            }, 500); // Long press threshold: 500ms
        }
    });

    table.addEventListener('touchend', function(e) {
        if (touchTimer) {
            clearTimeout(touchTimer);
            if (touchTarget) {
                const currentValue = parseInt(touchTarget.textContent);
                touchTarget.textContent = currentValue + 1;
            }
        }
        touchTarget = null;
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
