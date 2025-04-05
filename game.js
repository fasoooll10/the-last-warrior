// مجرد أمثلة على شكل البيانات, يمكنك تعبئتها بالتفاصيل
const allCharacters = [
  // مثال: { name: "ملك الشمال", tribe: "الشمال", diceCount: 2, hearts: 3 },
  // أضف مزيدًا من الشخصيات حسب حاجتك
];

const helpCards = [
  // مثال: { name: "تبديل أوراقي بأوراق خصمي", type: "قبل النزول" },
  // أضف بقية كروت المساعدة هنا
];

// بيانات اللاعبين
let players = [];
let currentPlayerIndex = 0;

// دوال إظهار/إخفاء شاشات
function showElement(id) {
  document.getElementById(id).classList.remove("hidden");
}
function hideElement(id) {
  document.getElementById(id).classList.add("hidden");
}

// بدء اللعبة: اختيار عدد اللاعبين
document.getElementById("startGameBtn").addEventListener("click", () => {
  const count = document.getElementById("playerCount").value;
  initPlayers(count);
  hideElement("home-screen");
  showElement("setup-screen");
});

// تهيئة بيانات اللاعبين
function initPlayers(playerCount) {
  players = [];
  for (let i = 0; i < playerCount; i++) {
    players.push({
      id: i,
      name: لاعب ${i + 1},
      tribe: null, // ستحدد لاحقًا إذا استخدمت نظام القبائل
      characterCards: [],
      helpCards: [],
      score: 0,
    });
  }
  // هنا ممكن توزع الكروت عشوائيًا من allCharacters و helpCards
  // مثلاً: players[0].characterCards = [some chars...]
}

// زر الذهاب لساحة اللعب
document.getElementById("goToBoardBtn").addEventListener("click", () => {
  hideElement("setup-screen");
  showElement("game-board");
  renderPlayersArea();
});

// عرض اللاعبين وكروتهم (بشكل مبسط)
function renderPlayersArea() {
  const area = document.getElementById("playersArea");
  area.innerHTML = "";
  players.forEach((player) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${player.name}</h3>
      <p>عدد كروت الشخصيات: ${player.characterCards.length}</p>
      <p>عدد كروت المساعدة: ${player.helpCards.length}</p>
      <p>النقاط: ${player.score}</p>
    `;
    area.appendChild(div);
  });
}

// زر رمي النرد
document.getElementById("rollDiceBtn").addEventListener("click", () => {
  const diceResult = rollDice(1); // مثال: رمي نرد واحد
  logMessage(نتيجة النرد: ${diceResult});
  // هنا منطق الهجوم / الدفاع ...
});

// دالة رمي النرد (يمكنك تطويرها لدعم نردين)
function rollDice(diceCount) {
  let sum = 0;
  for (let i = 0; i < diceCount; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  return sum;
}

// مثال لاستخدام كرت مساعدة
document.getElementById("useHelpCardBtn").addEventListener("click", () => {
  logMessage("تم استخدام كرت مساعدة (مثال)!");
  // أضف هنا المنطق المطلوب لكرت المساعدة...
});

// إضافة رسالة لسجل الأحداث (log)
function logMessage(msg) {
  const logDiv = document.getElementById("gameLog");
  const p = document.createElement("p");
  p.textContent = msg;
  logDiv.appendChild(p);
}
