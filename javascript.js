document.getElementById("toggle").addEventListener("click", function () {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});
// Form gönderme olay dinleyicisi
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Verileri sunucuya gönder
  const data = new FormData(event.target);

  // Sunucu yanıtıyla sayfayı güncelle
  fetch("https://example.com/api/submit", {
    method: "POST",
    body: data,
  })
    .then(response => response.json())
    .then(response => {
      // Sunucu yanıtıyla sayfayı güncelle
      document.querySelector("#result").innerHTML = response;
    });
});
