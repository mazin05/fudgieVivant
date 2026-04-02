function renderShop() {
  const grid = document.getElementById('shopGrid');

  grid.innerHTML = shopItems.map(item => `
    <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition">

      <img src="${item.img}" class="h-48 w-full object-cover">

      <div class="p-5">
        <h4 class="font-semibold text-lg">${item.name}</h4>

        <p class="text-white/50 text-sm mt-2">${item.desc}</p>

        <p class="text-pink-400 mt-3 font-medium">${item.price}</p>

        <a href="https://instagram.com/fudgie.vivant" target="_blank"
           class="block mt-4 text-center py-2 bg-pink-500 rounded-full text-sm">
          Order
        </a>
      </div>

    </div>
  `).join('');
}

function renderMenu() {
  const tbody = document.getElementById('menuBody');

  tbody.innerHTML = menuItems.map(item => `
    <tr class="border-b border-white/10">
      <td class="py-3 text-pink-400">${item.code}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderShop();
  renderMenu();
});
