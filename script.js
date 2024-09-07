const locations = [
    "Парк аттракционов",
    "Супермаркет",
    "Кафе",
    "Библиотека",
    "Школа",
    "Больница",
    "Спортзал",
    "Ресторан",
    "Кинотеатр",
    "Торговый центр",
    "Пляж",
    "Парк",
    "Стадион",
    "Зоопарк",
    "Автовокзал",
    "Аэропорт",
    "Площадь",
    "Фестиваль",
    "Концертный зал",
    "Церковь",
    "Мечеть",
    "Ночной клуб",
    "Пивной бар",
    "Парк культуры",
    "Сад",
    "Фитнес-центр",
    "Картинг",
    "Боулинг",
    "Ледовый дворец",
    "Аквапарк",
    "Салон красоты",
    "Аптека",
    "Мастерская",
    "Гараж",
    "Офис",
    "Галерея",
    "Антикафе",
    "Винодельня",
    "Ферма",
    "Питомник",
    "Кемпинг",
    "Лес",
    "Горы",
    "Река",
    "Озеро",
    "Водопад",
    "Парк для собак",
    "Пейнтбольный клуб",
    "Скалодром",
    "Теннисный корт",
    "Гольф-клуб",
    "Спортивный комплекс",
    "Площадка для мини-гольфа",
    "Танцевальная студия",
    "Театр",
    "Уличный рынок",
    "Ярмарка",
    "Выставка",
    "Мастерская по рукоделию",
    "Кулинарный фестиваль",
    "Фотостудия",
    "Ботанический сад",
    "Парк приключений",
    "Парк динозавров",
    "Парк скульптур",
    "Площадка для уличных артистов",
    "Площадка для косплея",
    "Площадка для уличной еды",
    "Кулинарная школа",
    "Спортивная площадка",
    "Картинная галерея",
    "Музей науки",
    "Музей искусства",
    "Музей техники",
    "Музей природы",
    "Музей автомобилей",
    "Музей космонавтики",
    "Музей истории",
    "Музей детства",
    "Музей шоколада",
    "Музей вина",
    "Музей спорта",
    "Музей музыки",
    "Музей кино",
    "Музей фотографии",
    "Музей экологии",
    "Музей истории города",
    "Музей истории семьи",
    "Музей современного искусства"
];
const giveLocation = function() {
    const randomIndex = Math.floor(Math.random() * locations.length);
    return locations[randomIndex];
}
const this_location = giveLocation()
function goToPage() {
    const alertBox_max = document.getElementById('alert_max');
    const alertBox_min = document.getElementById('alert_min');
    const alertBox_none = document.getElementById('alert_none');
    const counter_player = parseInt(document.getElementById("count_player").value)
    if (counter_player>2 && counter_player<17) {
    localStorage.setItem("labelText", this_location);
    localStorage.setItem("counter", counter_player);
    window.location.href = 'gameScreen.html';
    } else if (counter_player < 3) {
        alertBox_min.classList.remove('hidden', 'fade-out');
            alertBox_min.classList.add('fade-in');

            setTimeout(() => {
                alertBox_min.classList.remove('fade-in');
                alertBox_min.classList.add('fade-out');
            }, 3000); // Скрыть уведомление через 3 секунды

            setTimeout(() => {
                alertBox_min.classList.add('hidden');
            }, 3500); // Скрыть элемент после анимации
    } else if (counter_player > 16) {
        alertBox_max.classList.remove('hidden', 'fade-out');
            alertBox_max.classList.add('fade-in');

            setTimeout(() => {
                alertBox_max.classList.remove('fade-in');
                alertBox_max.classList.add('fade-out');
            }, 3000); // Скрыть уведомление через 3 секунды

            setTimeout(() => {
                alertBox_max.classList.add('hidden');
            }, 3500);
    } else {
        alertBox_none.classList.remove('hidden', 'fade-out');
        alertBox_none.classList.add('fade-in');

        setTimeout(() => {
            alertBox_none.classList.remove('fade-in');
            alertBox_none.classList.add('fade-out');
        }, 3000); // Скрыть уведомление через 3 секунды

        setTimeout(() => {
            alertBox_none.classList.add('hidden');
        }, 3500);
    }
}
function waitForClick() {
    return new Promise(resolve => {
        document.addEventListener('click', function handler() {
            document.removeEventListener('click', handler);
            resolve();
        });
    });
}

async function runLoop() {
    const counter_player= parseInt(localStorage.getItem("counter"))
    mas_player= new Array(counter_player).fill(0)
    mas_player[Math.floor(Math.random() * counter_player)] = 1
    for (let i = 0; i < counter_player; i++) {
        document.getElementById("game_label").innerText="Ход следущего";
        await waitForClick();
        if (mas_player[i] === 0){
            document.getElementById("game_label").innerText=this_location;
        } else if (mas_player[i] === 1) {
            document.getElementById("game_label").innerText="Ты шпион";
        }
        await waitForClick();
        
    }
    document.getElementById("game_label").innerText="Игра окончена";
}
const input_start = document.getElementById('count_player');
const button = document.getElementById('start_button');

// Добавляем обработчик события нажатия клавиш
input_start.addEventListener('keypress', function(event) {
    // Проверяем, была ли нажата клавиша Enter
    if (event.key === 'Enter') {
        // Вызываем клик по кнопке
        button.click();
    }
});