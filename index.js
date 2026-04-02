function renderShop() {
  const grid = document.getElementById('shopGrid');

  grid.innerHTML = shopItems.map(item => `
    <div class="bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition">

      <img src="${item.img}" class="h-52 w-full object-cover">

      <div class="p-5">

        <p class="text-xs text-rose-500">${item.id}</p>

        <h4 class="font-semibold text-lg mt-1">${item.name}</h4>

        <p class="text-gray-500 text-sm mt-2">${item.desc}</p>

        <p class="text-rose-500 mt-3 font-medium">${item.price}</p>

        <a href="https://instagram.com/fudgie.vivant"
           class="block mt-4 text-center bg-rose-500 text-white py-2 rounded-full text-sm">
           Order
        </a>

      </div>

    </div>
  `).join('');
}

function renderMenu() {
  const tbody = document.getElementById('menuBody');

  tbody.innerHTML = menuItems.map(item => `
    <tr class="border-b">
      <td class="py-3 text-rose-500">${item.code}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
    </tr>
  `).join('');
}

function renderCakes() {
  const tbody = document.getElementById('cakeBody');

  tbody.innerHTML = cakeItems.map(item => `
    <tr class="border-b">
      <td class="py-3">${item.type}</td>
      <td>${item.flavour}</td>
      <td>${item.occasion}</td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderShop();
  renderMenu();
  renderCakes();
});
