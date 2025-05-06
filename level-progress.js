// level-progress.js

function getNextLevelPath() {
    const match = window.location.pathname.match(/level(\d+)\.html/);
    if (!match) return null;
    const next = Number(match[1]) + 1;
    return `level${next}.html`;
  }
  
  function saveProgress() {
    const next = getNextLevelPath();
    if (next) localStorage.setItem('currentLevel', next);
  }
  
  function loadProgress() {
    const saved = localStorage.getItem('currentLevel');
    if (saved) window.location.href = saved;
  }
  
  function resetProgress() {
    localStorage.removeItem('currentLevel');
  }
  
  // можно вызывать saveProgress() при победе
  // можно вызывать loadProgress() при старте на главной
  // можно вызвать resetProgress() по кнопке
  