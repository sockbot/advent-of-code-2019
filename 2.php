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

function compute($opcode, $input1, $input2, $outputIndex)
{
  if ($opcode == 99) {
    return $instructions[0];
  } elseif ($opcode == 1) {
    $value = $instructions[$input1] + $instructions[$input2];
  } elseif ($opcode == 2) {
    $value = $instructions[$input1] * $instructions[$input2];
  }
  $instructions[$outputIndex] = $value;
}

for ($noun = 0; $noun < 100; $noun++) {
  for ($verb = 0; $verb < 100; $verb++) {
    $instructions[1] = $noun;
    $instructions[2] = $verb;
    for ($i = 0; $i < count($instructions); $i += 4) {
      $answer = compute(
        $instructions[$i],
        $instructions[$i + 1],
        $instructions[$i + 2],
        $instructions[$i + 3]
      );
      echo "Hello Universe";
      if ($answer == 19690720) {
        echo "Hello world";
        print 100 * $noun + $verb;
      }
    }
    $instructions = $data;
  }
}

// $instructions = [1, 0, 0, 3, 99];
// print_r($instructions);
// $instructions[1] = 12;
// // $instructions[2] = 2;
// for ($i = 0; $i < count($instructions); $i += 4) {
//   compute(
//     $instructions[$i],
//     $instructions[$i + 1],
//     $instructions[$i + 2],
//     $instructions[$i + 3]
//   );
// }
// print "Part one answer: " . $instructions[0] . "\n";

?>
