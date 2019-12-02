<?php 
  // $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
  // $dotenv->load();
  // echo $_ENV['AOC_COOKIE']; 
  $file = fopen("1-input.txt", "r") or die("Unable to open file!");
  $input = fread($file,filesize("1-input.txt"));
  fclose($file);

  $data = explode("\n", $input);

  function calculateFuel($mass) {
    $fuel = floor($mass / 3) - 2;
    if ($fuel > 0) {
      return $fuel + calculateFuel($fuel);
    }
    return 0;
  }

  $total = array_reduce($data, function($carry, $item) {
    return $carry + calculateFuel($item);
  }, 0);
  
  print_r($total . "\n")
?>
