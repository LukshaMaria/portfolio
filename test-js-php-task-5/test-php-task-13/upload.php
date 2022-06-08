<?php

class Task13
{
    public function main()
    {
        $directoryLogName = $_SERVER['DOCUMENT_ROOT'] . '/logs';

        if (!is_dir($directoryLogName)) {
            mkdir($directoryLogName, 0700);
        }

        $fileLogs = fopen('logs/data.txt', 'w');

        if (isset($_POST['submit'])) {
            if (isset($_FILES['upload']['tmp_name'])) {
                if (!is_executable($_FILES['upload']['tmp_name'])) {
                    if ($_FILES['upload']['size'] <= disk_free_space('/')) {
                        $uploadFile = $_FILES['upload'];
                        $directoryName = $_SERVER['DOCUMENT_ROOT'] . '/upload';

                        if (!is_dir($directoryName)) {
                            mkdir($directoryName, 0700);
                        }

                        $newFileName = 'upload/' . $uploadFile['name'];

                        if (!move_uploaded_file($uploadFile['tmp_name'], $newFileName)) {
                            echo 'File did not save!';
                        } else {
                            fwrite($fileLogs, "File uploaded \r");
                            echo '<h3> File information: </h3>';
                            echo '<ul>';
                            echo '<li><span>File Name:</span> ' . $uploadFile['name'] . '</li>';
                            echo '<li><span>File Size:</span> ' . round($uploadFile['size'] / 1024) . ' Кб</li>';
                            echo '<li><span>MIME-type:</span> ' . $uploadFile['type'] . '</li>';
                            echo '</ul>';
                        }
                    } else {
                        fwrite($fileLogs, "Error: There is not enough space on the server \r");
                    }
                } else {
                    fwrite($fileLogs, "Error: Executable file \r");
                }
            }

            fwrite($fileLogs, 'Date: ' . date('l jS \of F Y h:i:s A') . "\r");
            fwrite($fileLogs, 'Size: ' . $_FILES['upload']['size'] . "\r");
        } else {
            fwrite($fileLogs, "Error: Incorrect file \r");
        }

        fclose($fileLogs);
    }
}

$object = new Task13;
$object->main();
