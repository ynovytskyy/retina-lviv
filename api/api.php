<?php
	header("Access-Control-Allow-Headers: *");
	header("Access-Control-Allow-Origin: https://www.retina-lviv.com");
	
	date_default_timezone_set("Europe/Kiev");
	error_reporting(E_ALL);
	ini_set('display_errors', '0');
	
	define("LIQPAY_PUBLIC_KEY", "i54342120268");
	define("LIQPAY_PRIVATE_KEY", "gk1Fxl4AD1NNgtqzqPVNnxD0Q1fFfr6hQrV1ImnU");
	define("GMAIL_LOGIN", "erebor@oculus.lviv.ua");
	define("GMAIL_PASS", "RqeXDankge");
	define("ADMIN_EMAIL", "retinalviv@gmail.com");
	define("YEAR", "2023");
	
	require(__DIR__ . "/vendor/autoload.php");
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	
	$prices = [
		'uk' => [
			'offline' => [
				strtotime("2023-05-21 00:00:00") => [ // before
					'doctor' => 3000,
					'intern' => 1500,
					'dinner' => 2000
				],
				strtotime("2023-06-21 00:00:00") => [ // before
					'doctor' => 3500,
					'intern' => 2000,
					'dinner' => 2500
				],
				strtotime("2024-01-01 00:00:00") => [ // before
					'doctor' => 4000,
					'intern' => 3000,
					'dinner' => 3000
				]
			],
			'online' => [
				'doctor' => 2000,
				'intern' => 1000
			]
		],
		'en' => [
			'offline' => [
				strtotime('2023-05-21 00:00:00') => [ // before
					'doctor' => 150,
					'intern' => 100,
					'dinner' => 70
				],
				strtotime('2023-06-21 00:00:00') => [ // before
					'doctor' => 200,
					'intern' => 150,
					'dinner' => 100
				],
				strtotime('2024-01-01 00:00:00') => [ // before
					'doctor' => 250,
					'intern' => 200,
					'dinner' => 130
				]
			],
			'online' => [
				'doctor' => 100,
				'intern' => 70
			]
		]
	];
	
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
					. ($degree === "doctor" ? "Лікар" : "Член УВРТ або інтерн")
					. (($dinner && !$online) ? " + вечеря" : "")
					. ($online ? " ONLINE" : "");

				$currency = "UAH";
				$language = "uk";
			}
			else {
				$description = "Retina " . YEAR . ": "
					. $name . " (" . $email . "): "
					. ($degree === "doctor" ? "Doctor" : "Resident")
					. (($dinner && !$online) ? " + dinner" : "")
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
					$message = buildConfirmationEmailHtml("uk");
					$subject = "Реєстрація на конференцію Retina Lviv " . YEAR;
				}
				else {
					$message = buildConfirmationEmailHtml("en");
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
	
	function buildConfirmationEmailHtml($langKey) {
		$html = file_get_contents(__DIR__ . "/registration-confirmation.html");
		if ($langKey == "uk") {
			$html = str_replace("[langKey]", "uk", $html);
			$html = str_replace("[siteSubPath]", "", $html);
		}
		else {
			$html = str_replace("[langKey]", "en", $html);
			$html = str_replace("[siteSubPath]", "/en.html", $html);
		}
		return $html;
	}
	