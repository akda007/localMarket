function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    Toastify({
      text: "Invalid username/password",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "rgb(238,174,190)",
        background: "radial-gradient(circle, rgba(238,174,190,1) 0%, rgba(155,148,233,1) 100%)"
      }
    }).showToast();
  }
}

const pwInput = document.querySelector("#senha");

document.querySelector("#revealBt").addEventListener("click", () => {
  if (pwInput.getAttribute("type") === "password") {
    pwInput.setAttribute("type", "text");
  } else {
    pwInput.setAttribute("type", "password");
  }
});
