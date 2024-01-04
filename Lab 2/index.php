<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Average Calculator</title>
    <script>
      function validateForm() {
        let digits = document.forms["avgForm"]["digits"].value;
        if (digits === "") {
          alert("Please enter a string of digits.");
          return false;
        }
        return true;
      }
    </script>
  </head>
  <body>
    <h2>Average Calculator</h2>

    <form
      name="avgForm"
      action="avg.php"
      onsubmit="return validateForm()"
      method="post"
    >
      <label for="digits">Enter digits:</label>
      <input
        type="text"
        id="digits"
        name="digits"
        pattern="[0-9]+"
        title="Only non-negative integers allowed."
      /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
