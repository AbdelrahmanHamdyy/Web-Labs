<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $digits = $_POST["digits"];
    if ($digits != 0 && empty($digits)) {
        exit("Digits string is empty.");
    } else {
        $sum = array_sum(str_split($digits));
        $count = strlen($digits);
        $_SESSION["average"] = $sum / $count;
        $average = $_SESSION["average"];
        echo "The average is: $average";
    }
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $filename = $_GET["filename"];
    if (!empty($filename)) {
        $file = fopen("$filename.txt", "w");
        $avg = $_SESSION["average"];
        fwrite($file, "The average is: $avg");
        fclose($file);
        //exit("The average has been written to the file: $filename");
        // header("Location: index.php");
        // exit();
  }
session_destroy();
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File</title>
    <script>
      function validateFilename() {
        var filename = document.forms["saveForm"]["filename"].value;
        if (filename === "") {
          alert("Please enter a file name.");
          return false;
        }
        return true;
      }
    </script>
  </head>
  <body>
    <form
      name="saveForm"
      action="avg.php"
      onsubmit="return validateFilename()"
      method="get"
    >
      <label>Enter file name:</label>
      <input
        type="text"
        id="filename"
        name="filename"
      /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>