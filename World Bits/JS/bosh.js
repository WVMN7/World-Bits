const data = [
  {
    name: "Steve Jobs",
    info: "Apple kompaniyasi asoschisi",
    page: "../HTML/stivjobs.html"
    // page: "https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%B1%D1%81,_%D0%A1%D1%82%D0%B8%D0%B2#%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0"
  },
  {
    name: "Sobiryozov Abbosbek",
    info: "Web sayt asoschisi"
  },
  {
    name: "slon Musk",
    info: "Tesla va SpaceX asoschisi",
    page: "elon-musk.html"
  },
  {
    name: "sill Gates",
    info: "Microsoft asoschisi",
    page: "bill-gates.html"
  },
  {
    name: "Solhv",
    info: "sehfnvdj"
  }
];

const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

function liveSearch() {
  const value = input.value.toLowerCase();
  suggestions.innerHTML = "";

  if (!value) return;

  data
    .filter(item => item.name.toLowerCase().includes(value))
    .forEach(item => {
      const li = document.createElement("li");

      li.innerHTML = `
        <strong>${item.name}</strong><br>
        <small>${item.info}</small>
      `;

      if (item.page) {
        li.onclick = () => window.location.href = item.page;
      }

      suggestions.appendChild(li);
    });
}