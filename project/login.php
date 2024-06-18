<?php
session_start();
require_once 'connect.php';
$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM user WHERE user_name='$username'";
$result = $conn->query($query);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $stored_password = $row['password'];
    if ($password === $stored_password) {
        echo "success";
    } else {
        echo "Invalid password.";
    }
} else {
    echo "Invalid username ".$username;
}
?>