<?php
$serveur = "localhost"; //
$user = "user";
$password = "password"; //
$databasee = "nom_de_ta_base_de_donnees";

$connexion = mysqli_connect($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);

if (!$connexion) {
    die("Échec de la connexion à la base de données : " . mysqli_connect_error());
}
?>