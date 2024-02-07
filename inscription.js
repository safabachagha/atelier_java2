// Fonction pour valider la date de naissance
function validerDateOfBirth() {
    // Récupérer la valeur du champ "Date de naissance"
    var dateOfBirthInput = document.getElementById('dateOfBirth');
    var dateOfBirth = new Date(dateOfBirthInput.value); // Crée un nouvel objet Date basé sur la date saisie par l'utilisateur.

    // Récupérer la date d'aujourd'hui
    var aujourdHui = new Date(); // Crée un objet représentant la date et l'heure actuelles.

    // Vérifier si la date de naissance est supérieure ou égale à la date d'aujourd'hui
    if (dateOfBirth >= aujourdHui) {
        alert('La date de naissance doit être antérieure à la date d\'aujourd\'hui.');
    } else {
        // La date de naissance est valide
        alert('Date de naissance valide!');
        // Vous pouvez ajouter ici le code supplémentaire en cas de date de naissance valide.
    }
}




function validerFormulaire(event) {
    event.preventDefault();

    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var telephone = document.getElementById('telephone').value;
    var dateOfBirthInput = document.getElementById('dateOfBirth');
    var dateOfBirth = new Date(dateOfBirthInput.value);
    var password = document.getElementById('password').value;

    // Réinitialiser tous les messages d'erreur et de succès
    document.getElementById('erreurNom').innerText = '';
    document.getElementById('erreurPrenom').innerText = '';
    document.getElementById('erreurTelephone').innerText = '';
    document.getElementById('erreurDateOfBirth').innerText = '';
    document.getElementById('erreurPassword').innerText = '';
    document.getElementById('succesNom').innerText = '';
    document.getElementById('succesPrenom').innerText = '';
    document.getElementById('succesTelephone').innerText = '';
    document.getElementById('succesDateOfBirth').innerText = '';
    document.getElementById('succesPassword').innerText = '';

    // Conditions de validation
    var nomRegex = /^[a-zA-Z]+$/;
    var prenomRegex = /^[a-zA-Z]+$/;
    var telephoneRegex = /^[0-9]{8}$/;
    var passwordRegex = /[a-zA-Z0-9]{8,}/;

    if (!nomRegex.test(nom) || nom.length < 1) {
        document.getElementById('erreurNom').innerText = 'Veuillez entrer un nom valide (lettres uniquement)';
    } else {
        document.getElementById('succesNom').innerText = 'Correct';
    }

    if (!prenomRegex.test(prenom) || prenom.length < 1) {
        document.getElementById('erreurPrenom').innerText = 'Veuillez entrer un prénom valide (lettres uniquement)';
    } else {
        document.getElementById('succesPrenom').innerText = 'Correct';
    }

   

    if (!telephoneRegex.test(telephone)) {
        document.getElementById('erreurTelephone').innerText = 'Veuillez entre un numéro de téléphone valide (8 chiffres)';
    } else {
        document.getElementById('succesTelephone').innerText = 'Correct';
    }

    if (dateOfBirth >= new Date() || isNaN(dateOfBirth.getTime())) {
        document.getElementById('erreurDateOfBirth').innerText = 'La date de naissance doit être antérieure à la date d\'aujourd\'hui.';
    } else {
        document.getElementById('succesDateOfBirth').innerText = 'Correct';
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('erreurPassword').innerText = 'Veuillez entrer un mot de passe valide (Le mot de passe doit contenir au moins 8 caractères, incluant au moins un chiffre, une lettre minuscule et une lettre majuscule)';
    } else {
        document.getElementById('succesPassword').innerText = 'Correct';
    }
}

// Attacher la fonction validerFormulaire à l'événement "submit" du formulaire
document.getElementById('inscriptionForm').addEventListener('submit', validerFormulaire);

document.getElementById('inscriptionForm').addEventListener('submit', validerDateOfBirth);

// Récupérer l'élément du champ d'email
var emailInput = document.getElementById('email');

// Ajouter un gestionnaire d'événements pour l'événement "keyup"
emailInput.addEventListener('keyup', function() {
    var email = emailInput.value;
    var emailRegex = /.+@esprit\.tn/; // Vérifier si l'email contient "@esprit.tn"

    // Réinitialiser le message d'erreur et de succès à chaque frappe
    document.getElementById('erreurEmail').innerText = '';
    document.getElementById('succesEmail').innerText = '';

    if (!emailRegex.test(email)) {
        document.getElementById('erreurEmail').innerText = 'L\'adresse email doit contenir "@esprit.tn"';
    } else {
        document.getElementById('succesEmail').innerText = 'Correct';
    }
});
