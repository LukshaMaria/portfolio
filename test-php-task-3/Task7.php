<?php

namespace src;

use Exception;

class Task7
{
    public function main(array $arr, int $n): array
    {
        unset($arr[$n]);

        return array_values($arr);
    }
}

$arr = [2, 8, 9, 5, 2];
$n = 1;

if ($n > 0 && count($arr) != 0 && count($arr) - 1 > $n) {
    $object = new Task7;
    var_dump($object->main($arr, $n));
} else {
    throw new  Exception('Incorrect Input Data');
}
