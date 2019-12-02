<?php
require 'vendor/autoload.php';

Dotenv\Dotenv::createImmutable(__DIR__)->load();

$jar = GuzzleHttp\Cookie\CookieJar::fromArray(
  [
    'session' => $_ENV['AOC_COOKIE']
  ],
  'adventofcode.com'
);

$client = new \GuzzleHttp\Client();
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
