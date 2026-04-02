function renderShop() {
  const grid = document.getElementById('shopGrid');

  grid.innerHTML = shopItems.map(item => `
    <div class="bg-[#111] border border-white/5 rounded-2xl overflow-hidden group">

      <div class="overflow-hidden">
        <img src="${item.img}"
             class="h-56 w-full object-cover group-hover:scale-110 transition duration-700">
      </div>

      <div class="p-6">

        <p class="text-xs text-[#D4AF37] tracking-widest">${item.id}</p>

        <h4 class="luxury text-xl mt-2">${item.name}</h4>

        <p class="text-white/50 text-sm mt-2">${item.desc}</p>

        <div class="flex justify-between items-center mt-5">

          <span class="text-[#D4AF37] text-sm">${item.price}</span>

          <a href="https://instagram.com/fudgie.vivant"
             target="_blank"
             class="text-xs border border-[#D4AF37] px-4 py-1 rounded-full hover:bg-[#D4AF37] hover:text-black transition">
             Order
          </a>

        </div>

      </div>

    </div>
  `).join('');
}
