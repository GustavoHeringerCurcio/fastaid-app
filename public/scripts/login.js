document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const redirectParam = params.get("redirect") || "";
  const destino = redirectParam.startsWith("/") && !redirectParam.startsWith("//")
    ? redirectParam
    : "/";
  const veioDeRotaProtegida = params.has("redirect");

  if (veioDeRotaProtegida) {
    localStorage.removeItem("user");
  } else if (localStorage.getItem("user")) {
    window.location.href = destino;
    return;
  }

  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorSpan = document.getElementById("loginError");
  const submitButton = document.getElementById("loginSubmit");

  function configurarToggle(btn) {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;

    btn.addEventListener("click", () => {
      const mostrar = input.type === "password";
      input.type = mostrar ? "text" : "password";
      btn.setAttribute("aria-pressed", String(mostrar));
      btn.setAttribute("aria-label", mostrar ? "Ocultar senha" : "Mostrar senha");

      const olhoAberto = btn.querySelector(".eye-open");
      const olhoFechado = btn.querySelector(".eye-closed");
      if (olhoAberto) olhoAberto.classList.toggle("hidden", mostrar);
      if (olhoFechado) olhoFechado.classList.toggle("hidden", !mostrar);
    });
  }

  document
    .querySelectorAll("[data-toggle-password], #togglePassword")
    .forEach(configurarToggle);

  function definirCarregando(ativo) {
    if (!submitButton) return;
    submitButton.disabled = ativo;
    submitButton.textContent = ativo ? "Entrando..." : "Entrar";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorSpan.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      errorSpan.textContent = "Preencha e-mail e senha.";
      return;
    }

    definirCarregando(true);

    let resultado;
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });
      resultado = await response.json();
    } catch (err) {
      errorSpan.textContent = "Não foi possível conectar ao servidor";
      definirCarregando(false);
      return;
    }

    if (!resultado.ok) {
      errorSpan.textContent = resultado.mensagem || "E-mail ou senha inválidos";
      definirCarregando(false);
      return;
    }

    let profilePicture = "";

    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) throw new Error("Erro na requisição");
      const data = await response.json();
      profilePicture = data.results[0].picture.large;
    } catch (err) {
      profilePicture = "/images/logo.png";
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: resultado.usuario.email,
        nome: resultado.usuario.nome,
        profilePicture,
        loggedIn: true,
      })
    );

    window.location.href = destino;
  });
});
