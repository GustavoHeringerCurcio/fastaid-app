// scripts/emergencia.js

// ==========================================
// 1. METRÔNOMO PARA RCP (110 BPM - Web Audio API)
// ==========================================
let metronomoInterval = null;
let audioCtx = null;

function alternarMetronomoRCP(btnElement) {
  if (metronomoInterval) {
    clearInterval(metronomoInterval);
    metronomoInterval = null;
    btnElement.innerText = "🥁 Iniciar Ritmo (110 BPM)";
    btnElement.style.backgroundColor = "#d90429";
    return;
  }

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  btnElement.innerText = "⏹️ Parar Ritmo";
  btnElement.style.backgroundColor = "#2b9348"; // Verde ativo

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
    btnElement.style.backgroundColor = "#d90429";
    return;
  }

  btnElement.innerText = "⏸️ Pausar Cronômetro";
  btnElement.style.backgroundColor = "#2b9348";

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
  btnElement.style.backgroundColor = "#d90429";
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
function obterLocalizacaoEmergencia(elementoId) {
  const el = document.getElementById(elementoId);
  if (!el) return;

  el.classList.remove("hidden");
  el.scrollIntoView({ behavior: "smooth", block: "center" });

  if (!navigator.geolocation) {
    el.innerText = "⚠️ GPS não suportado neste navegador.";
    return;
  }

  el.innerText = "📍 Obtendo localização exata pelo GPS...";

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

        el.innerHTML = `<strong>📍 Informe este endereço ao SAMU (192):</strong><br><span class="text-base font-bold text-[#d90429]">${rua}, ${numero} — ${bairro}, ${cidade}</span><br><small class="text-gray-600">Coordenadas GPS: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}</small>`;
      } catch (err) {
        el.innerHTML = `<strong>📍 Coordenadas GPS para informar ao socorro:</strong><br>Latitude: ${latitude.toFixed(5)} | Longitude: ${longitude.toFixed(5)}`;
      }
    },
    () => {
      el.innerText = "⚠️ Permissão de localização negada. Ative o GPS do aparelho e tente novamente.";
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}