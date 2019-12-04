<?php
declare(strict_types=1);

require 'Day4.php';

use PHPUnit\Framework\TestCase;

final class Day4Test extends TestCase
{
  public function testReturnsTrueIfItHasADoubleInteger(): void
  {
    $this->assertEquals(true, Day4::hasDouble(111111));
  }
  
  public function testReturnsFalseIfItDoesntHaveADoubleInteger(): void
  {
    $this->assertEquals(false, Day4::hasDouble(123789));
  }
}
?>
