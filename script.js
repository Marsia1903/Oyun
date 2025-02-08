let selectedCity = null;
let cities = {
    city1: {
        name: 'Şehir 1',
        armyCount: 0,
        hasFortification: false
    },
    city2: {
        name: 'Şehir 2',
        armyCount: 0,
        hasFortification: false
    },
    city3: {
        name: 'Şehir 3',
        armyCount: 0,
        hasFortification: false
    }
};

function selectCity(cityId) {
    selectedCity = cityId;
    document.getElementById('city-name').innerText = `Seçilen Şehir: ${cities[cityId].name}`;
    document.getElementById('army-count').innerText = `Ordu Sayısı: ${cities[cityId].armyCount}`;
    document.getElementById('fortification-status').innerText = `Tahkimat Durumu: ${cities[cityId].hasFortification ? 'Var' : 'Yok'}`;
}

function produceArmy() {
    if (selectedCity) {
        cities[selectedCity].armyCount += 10; // Her şehirde 10 ordu üretir
        updateCityInfo();
    }
}

function buildFortification() {
    if (selectedCity && !cities[selectedCity].hasFortification) {
        cities[selectedCity].hasFortification = true;
        updateCityInfo();
    }
}

function moveArmy() {
    if (selectedCity && cities[selectedCity].armyCount > 0) {
        let targetCity = prompt('Hangi şehire ordu göndermek istersiniz? (city1, city2, city3)');
        if (cities[targetCity]) {
            cities[selectedCity].armyCount -= 5; // 5 ordu taşınacak
            cities[targetCity].armyCount += 5;
            updateCityInfo();
        }
    }
}

function nextTurn() {
    // Yeni turda her şehirde ordu üretimi yapılacak
    for (let city in cities) {
        cities[city].armyCount += 5;
    }
    alert('Yeni tura geçildi!');
    updateCityInfo();
}

function updateCityInfo() {
    if (selectedCity) {
        document.getElementById('army-count').innerText = `Ordu Sayısı: ${cities[selectedCity].armyCount}`;
        document.getElementById('fortification-status').innerText = `Tahkimat Durumu: ${cities[selectedCity].hasFortification ? 'Var' : 'Yok'}`;
    }
}
