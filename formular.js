document.addEventListener('DOMContentLoaded', 
    function () {
    var form = document.getElementById('personalData');

    form.addEventListener('submit', 
        function (e) {
        e.preventDefault();

        var data = {
            vorname: document.getElementById('firstname').value,
            nachname: document.getElementById('lastname').value,
            position: document.getElementById('position').value,
            erfahrung: document.getElementById('experience').value,
            email: document.getElementById('email').value,
            telefon: document.getElementById('telephone').value
        };

        localStorage.setItem('bewerbung', JSON.stringify(data));

        window.location.href = 'anzeigen.html';
    });
});