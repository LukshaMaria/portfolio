<?php

namespace src;

use Exception;

class Task3
{
    public function main(int $number): int
    {
        echo is_int($number);
        $count = 0;
        $sum = 0;

        while ($number != 0) {
            $sum += $number % 10;
            $number /= 10;
            $number = intval($number);
            ++$count;

            if ($number == 0 && $count >= 2) {
                $number = $sum;
                $sum = 0;
                $count = 0;
            }
        }

        return $sum;
    }
}

$number = 98205224;
if (is_int($number) && $number > 0) {
    $object = new Task3;
    echo $object->main($number);
} else {
    throw new  Exception('Incorrect Input Data');
}
