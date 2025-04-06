const allCharacters = [
  "ملك الشمال", "وزير الشمال", "جنرال الشمال", "جندي الشمال",
  "ملك الجنوب", "وزير الجنوب", "جنرال الجنوب", "جندي الجنوب",
  "ملك الشرق", "وزير الشرق", "جنرال الشرق", "جندي الشرق",
  "ملك الغرب", "وزير الغرب", "جنرال الغرب", "جندي الغرب"
];

const helpCards = [
  "تبديل أوراقي بأوراق خصمي",
  "تبديل أوراق خصم بخصم آخر",
  "تبديل أوراقي بأوراق جديدة من السحب",
  "خصم نقطة من الخصم",
  "طرد من القبيلة",
  "الخيانة",
  "انضم معي",
  "زيادة نرد للجندي",
  "زيادة روح لأي شخصية (عدا الملك)",
  "الدرع",
  "الجوكر"
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomItems(arr, count) {
  return shuffle([...arr]).slice(0, count);
}

function startGame() {
  const playerCount = parseInt(document.getElementById("players").value);
  const gameArea = document.getElementById("gameArea");
  gameArea.innerHTML = "<h2>توزيع الكروت:</h2>";

  for (let i = 1; i <= playerCount; i++) {
    const charCards = getRandomItems(allCharacters, 5);
    const supportCards = getRandomItems(helpCards, 3);

    let playerDiv = document.createElement("div");
    playerDiv.className = "player-box";
    playerDiv.innerHTML = `
      <h3>اللاعب ${i}</h3>
      <p><strong>كروت الشخصيات:</strong> ${charCards.join("، ")}</p>
      <p><strong>كروت المساعدة:</strong> ${supportCards.join("، ")}</p>
    `;
    gameArea.appendChild(playerDiv);
  }

  gameArea.classList.remove("hidden");
}
