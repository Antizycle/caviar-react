<?php
header("Access-Control-Allow-Origin: *");
$post_json = file_get_contents("php://input");
$catalog = json_decode(file_get_contents("./data/catalog.json"));
$giftboxes = json_decode(file_get_contents("./data/gift-data.json"));
$_POST = json_decode($post_json, true);

if (empty($_POST['clientName']) && empty($_POST['clientPhone'])) {
  echo json_encode(["sent" => false, "message" => "Имя и телефон не должны быть пустыми"]); 
}

if ($_POST) {

	$name = trim($_POST['clientName']);
	$phone = trim($_POST['clientPhone']);
	$type = trim($_POST['type']);
	$orderId = trim($_POST['id']);

	$name = preg_replace("/\s+/", ' ', $name);
	$phone = preg_replace("/\s+/", ' ', $phone);
	$orderId = preg_replace("/\s+/", ' ', $orderId);

	$nameOk = preg_match('/^[а-яёa-z- ]+$/iu', $name);
	$phoneOk = preg_match('/^(\+)?([- ()]?\d[- ()]?){6,14}?$/', $phone);

	$orderData = '';
	if ($type === 'catalog') {
		foreach ($catalog as $entry) {
			if ($entry->id === $orderId) {
			 $orderData = $entry;
			}
		}
	}
	if ($type === 'giftbox') {
		foreach ($giftboxes as $entry) {
			$subEntry = $entry->variantSmall;
      if ($subEntry->id === $orderId) {
        $orderData = $subEntry;
      } else {
      $subEntry = $entry->variantBig;
      if ($subEntry->id === $orderId) $orderData = $subEntry;
      }
     }
	}

	if ($nameOk === 1 && $phoneOk === 1 && $orderData) {
		$subject = "Заказ чёрной икры с сайта";
		$message = "Поступил новый заказ от клиента!\r\nЕго имя: " . $name . "\r\nТелефон: " . $phone . "\r\nЗаказ:\r\n" . $entry->name . ", цена: " . $entry->price . " ₽";

		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=UTF-8\r\n";
		$headers .= "From: antizycle@gmail.com";

		$mailSentFirst = mail('malfunctionn@gmail.com', $subject, $message, $headers);
		$mailSent = mail('antizycle@gmail.com', $subject, $message, $headers);
		if ($mailSent || $mailSentFirst) {
			http_response_code(200);
			echo json_encode(array("sent" => true));
		} else {
			http_response_code(503);
			echo json_encode(["sent" => false, "message" => "Unable to sent mail"]);
		}
	}
	else {
		echo json_encode(["sent" => false, "message" => "Your name or phone is incorrect"]);
	}
} else {
	echo json_encode(["sent" => false, "message" => "Your name or phone is incorrect"]);
}
?>