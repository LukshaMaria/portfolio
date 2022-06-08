<?php
$Hotels = simplexml_load_file('Hotels.xml');

$doc = new DOMDocument("1.0");
$doc->formatOutput = true;
$root = $doc->createElement("Hotels");
$root = $doc->appendChild($root);

foreach ($Hotels as $x) {
    if (
        strstr($x->Name, "Hilton") && strstr(strtolower($x->Address->State), strtolower('New York'))
        || strstr(strtolower($x->Address->State), strtolower('NY'))
    ) {
        $Hotel = $doc->createElement("Hotel");
        $Hotel = $root->appendChild($Hotel);

        $Name = $doc->createElement("Name");
        $Name = $Hotel->appendChild($Name);
        $text = $doc->createTextNode($x->Name);
        $text = $Name->appendChild($text);

        $Price = $doc->createElement("Price");
        $Price = $Hotel->appendChild($Price);
        $text = $doc->createTextNode($x["Price"]);
        $text = $Price->appendChild($text);

        $Address = $doc->createElement("Address");
        $Address = $Hotel->appendChild($Address);

        $AddressLine = $doc->createElement("AddressLine");
        $AddressLine = $Address->appendChild($AddressLine);
        $text = $doc->createTextNode($x->Address->AddressLine);
        $text = $AddressLine->appendChild($text);

        $City = $doc->createElement("City");
        $City = $Address->appendChild($City);
        $text = $doc->createTextNode($x->Address->City);
        $text = $City->appendChild($text);

        $Country  = $doc->createElement("Country");
        $Country = $Address->appendChild($Country);
        $text = $doc->createTextNode($x->Address->Country);
        $text = $Country->appendChild($text);

        $State  = $doc->createElement("State");
        $State = $Address->appendChild($State);
        $text = $doc->createTextNode($x->Address->State);
        $text =  $State->appendChild($text);
    }
}
if ($doc->save("Hotels_2.xml")) {
    echo "Information loaded into file";
}
