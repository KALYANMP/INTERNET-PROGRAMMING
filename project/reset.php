<?php
require_once 'connect.php';
if (isset($_POST['username'])) {
  $username = $_POST['username'];
  $query = "SELECT * FROM user WHERE user_name='$username'";
  $result = $conn->query($query);
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    // Display a form to enter a new password
   ?>
    <form action="reset.php" method="post">
      <input type="hidden" name="username" value="<?php echo $username;?>">
      <label for="new_password">Enter a new password:</label>
      <input type="password" id="new_password" name="new_password">
      <input type="submit" value="Reset Password">
    </form>
    <?php
  } else {
    echo "Username not found.";
  }
} elseif (isset($_POST['new_password'])) {
  $username = $_POST['username'];
  $new_password = $_POST['new_password'];
  $query = "UPDATE user SET password=PASSWORD('$new_password') WHERE user_name='$username'";
  $result = $conn->query($query);
  if ($result) {
    echo "Password reset successfully.";
  } else {
    echo "Error resetting password.";
  }
} else {
 ?>
  <form action="reset.php" method="post">
    <label for="username">Enter your username:</label>
    <input type="text" id="username" name="username">
    <input type="submit" value="Reset Password">
  </form>
  <?php
}
?>