var map = L.map("map").setView([-3.7319, -38.5267], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([-3.7319, -38.5267])
  .addTo(map)
  .bindPopup("<b>Fortaleza</b><br>Teste com Leaflet.")
  .openPopup();
