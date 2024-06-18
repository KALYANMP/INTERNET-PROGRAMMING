<?php

require_once 'connect.php';

$name = $_POST['name'];
$user = $_POST['username'];
$password = $_POST['password'];

$query = "INSERT INTO user (full_name,user_name,password) VALUES ('$name','$user','$password')";
if(mysqli_query($conn, $query)){
    echo "success";
}
else{
    echo "error occured ";
    mysqli_error($conn);
}
mysqli_close($conn);
?>