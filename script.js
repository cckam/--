let locations = [
  'Almrausch',
  'Mezzanin',
  'Röders',
  'Le Jardin',
  'Dietrich',
  'Apres Schi H&uuml;tten',
  'Remembar',
  ''
]

let locationQualifiers = [
  'ab 1000 Personen',
  'mit schlechter Musik',
  'ohne Sitzplatz',
  'unter 10000 Personen',
  'mit schlechter L&uuml;ftung',
  'nach 4 Uhr',
  'im Vollrausch',
  'mit schlechter Laune',
  ''
]

let measures = [
  'Maskenpflicht',
  '3G-Kontrollen',
  'Freiwilliges 2.5G',
  '1G',
  'Social-Distancing',
  'FFP2-Maskenpflicht',
  'Impfpflicht',
  'alle 10 Minuten impfen'
]

let forWho = [
  'Alle',
  'Tamara',
  'Benji',
  'Bernd',
  'Alex',
  'Marco',
  'Tomi',
  'Nina',
  'Juli',
  'Moscow Mule Trinker',
  'Mario',
  'Fred',
  'Johannes',
  'Thomas'

]

let forWhoQualifiers = [
  'mit Schiausr&uuml;stung',
  'mit Rad',
  'ohne Hund',
  'mit PhD'
]

let sentence = `${ r(measures)} für
                <b>${ r(locations) } ${ r(locationQualifiers) }</b>
                f&uuml;r
                ${ r(forWho) }`;

if (Math.random() < 0.3) {
  sentence += ' ' + r(forWhoQualifiers);
}

sentence += '.';


document.querySelector('h1').innerHTML = sentence;


function r(array) {
  return array[Math.floor(Math.random() * array.length)];
}
