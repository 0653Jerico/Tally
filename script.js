document.addEventListener('DOMContentLoaded', function() {
    function setupTableInteractions(table) {
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
                }, 500);
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
                
                if (e.button === 0) { // Left click
                    e.target.textContent = currentValue + 1;
                } else if (e.button === 2) { // Right click
                    if (currentValue > 0) {
                        e.target.textContent = currentValue - 1;
                    }
                }
            }
        });
    }

    // Setup interactions for both tables
    const appraisalTable = document.getElementById('appraisal-table');
    const financialTable = document.getElementById('financial-table');
    
    setupTableInteractions(appraisalTable);
    setupTableInteractions(financialTable);
});
