document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    if (password1.length < 8 || password2.length < 8) {
        alert('Valid passwords must be 8 or more characters.');
    } else if (password1 !== password2) {
        alert("Two passwords don't match!");
    } else {
        alert("Everything is good!");
    }
});