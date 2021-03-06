<?php
	date_default_timezone_set("Europe/Kiev");
	error_reporting(E_ALL);
	ini_set('display_errors', '0');
	
	require(__DIR__ . "/config.php");
	require(__DIR__ . "/vendor/autoload.php");
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	
	$prices = [
		'uk' => [
			'offline' => [
				strtotime("2021-04-01 00:00:00") => [ // before
					'doctor' => 1800,
					'intern' => 1000,
					'dinner' => 800
				],
				strtotime("2021-05-16 00:00:00") => [ // before
					'doctor' => 2100,
					'intern' => 1200,
					'dinner' => 1000
				],
				strtotime("2022-01-01 00:00:00") => [ // before
					'doctor' => 2500,
					'intern' => 1400,
					'dinner' => 1200
				]
			],
			'online' => [
				'doctor' => 1400,
				'intern' => 700
			]
		],
		'en' => [
			'offline' => [
				strtotime('2021-04-01 00:00:00') => [ // before
					'doctor' => 70,
					'intern' => 50,
					'dinner' => 40
				],
				strtotime('2021-05-16 00:00:00') => [ // before
					'doctor' => 80,
					'intern' => 60,
					'dinner' => 50
				],
				strtotime('2022-01-01 00:00:00') => [ // before
					'doctor' => 90,
					'intern' => 70,
					'dinner' => 60
				]
			],
			'online' => [
				'doctor' => 70,
				'intern' => 35
			]
		]
	];
	
	header("Access-Control-Allow-Origin: http://0.0.0.0:1313");
	
	$now = time();
	
	if (!isset($_REQUEST['type'])) {
		printError("wrong type");
	}
	
	$type = $_REQUEST['type'];
	switch ($type) {
		case "pay":
			if (!isset($_REQUEST['name'])) printError("missing name");
			$name = addslashes(stripslashes($_REQUEST['name']));
			if (!isset($_REQUEST['email'])) printError("missing email");
			$email = addslashes(stripslashes($_REQUEST['email']));
			if (!isset($_REQUEST['degree'])) printError("missing degree");
			$degree = addslashes(stripslashes($_REQUEST['degree']));
			if (!isset($_REQUEST['dinner'])) printError("missing dinner");
			$dinner = addslashes(stripslashes($_REQUEST['dinner']));
			if (!isset($_REQUEST['online'])) printError("missing online");
			$online = addslashes(stripslashes($_REQUEST['online']));
			if (!isset($_REQUEST['lang'])) printError("missing lang");
			$lang = addslashes(stripslashes($_REQUEST['lang']));
			$dinner = ($dinner === "true");
			$online = ($online === "true");
			
			if (!isset($prices[$lang])) {
				printError("wrong lang");
			}
			$price = $prices[$lang];
			$amount = 0;
			if ($online) {
				$price = $price['online'];
				if (!isset($price[$degree])) {
					printError("wrong degree");
				}
				$amount = $price[$degree];
			}
			else {
				$price = $price['offline'];
				foreach ($price as $timeThreshold => $timePrice) {
					if ($now < $timeThreshold) {
						$price = $timePrice;
						break;
					}
				}
				if (!isset($price[$degree])) {
					printError("wrong degree");
				}
				$amount = $price[$degree];
				if ($dinner) {
					$amount += $price['dinner'];
				}
			}
			
			if ($lang === "uk") {
				$description = "Retina " . YEAR . ": "
					. $name . " (" . $email . "): "
					. ($degree === "doctor" ? "Лікар" : "Інтерн")
					. (($dinner && !$online) ? " + фуршет" : "")
					. ($online ? " ONLINE" : "");

				$currency = "UAH";
				$language = "uk";
			}
			else {
				$description = "Retina " . YEAR . ": "
					. $name . " (" . $email . "): "
					. ($degree === "doctor" ? "Doctor" : "Intern")
					. (($dinner && !$online) ? " + gala dinner" : "")
					. ($online ? " ONLINE" : "");

				$currency = "EUR";
				$language = "en";
			}

			$params = [
				"version" => "3",
				"public_key" => LIQPAY_PUBLIC_KEY,
				"action" => "pay",
				"amount" => $amount,
				"currency" => $currency,
				"description" => $description,
				"order_id" => time(),
				"language" => $language
			];
			
			$base64encoded = base64_encode(json_encode($params));
			$signed = LIQPAY_PRIVATE_KEY . $base64encoded . LIQPAY_PRIVATE_KEY;
			$sha1 = sha1($signed, 1);
			$signature = base64_encode($sha1);
			
			header("Content-Type: application/json");
			echo json_encode([
				'data' => $base64encoded,
				'signature' => $signature
			]);
			break;
		case "register":
			if (!isset($_REQUEST['status'])) printError("missing status");
			$status = addslashes(stripslashes($_REQUEST['status']));
			if (!isset($_REQUEST['name'])) printError("missing name");
			$name = addslashes(stripslashes($_REQUEST['name']));
			if (!isset($_REQUEST['email'])) printError("missing email");
			$email = addslashes(stripslashes($_REQUEST['email']));
			if (!isset($_REQUEST['degree'])) printError("missing degree");
			$degree = addslashes(stripslashes($_REQUEST['degree']));
			if (!isset($_REQUEST['dinner'])) printError("missing dinner");
			$dinner = addslashes(stripslashes($_REQUEST['dinner']));
			if (!isset($_REQUEST['online'])) printError("missing online");
			$online = addslashes(stripslashes($_REQUEST['online']));
			if (!isset($_REQUEST['country'])) printError("missing country");
			$country = addslashes(stripslashes($_REQUEST['country']));
			if (!isset($_REQUEST['city'])) printError("missing city");
			$city = addslashes(stripslashes($_REQUEST['city']));
			if (!isset($_REQUEST['phone'])) printError("missing phone");
			$phone = addslashes(stripslashes($_REQUEST['phone']));
			if (!isset($_REQUEST['message'])) printError("missing message");
			$userMessage = addslashes(stripslashes($_REQUEST['message']));
			if (!isset($_REQUEST['lang'])) printError("missing lang");
			$lang = addslashes(stripslashes($_REQUEST['lang']));
			
			// Send technical email to the Retina admin
			$subject = "Retina registration";
			$message =	"status: {$status}<br />" .
						"name: {$name}<br />" .
						"email: {$email}<br />" .
						"degree: {$degree}<br />" .
						"dinner: {$dinner}<br />" .
						"online: {$online}<br />" .
						"country: {$country}<br />" .
						"city: {$city}<br />" .
						"phone: {$phone}<br />" .
						"message: {$userMessage}<br />" .
						"lang: {$lang}<br />";
			
			$mail = new PHPMailer();
			$mail->IsSMTP();
			$mail->CharSet    = 'UTF-8';
			$mail->Mailer     = "smtp";
			$mail->SMTPAuth   = TRUE;
			$mail->SMTPSecure = "tls";
			$mail->Port       = 587;
			$mail->Host       = "smtp.gmail.com";
			$mail->Username   = GMAIL_LOGIN;
			$mail->Password   = GMAIL_PASS;
			$mail->Subject    = $subject;
			$mail->IsHTML(true);
			$mail->AddAddress(ADMIN_EMAIL);
			$mail->SetFrom(GMAIL_LOGIN, "Retina");
			$mail->MsgHTML($message); 
			if(!$mail->Send()) {
				error_log("Error while sending Email");
				error_log(json_encode($mail));
			}
			else {
				error_log("Email sent successfully");
			}
			
			// Send confirmation email to the client
			if ($status != "error") {
				if ($lang === "uk") {
					$message = "Вітаємо! Ви успішно зареєструвалися на конференцію Retina Lviv " . YEAR;
					$subject = "Реєстрація на конференцію Retina Lviv " . YEAR;
				}
				else {
					$message = "Congratulations! You have successfully registered for Retina Lviv " . YEAR;
					$subject = "Registration for Retina Lviv " . YEAR;
				}
				$mail2 = new PHPMailer();
				$mail2->IsSMTP();
				$mail2->CharSet    = 'UTF-8';
				$mail2->Mailer     = "smtp";
				$mail2->SMTPAuth   = TRUE;
				$mail2->SMTPSecure = "tls";
				$mail2->Port       = 587;
				$mail2->Host       = "smtp.gmail.com";
				$mail2->Username   = GMAIL_LOGIN;
				$mail2->Password   = GMAIL_PASS;
				$mail2->Subject    = $subject;
				$mail2->IsHTML(true);
				$mail2->AddAddress($email);
				$mail2->SetFrom(GMAIL_LOGIN, "Retina");
				$mail2->MsgHTML($message); 
				if(!$mail2->Send()) {
					error_log("Error while sending Email");
					error_log(json_encode($mail2));
					echo "Error while sending Email\n";
					echo json_encode($mail2);
				}
				else {
					error_log("Email sent successfully");
				}
			}
			
			echo "OK\n";
			break;
	}
	
	function printError($message) {
		header("Content-Type: application/json");
		echo "{'error': '" . $message . "'}";
		die();
	}