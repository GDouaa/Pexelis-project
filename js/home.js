function selectAvatar(avatarNumber) {
    document.querySelectorAll('.avatar').forEach(avatar => {
        avatar.classList.remove('selected');
    });
    document.querySelectorAll('.avatar')[avatarNumber - 1].classList.add('selected');
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas !');
        return;
    }

    const selectedAvatar = document.querySelector('.avatar.selected');
    const avatarIndex = Array.from(document.querySelectorAll('.avatar')).indexOf(selectedAvatar) + 1;

    alert('Inscription réussie ! Bienvenue ' + username + ' !');
});