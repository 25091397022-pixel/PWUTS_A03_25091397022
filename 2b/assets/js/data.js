// Data contoh (mengacu pada struktur tabel dining_tables, menus, outlets di proposal)
window.APP = {
  meja: null,
  cart: {},
  promo: false,
  areas: {},
  outlet: { service_rate: 3, tax_rate: 10, open: '10:00', close: '22:00' },
  menus: [
    { id: 1, code: 'BB01', name: 'Bubur Ayam', type: 'food', price: 25000 },
    { id: 2, code: 'BB02', name: 'Bubur Spesial', type: 'food', price: 32000 },
    { id: 3, code: 'RB01', name: 'Roti Bakar Cokelat', type: 'food', price: 22000 },
    { id: 4, code: 'RB02', name: 'Roti Bakar Keju', type: 'food', price: 24000 },
    { id: 5, code: 'TH01', name: 'Teh Tarik (panas)', type: 'beverage', price: 18000 },
    { id: 6, code: 'TH02', name: 'Teh Tarik (dingin)', type: 'beverage', price: 20000 },
    { id: 7, code: 'TH03', name: 'Es Teh Lemon', type: 'beverage', price: 16000 },
    { id: 8, code: 'KP01', name: 'Kopi Susu', type: 'beverage', price: 20000 }
  ],
  rp: function (n) { return 'Rp ' + Math.round(n).toLocaleString('id-ID'); },
  // Service 3% dari subtotal setelah diskon; pajak 10% dari (subtotal + service)
  hitung: function () {
    var A = this, sub = 0;
    A.menus.forEach(function (m) { sub += (A.cart[m.id] || 0) * m.price; });
    var disc = (A.promo && sub >= 50000) ? Math.round(sub * 0.10) : 0;
    var base = sub - disc;
    var service = Math.round(base * A.outlet.service_rate / 100);
    var tax = Math.round((base + service) * A.outlet.tax_rate / 100);
    return { subtotal: sub, discount: disc, service: service, tax: tax, total: base + service + tax };
  },
  cariMeja: function (id) {
    var f = null;
    for (var a in this.areas) this.areas[a].forEach(function (t) { if (t.id === id) f = t; });
    return f;
  }
};
(function () {
  [['Lt 1 Indoor', 12, 4], ['Lt 2 Indoor', 10, 4], ['Lt 2 VIP', 4, 8]].forEach(function (c) {
    var arr = [];
    for (var i = 1; i <= c[1]; i++) {
      arr.push({
        id: c[0] + '-' + i, no: ('0' + i).slice(-2), area: c[0],
        cap: c[2] === 8 ? 8 : (i % 3 === 0 ? 6 : (i % 2 ? 2 : 4)),
        status: i % 7 === 0 ? 'occupied' : (i % 5 === 0 ? 'reserved' : 'available')
      });
    }
    APP.areas[c[0]] = arr;
  });
})();
