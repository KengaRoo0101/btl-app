const pillarData = {
  life: {
    kicker: "Grow Your Life",
    title: "Daily choices that make independence feel possible.",
    body:
      "Matcha, wellness routines, simple food systems, and sustainable swaps packaged for people who want a cleaner, more grounded daily rhythm.",
    points: [
      "Starter guides for sustainable habits",
      "Matcha and wellness product drops",
      "Short coaching videos for real-life routines",
    ],
  },
  home: {
    kicker: "Prepare Your Home",
    title: "Useful readiness without fear-based selling.",
    body:
      "Practical kits and education for water, power, first response, food basics, and systems people and pet owners can understand before they need them.",
    points: [
      "Home-ready survival and storm kits",
      "Simple checklists for first-time buyers",
      "Preparedness videos that stay calm and direct",
    ],
  },
  voice: {
    kicker: "Build Your Voice",
    title: "A social pillar for people building something real.",
    body:
      "Coaching, clips, page setup, and content systems for creators, local businesses, pet brands, founders, and people who need a stronger online presence.",
    points: [
      "Profile positioning and niche strategy",
      "Short-form content planning",
      "Coaching videos and live review sessions",
    ],
  },
  network: {
    kicker: "Join The Network",
    title: "Like-minded people tied together through real events.",
    body:
      "Webinars, hosts, guests, members, pet owners, and aligned communities help people get seen through useful conversations instead of empty follower promises.",
    points: [
      "Live creator and business webinars",
      "Featured audience exchange moments",
      "Guest-led sessions with media reach",
    ],
  },
};

const markets = [
  ["Local wellness studios", "Matcha, mobility, recovery, nutrition, and community events."],
  ["Home service pros", "Cleaners, landscapers, mobile detailers, repairs, and local trust pages."],
  ["Prepared living", "Storm kits, home readiness, water storage, and family checklists."],
  ["Barbers and beauty", "Before-and-after clips, creator collabs, and booking funnels."],
  ["Trade careers", "Electricians, HVAC, plumbing, welding, apprenticeships, and field stories."],
  ["Recovery and restart", "Life rebuild content, accountability groups, and practical coaching."],
  ["Small food brands", "Farmers markets, meal prep, pop-ups, drinks, and local drops."],
  ["Pet care and pet wellness", "Pet-ready homes, daily care, treats, travel, trusted products, and local services."],
  ["Fitness coaches", "Short challenges, testimonials, live sessions, and referral loops."],
  ["Tutors and youth programs", "Parent trust content, student wins, and local education pages."],
  ["Micro real estate", "Rental readiness, first-time buyers, local property education, and tours."],
  ["Senior support", "Care resources, home safety, family communication, and local providers."],
  ["Creator services", "Video editors, hosts, photographers, and social media operators."],
];

const tabs = document.querySelectorAll(".pillar-tab");
const panel = document.querySelector("#pillarPanel");
const marketList = document.querySelector("#marketList");
const shuffleButton = document.querySelector("#shuffleMarkets");
const form = document.querySelector(".join-form");
const formNote = document.querySelector("#formNote");

function renderPillar(key) {
  const pillar = pillarData[key];
  panel.innerHTML = `
    <p class="panel-kicker">${pillar.kicker}</p>
    <h3>${pillar.title}</h3>
    <p>${pillar.body}</p>
    <ul>${pillar.points.map((point) => `<li>${point}</li>`).join("")}</ul>
  `;
}

function renderMarkets() {
  const selected = [...markets].sort(() => Math.random() - 0.5).slice(0, 6);
  marketList.innerHTML = selected
    .map(
      ([title, detail]) => `
        <article class="market-item">
          <strong>${title}</strong>
          <span>${detail}</span>
        </article>
      `
    )
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderPillar(tab.dataset.pillar);
  });
});

shuffleButton.addEventListener("click", renderMarkets);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Mockup saved locally. A real build would connect this to the intake/admin system.";
});

renderMarkets();
