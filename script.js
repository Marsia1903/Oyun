let selectedCity = null;
let cities = {
    city1: {
        name: 'Şehir 1',
        armyCount: 0,
        hasFortification: false,
        enemyArmyCount: 5  // Düşman ordusu
    },
    city2: {
        name: 'Şehir 2',
        armyCount: 0,
        hasFortification: false,
        enemyArmyCount: 5  // Düşman ordusu
    },
    city3: {
        name: 'Şehir 3',
        armyCount: 0,
        hasFortification: false,
        enemyArmyCount: 5  // Düşman ordusu
    }
};

// Şehri Seçme
function selectCity(cityId) {
    selectedCity = cityId;
    document.getElementById('city-name').innerText = `Seçilen Şehir: ${cities[cityId].name}`;
    document.getElementById('army-count').innerText = `Ordu Sayısı: ${cities[cityId].armyCount}`;
    document.getElementById('fortification-status').innerText = `Tahkimat Durumu: ${cities[cityId].hasFortification ? 'Var' : 'Yok'}`;
}

// Ordu Üretme
function produceArmy() {
    if (selectedCity) {
        cities[selectedCity].armyCount += 10;
        updateCityInfo();
    }
}

// Tahkimat İnşa Etme
function buildFortification() {
    if (selectedCity && !cities[selectedCity].hasFortification) {
        cities[selectedCity].hasFortification = true;
        updateCityInfo();
    }
}

// Ordu Taşıma
function moveArmy() {
    if (selectedCity && cities[selectedCity].armyCount > 0) {
        let targetCity = prompt('Hangi şehire ordu göndermek istersiniz? (city1, city2, city3)');
        if (cities[targetCity]) {
            cities[selectedCity].armyCount -= 5;
            cities[targetCity].armyCount += 5;
            updateCityInfo();
        }
    }
}

// Yapay Zeka Düşmanı Hareket Ettirme
function enemyTurn() {
    // Her turda düşmanlar rastgele hareket eder
    for (let city in cities) {
        if (Math.random() < 0.5) { // %50 ihtimalle ordusunu artırır
            cities[city].enemyArmyCount += 5;
        } else {
            let targetCity = Object.keys(cities).filter(id => id !== city)[Math.floor(Math.random() * 2)];
            cities[city].enemyArmyCount -= 2; // 2 ordu taşı
            cities[targetCity].enemyArmyCount += 2;
        }
    }
}

// Sonraki Tur
function nextTurn() {
    for (let city in cities) {
        cities[city].armyCount += 5;
    }

    enemyTurn();  // Düşmanları hareket ettir
    alert('Yeni tura geçildi!');
    updateCityInfo();
}

// Şehir Bilgilerini Güncelle
function updateCityInfo() {
    if (selectedCity) {
        document.getElementById('army-count').innerText = `Ordu Sayısı: ${cities[selectedCity].armyCount}`;
        document.getElementById('fortification-status').innerText = `Tahkimat Durumu: ${cities[selectedCity].hasFortification ? 'Var' : 'Yok'}`;
    }
}
