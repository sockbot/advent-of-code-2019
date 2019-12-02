<?php
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$client = new \GuzzleHttp\Client();
use GuzzleHttp\Cookie\CookieJar;
$jar = CookieJar::fromArray(
  [
    'session' => $_ENV['AOC_COOKIE']
  ],
  'adventofcode.com'
);
$response = $client->request(
  'GET',
  "https://adventofcode.com/2019/day/1/input",
  ['cookies' => $jar]
);

$input = $response->getBody();

$data = explode("\n", $input);

function calculateFuel($mass)
{
  $fuel = floor((int) $mass / 3) - 2;
  if ($fuel > 0) {
    return $fuel + calculateFuel($fuel);
  }
  return 0;
}

$total = array_reduce(
  $data,
  function ($carry, $item) {
    return $carry + calculateFuel($item);
  },
  0
);

print_r($total . "\n");
?>
