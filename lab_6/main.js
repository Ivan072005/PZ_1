// Массив с URL для фонов
const backgrounds = [
    'url("https://i.gifer.com/2dvH.gif")',
    'url("https://i.gifer.com/1Nh.gif")'
  ];
  
  // Индекс текущего фона
  let currentBackgroundIndex = 0;
  
  // Функция смены фона
  function changeBackground() {
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length; // Переход к следующему фону
  }
  
  // Запуск смены фона каждые 2 секунды
  setInterval(changeBackground, 2000);
  
  // Массив с URL анимированных GIF спрайтов покемонов
  const pokemonSprites = [
    'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
  ];
  
  // Добавление покемона
  document.getElementById('spawnButton').addEventListener('click', function () {
    // Создаем новый элемент img
    const newPokemon = document.createElement('img');
  
    // Случайный выбор покемона
    const randomPokemon = pokemonSprites[Math.floor(Math.random() * pokemonSprites.length)];
  
    // Устанавливаем атрибуты и класс
    newPokemon.classList.add('pokemon');
    newPokemon.src = randomPokemon;
  
    // Добавляем покемона в область
    const pokemonArea = document.getElementById('pokemonArea');
    pokemonArea.appendChild(newPokemon);
  });
  