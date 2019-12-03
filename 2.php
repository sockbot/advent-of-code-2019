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
  "GET",
  "https://adventofcode.com/2019/day/2/input",
  ["cookies" => $jar]
);

$input = $response->getBody();

$data = explode(",", $input);

$instructions = $data;
// print_r($instructions);
function compute($opcode, $input1, $input2, $outputIndex)
{
  global $instructions;
  if ($opcode == 99) {
    return $instructions[0];
  } elseif ($opcode == 1) {
    $value = $instructions[$input1] + $instructions[$input2];
  } elseif ($opcode == 2) {
    $value = $instructions[$input1] * $instructions[$input2];
  }
  $instructions[$outputIndex] = $value;
  return -1;
}

$instructions = $data;
$instructions[1] = 12;
$instructions[2] = 2;
for ($i = 0; $i < count($instructions); $i += 4) {
  compute(
    $instructions[$i],
    $instructions[$i + 1],
    $instructions[$i + 2],
    $instructions[$i + 3]
  );
}
print "Part one answer: " . $instructions[0] . "\n";

$instructions = $data;
for ($noun = 0; $noun < 100; $noun++) {
  for ($verb = 0; $verb < 100; $verb++) {
    $instructions[1] = $noun;
    $instructions[2] = $verb;
    for ($i = 0; $i < count($instructions); $i += 4) {
      compute(
        $instructions[$i],
        $instructions[$i + 1],
        $instructions[$i + 2],
        $instructions[$i + 3]
      );
      if ($answer == 19690720) {
        echo "Hello world";
        print "Part two answer: " . 100 * $noun + $verb . "\n";
      }
    }
    $instructions = $data;
  }
}

?>
