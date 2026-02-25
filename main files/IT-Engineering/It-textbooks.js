function showYear(year) {
    // Hide all year contents
    document.querySelectorAll('.year-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show selected year
    document.getElementById(year + '-year').style.display = 'block';
    
    // Update active tab
    document.querySelectorAll('.year-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

function togglePapers(year) {
    const content = document.getElementById(year + '-papers');
    content.classList.toggle('active');
}

// Set first year as active by default
document.addEventListener('DOMContentLoaded', function() {
    showYear('first');
});