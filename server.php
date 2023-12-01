<? php
$xmlData = file_get_contents('php://input');
$xml = simplexml_load_string($xmlData);

// Simulate server-side processing (e.g., adding a new book)
$newBook = $xml->addChild('book');
$newBook->addChild('title', 'New Book Title');
$newBook->addChild('author', 'New Author');
$newBook->addChild('price', '25.00');

// Send the updated XML data back to the client
header('Content-Type: text/xml');
echo $xml->asXML();
?>
