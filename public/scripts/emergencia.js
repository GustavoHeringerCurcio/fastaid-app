// scripts/emergencia.js

// ==========================================
// 1. METRÔNOMO PARA RCP (110 BPM - Web Audio API)
// ==========================================
let metronomoInterval = null;
let audioCtx = null;

function definirEstadoBotao(btnElement, ativo) {
  btnElement.classList.toggle("bg-emerald-600", ativo);
  btnElement.classList.toggle("hover:bg-emerald-700", ativo);
  btnElement.classList.toggle("bg-brand-500", !ativo);
  btnElement.classList.toggle("hover:bg-brand-600", !ativo);
}

function alternarMetronomoRCP(btnElement) {
  if (metronomoInterval) {
    clearInterval(metronomoInterval);
    metronomoInterval = null;
    btnElement.innerText = "🥁 Iniciar Ritmo (110 BPM)";
    definirEstadoBotao(btnElement, false);
    return;
  }

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  btnElement.innerText = "⏹️ Parar Ritmo";
  definirEstadoBotao(btnElement, true);

  const intervaloMs = (60 / 110) * 1000; // ~545ms por compressão

  metronomoInterval = setInterval(() => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);

    gain.gain.setValueAtTime(1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);

    btnElement.style.transform = "scale(1.06)";
    setTimeout(() => {
      btnElement.style.transform = "scale(1)";
    }, 100);
  }, intervaloMs);
}

// ==========================================
// 2. CRONÔMETRO DE CRISE CONVULSIVA
// ==========================================
let cronometroInterval = null;
let segundosCrise = 0;

function alternarCronometroConvulsao(btnElement, displayElement) {
  if (cronometroInterval) {
    clearInterval(cronometroInterval);
    cronometroInterval = null;
    btnElement.innerText = "▶️ Retomar Cronômetro";
    definirEstadoBotao(btnElement, false);
    return;
  }

  btnElement.innerText = "⏸️ Pausar Cronômetro";
  definirEstadoBotao(btnElement, true);

  cronometroInterval = setInterval(() => {
    segundosCrise++;
    const min = String(Math.floor(segundosCrise / 60)).padStart(2, "0");
    const seg = String(segundosCrise % 60).padStart(2, "0");
    displayElement.innerText = `${min}:${seg}`;

    // Alerta crítico aos 5 minutos (300 segundos)
    if (segundosCrise === 300) {
      displayElement.style.color = "#d90429";
      alert("⚠️ ATENÇÃO: A crise atingiu 5 minutos! Ligue para o SAMU (192) imediatamente.");
    }
  }, 1000);
}

function zerarCronometroConvulsao(btnElement, displayElement) {
  clearInterval(cronometroInterval);
  cronometroInterval = null;
  segundosCrise = 0;
  displayElement.innerText = "00:00";
  displayElement.style.color = "#2b2d42";
  btnElement.innerText = "⏱️ Iniciar Cronômetro";
  definirEstadoBotao(btnElement, false);
}

// ==========================================
// 3. LEITOR DE INSTRUÇÕES POR VOZ (Mãos Livres)
// ==========================================
function lerInstrucoesPagina(seletorContainer, btnElement) {
  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não suporta leitura por voz.");
    return;
  }

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    btnElement.innerText = "🔊 Ouvir Instruções";
    return;
  }

  const container = document.querySelector(seletorContainer);
  if (!container) return;

  const utterance = new SpeechSynthesisUtterance(container.innerText);
  utterance.lang = "pt-BR";
  utterance.rate = 1.05;

  utterance.onend = () => {
    btnElement.innerText = "🔊 Ouvir Instruções";
  };

  btnElement.innerText = "🔇 Parar Leitura";
  window.speechSynthesis.speak(utterance);
}

// ==========================================
// 4. LOCALIZADOR GPS ("ONDE ESTOU?")
// ==========================================
function textoLocalizacao(elementoId) {
  return (
    document.getElementById(elementoId + "-texto") ||
    document.getElementById(elementoId)
  );
}

function fecharLocalizacao(elementoId) {
  const el = document.getElementById(elementoId);
  if (el) el.classList.add("hidden");
}

function obterLocalizacaoEmergencia(elementoId) {
  const el = document.getElementById(elementoId);
  if (!el) return;

  const texto = textoLocalizacao(elementoId);

  el.classList.remove("hidden");
  el.scrollIntoView({ behavior: "smooth", block: "center" });

  if (!navigator.geolocation) {
    texto.innerText = "⚠️ GPS não suportado neste navegador.";
    return;
  }

  texto.innerText = "📍 Obtendo localização exata pelo GPS...";

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await res.json();
        const end = data.address || {};
        const rua = end.road || end.pedestrian || "Via não identificada";
        const numero = end.house_number || "S/N";
        const bairro = end.suburb || end.neighbourhood || "";
        const cidade = end.city || end.town || end.village || "";

        texto.innerHTML = `<strong>📍 Informe este endereço ao SAMU (192):</strong><br><span class="text-base font-bold text-brand-700">${rua}, ${numero} — ${bairro}, ${cidade}</span><br><small class="text-[#777]">Coordenadas GPS: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}</small>`;
      } catch (err) {
        texto.innerHTML = `<strong>📍 Coordenadas GPS para informar ao socorro:</strong><br>Latitude: ${latitude.toFixed(5)} | Longitude: ${longitude.toFixed(5)}`;
      }
    },
    () => {
      texto.innerText = "⚠️ Permissão de localização negada. Ative o GPS do aparelho e tente novamente.";
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}
