<?php
// declare(strict_types=1);

final class Day4
{
  private $rangeStart = 231832;
  private $rangeEnd = 767346;
  private $count = 0;

  public static function hasDouble(integer $num)
  {
    $digits = str_split($num);
    foreach ($digits as &$digit) {
      $digit = (int) $digit;
    }

    for ($i = 1; $i < count($digits); $i++) {
      // echo gettype($digits[$i]);
      $curr = $digits[$i];
      $prev = $digits[$i - 1];
      if ($curr == $prev) {
        // echo $curr . ' ' . $prev;
        return true;
      }
    }
    return false;
  }
}
?>
