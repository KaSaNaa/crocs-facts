const facts = [
    "Crocodylus niloticus: Commonly known as the Nile Crocodile, it can grow up to 28 feet (6 meters) long and has a lifespan of 70-108 years.",
    "Crocodylus porosus: Known as the Saltwater Crocodile, it is the largest living reptile, capable of reaching lengths of up to 23 feet (7 meters).",
    "Crocodylus acutus: The American Crocodile can be found in coastal areas and brackish waters, and it is less aggressive than other species.",
    "Crocodylus johnstoni: The Freshwater Crocodile is generally shy and less aggressive, primarily found in freshwater rivers and lakes in Northern Australia.",
    "Crocodiles are oviparous, meaning they lay eggs, and their geographic distribution includes tropical and subtropical regions worldwide.",
    "Crocodiles can live for 50-70 years in the wild, with some species reaching up to 160 years in captivity.",
    "Crocodiles are ambush predators, often remaining motionless in water until they strike.",
    "The conservation status of crocodile species varies, with some being classified as endangered."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = facts[randomIndex];
});
