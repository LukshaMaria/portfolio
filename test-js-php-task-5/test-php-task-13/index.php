<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Upload File</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="form-file-upload">
        <form method="POST" enctype="multipart/form-data">
            <input name="upload" id="uploadFile" class="uploadFile" type="file">
            <br>
            <input name="submit" id="submitFile" class="submitFile" type="submit" value="Submit">
        </form>
    </div>


    <script>
        jQuery('#uploadFile').change(function() {
            if (!validateSize(this, 200)) {
                alert("The file size exceeds 200 Kb!");
                this.value = "";
            }
            if (!validateException(this)) {
                alert("Incorrect file extension!");
                this.value = "";
            }
        });
    </script>

    <?php include 'upload.php'; ?>
</body>

</html>
