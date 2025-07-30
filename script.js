const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");

const startDate = new Date("2025-07-12");
const today = new Date();
const timeDiff = today - startDate;
const daysElapsed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
let currentDay = Math.min(daysElapsed + 1, 50);

// Récupérer les jours ouverts depuis localStorage (tableau de nombres)
let openedDays = JSON.parse(localStorage.getItem("openedDays")) || [];


const phrases = [
    { img: "Images/jour1.jpg", text: "Une photo vieesque par jour pour patienter jusqu'à mon retour !" },
    { img: "Images/jour2.jpg", text: "49 jours avant de se bisouiller" },
    { img: "Images/jour3.jpg", text: "On va pouvoir faire plein d'activités à 2 comme au futuroscope" },
    { img: "Images/jour4.jpg", text: "Des mini vies" },
    { img: "Images/jour5.jpg", text: "J'ai hâte qu'on aille en boite ensemble !" },
    { img: "Images/jour6.jpg", text: "Toujours à portée de torse" },
    { img: "Images/jour7.jpg", text: "Vivement qu'on reparte en expédition (avec des plus petits sacs)" },
    { img: "Images/jour8.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour9.jpg", text: "Un joli couple quand même" },
    { img: "Images/jour10.jpg", text: "Je me sens agressé par tes bisous" },
    { img: "Images/jour11.jpg", text: "Une tarte de vie" },
    { img: "Images/jour12.jpg", text: "Muy caliente" },
    { img: "Images/jour13.jpg", text: "Il y a deux ans" },
    { img: "Images/jour14.jpg", text: "Complètement bourrés" },
    { img: "Images/jour15.jpg", text: "Deux vies écossaises" },
    { img: "Images/jour16.jpg", text: "Quand marino prend une photo..." },
    { img: "Images/jour17.jpg", text: "C'était cool ce petit week-end à la mer" },
    { img: "Images/jour18.jpg", text: "Mes joues s'impatientent" },
    { img: "Images/jour19.jpg", text: "Sous orgasme" },
    { img: "Images/jour20.jpg", text: "Des vies toutes souriantes" },
    { img: "Images/jour21.jpg", text: "Les beaux gosses" },
    { img: "Images/jour22.jpg", text: "Prêts à se galoche en boite" },
    { img: "Images/jour23.jpg", text: "Tu m'admires" },
    { img: "Images/jour24.jpg", text: "Vieeeeeeeee" },
    { img: "Images/jour25.jpg", text: "Des vrais randonneurs" },
    { img: "Images/jour26.jpg", text: "J'ai envie de te caliner" },
    { img: "Images/jour27.jpg", text: "Avec le beauf" },
    { img: "Images/jour28.jpg", text: "Marino photographe partie 2" },
    { img: "Images/jour29.jpg", text: "La mignonnerie incarnée" },
    { img: "Images/jour30.jpg", text: "J'ai hâte de retrouver cette bouche" },
    { img: "Images/jour31.jpg", text: "Ce voyage aux shetlands était trop bien" },
    { img: "Images/jour32.jpg", text: "Notre mariage" },
    { img: "Images/jour33.jpg", text: "Une beauté avec ses nouvelles lunettes" },
    { img: "Images/jour34.jpg", text: "Mon mini doigt" },
    { img: "Images/jour35.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour36.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour37.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour38.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour39.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour40.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour41.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour42.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour43.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour44.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour45.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour46.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour47.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour48.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour49.jpg", text: "Une grosse marmotte" },
    { img: "Images/jour50.jpg", text: "Une grosse marmotte" },
];

for (let i = 1; i <= 50; i++) {
    const div = document.createElement("div");
    div.classList.add("case");

    const data = phrases[i - 1] || { img: "https://via.placeholder.com/150", text: `Contenu du jour ${i}` };

    if (openedDays.includes(i)) {
        div.classList.add("opened");
        div.innerHTML = `<img src="${data.img}" alt="Jour ${i}"><div class="case-text">${i}</div>`;
    } else if (i <= currentDay) {
        div.innerHTML = `<div class="case-text">${i}</div>`;
    } else {
        div.classList.add("locked");
        div.innerHTML = `<div class="case-text">${i}</div>`;
    }

    div.dataset.day = i;
    div.addEventListener("click", () => openCase(div, i));
    grid.appendChild(div);
}

function openCase(div, day) {
    if (day > currentDay) return;

    const data = phrases[day - 1] || { img: "https://via.placeholder.com/150", text: `Contenu du jour ${day}` };

    modalImg.src = data.img;
    modalText.textContent = data.text;
    modal.style.display = "flex";

    if (!openedDays.includes(day)) {
        openedDays.push(day);
        localStorage.setItem("openedDays", JSON.stringify(openedDays));
        div.classList.add("opened");
        div.innerHTML = `<img src="${data.img}" alt="Jour ${day}"><div class="case-text">${day}</div>`;
    }
}

function closeModal() {
    modal.style.display = "none";
}

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
