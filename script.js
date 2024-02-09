document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var date = today.getDate() + ' ' + today.toLocaleString('fr-FR', { month: 'long' }) + ' ' + today.getFullYear();
    document.getElementById('currentDate').textContent = date;
});
