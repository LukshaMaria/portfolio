<?php

namespace src;

class Task10
{
    public function main(int $input): array
    {
        $arr = [];
        $arr[] = $input;

        while ($input != 1) {
            if ($input % 2 == 0) {
                $input /= 2;
            } else {
                $input = 3 * $input + 1;
            }
            $arr[] = $input;
        }

        return $arr;
    }
}

$input = 13;

$Object = new Task10;
var_dump($Object->main($input));
