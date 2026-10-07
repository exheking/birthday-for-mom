// ==========================================
// 💖 愛的時光冒險 (Anniversary / Birthday Special) 主程式腳本
// 法式輕奢香檳奶油風 - 一頁式長卷軸頂級流暢體驗
// 焦點：媽媽與小寶寶昊澄的溫馨羈絆、滿滿寵妻心意
// ==========================================

(function () {
  const config = window.GAME_CONFIG || {};

  // --- 狀態管理 ---
  let soundEnabled = true;
  let bgmPlaying = false;

  // ==========================================
  // 1. Web Audio API 水晶八音盒 (Music Box) 合成引擎
  // ==========================================
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // 仿真水晶八音盒純淨音色
  function playMusicBoxNote(freq, duration = 0.55, gainVal = 0.12) {
    if (!soundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;

      // 1. 基頻 (正弦波)
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);
      gain1.gain.setValueAtTime(gainVal, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + duration);

      // 2. 結晶泛音 (八音盒金屬簧片特有的水晶叮咚感)
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2.756, now);
      gain2.gain.setValueAtTime(gainVal * 0.38, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.45);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(now);
      osc2.stop(now + duration * 0.45);

      // 3. 彈撥打擊點微鳴
      const osc3 = audioCtx.createOscillator();
      const gain3 = audioCtx.createGain();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(freq * 5.4, now);
      gain3.gain.setValueAtTime(gainVal * 0.18, now);
      gain3.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc3.connect(gain3);
      gain3.connect(audioCtx.destination);
      osc3.start(now);
      osc3.stop(now + 0.04);
    } catch (e) {
      console.warn("Audio note play failed", e);
    }
  }

  // 接牌水波輕響
  function playCatchSound() {
    initAudio();
    playMusicBoxNote(523.25, 0.45, 0.1);
  }

  // 翻牌絲絨輕響
  function playFlipSound() {
    if (!soundEnabled || !audioCtx) return;
    try {
      initAudio();
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  // 配對成功雙音八音盒和弦
  function playMatchSound() {
    initAudio();
    playMusicBoxNote(659.25, 0.6, 0.14);
    setTimeout(() => playMusicBoxNote(880, 0.65, 0.16), 110);
    setTimeout(() => playMusicBoxNote(1046.5, 0.8, 0.18), 240);
  }

  // 皇冠金光華麗和弦
  function playCrownSound() {
    initAudio();
    playMusicBoxNote(587.33, 0.45, 0.12);
    setTimeout(() => playMusicBoxNote(739.99, 0.5, 0.14), 80);
    setTimeout(() => playMusicBoxNote(880, 0.6, 0.16), 160);
    setTimeout(() => playMusicBoxNote(1174.66, 0.75, 0.18), 260);
  }

  // 拼圖碎片交換音
  function playPuzzleSwapSound() {
    initAudio();
    playMusicBoxNote(440, 0.25, 0.08);
    setTimeout(() => playMusicBoxNote(554.37, 0.35, 0.1), 70);
  }

  // 火漆封蠟拆開清脆音
  function playSealOpenSound() {
    initAudio();
    playMusicBoxNote(392, 0.4, 0.12);
    setTimeout(() => playMusicBoxNote(523.25, 0.45, 0.14), 90);
    setTimeout(() => playMusicBoxNote(783.99, 0.7, 0.18), 180);
  }

  // 便便逗趣噗噗音
  function playPoopSound() {
    if (!soundEnabled || !audioCtx) return;
    try {
      initAudio();
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(75, now + 0.18);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch (e) {}
  }

  // 蓋鋼印鏗鏘音
  function playStampSound() {
    if (!soundEnabled || !audioCtx) return;
    try {
      initAudio();
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.12);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
      setTimeout(() => playMusicBoxNote(1046.5, 0.6, 0.15), 90);
    } catch (e) {}
  }

  // 通關凱旋大和弦
  function playVictoryFanfare() {
    initAudio();
    const chord = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    chord.forEach((freq, idx) => {
      setTimeout(() => playMusicBoxNote(freq, 0.9, 0.14), idx * 110);
    });
  }

  // ==========================================
  // 2. 背景微光粒子畫布 (Ambient Bokeh Canvas)
  // ==========================================
  const ambientCanvas = document.getElementById('ambient-canvas');
  let ambCtx = null;
  let bokehParticles = [];

  function initAmbientBackground() {
    if (!ambientCanvas) return;
    ambCtx = ambientCanvas.getContext('2d');

    function resizeAmbient() {
      ambientCanvas.width = window.innerWidth;
      ambientCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeAmbient);
    resizeAmbient();

    bokehParticles = [];
    const colors = [
      'rgba(196, 158, 122, 0.22)', // 醇厚奶茶光暈
      'rgba(222, 184, 135, 0.20)', // 溫暖焦糖奶泡
      'rgba(247, 239, 230, 0.35)', // 燕麥乳白微光
      'rgba(210, 165, 125, 0.18)'  // 拿鐵微金光斑
    ];

    for (let i = 0; i < 28; i++) {
      bokehParticles.push({
        x: Math.random() * ambientCanvas.width,
        y: Math.random() * ambientCanvas.height,
        radius: Math.random() * 24 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        pulse: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    function renderAmbient() {
      if (!ambCtx) return;
      ambCtx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);

      bokehParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.y < -50) p.y = ambientCanvas.height + 50;
        if (p.x < -50) p.x = ambientCanvas.width + 50;
        if (p.x > ambientCanvas.width + 50) p.x = -50;

        const currentR = p.radius + Math.sin(p.pulse) * 3;
        const grad = ambCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(1, currentR));
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ambCtx.beginPath();
        ambCtx.arc(p.x, p.y, Math.max(1, currentR), 0, Math.PI * 2);
        ambCtx.fillStyle = grad;
        ambCtx.fill();
      });

      requestAnimationFrame(renderAmbient);
    }
    requestAnimationFrame(renderAmbient);
  }

  // ==========================================
  // 3. 全螢幕彩紙與愛心粒子系統 (Confetti System)
  // ==========================================
  const confettiCanvas = document.getElementById('confetti-canvas');
  let confettiCtx = null;
  let confettiParticles = [];
  let confettiActive = false;

  function initConfetti() {
    if (!confettiCanvas) return;
    confettiCtx = confettiCanvas.getContext('2d');
    function resizeConfetti() {
      confettiCanvas.width = window.innerWidth;
      confettiCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeConfetti);
    resizeConfetti();
  }

  function triggerConfetti(durationMs = 3000) {
    if (!confettiCanvas || !confettiCtx) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    confettiActive = true;
    confettiParticles = [];
    const colors = ['#c5a059', '#d48293', '#deb887', '#9e7a33', '#f43f5e', '#fb7185'];
    const emojis = ['💖', '✨', '🌸', '👑', '🍼', '❤️'];

    for (let i = 0; i < 75; i++) {
      confettiParticles.push({
        x: Math.random() * confettiCanvas.width,
        y: -20 - Math.random() * 60,
        size: Math.random() * 11 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        emoji: Math.random() > 0.45 ? emojis[Math.floor(Math.random() * emojis.length)] : null,
        vx: (Math.random() - 0.5) * 3.5,
        vy: Math.random() * 3 + 2.2,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 6,
        opacity: 1
      });
    }

    const startTime = Date.now();
    function animateConfetti() {
      if (!confettiActive) return;
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      const elapsed = Date.now() - startTime;

      confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rot * Math.PI) / 180);
        if (p.emoji) {
          confettiCtx.font = `${p.size * 1.5}px sans-serif`;
          confettiCtx.fillText(p.emoji, -p.size / 2, p.size / 2);
        } else {
          confettiCtx.fillStyle = p.color;
          confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        }
        confettiCtx.restore();
      });

      if (elapsed < durationMs) {
        requestAnimationFrame(animateConfetti);
      } else {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiActive = false;
      }
    }
    requestAnimationFrame(animateConfetti);
  }

  // ==========================================
  // 4. 闖關制關卡切換與步進導航 (Stage-by-Stage Progressive Unlock)
  // 嚴格遵守「一關一關過，過完一關才有下一關」
  // ==========================================
  let currentStage = 0;
  let unlockedMaxStage = 1; // 預設解鎖首頁(0)與第1關(1)，後續第2, 3, 4關需依序通關解鎖
  let toastTimer = null;

  function showToast(message) {
    const toast = document.getElementById('game-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = 'block';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.style.display = 'none';
      toastTimer = null;
    }, 2500);
  }

  function updateStepperUI() {
    const stepBtns = document.querySelectorAll('.step-btn');
    stepBtns.forEach(btn => {
      const stageIdx = parseInt(btn.dataset.stage, 10);
      btn.classList.remove('active', 'done', 'locked');

      if (stageIdx === currentStage) {
        btn.classList.add('active');
      } else if (stageIdx < currentStage || (stageIdx > 0 && stageIdx < unlockedMaxStage)) {
        btn.classList.add('done');
      }

      if (stageIdx > unlockedMaxStage) {
        btn.classList.add('locked');
      }

      const badge = btn.querySelector('.step-badge');
      if (badge) {
        if (stageIdx === 4) {
          badge.textContent = '🎁';
        } else if (stageIdx > 0 && stageIdx < unlockedMaxStage) {
          badge.textContent = '✓';
        } else {
          badge.textContent = stageIdx;
        }
      }
    });

    // 更新首頁 Preview 卡片狀態
    const previewCards = document.querySelectorAll('.preview-card');
    previewCards.forEach(card => {
      const stageIdx = parseInt(card.dataset.previewStage, 10);
      const statusEl = card.querySelector('.preview-status');
      if (statusEl) {
        statusEl.classList.remove('status-ready', 'status-locked', 'status-done');
        if (stageIdx < unlockedMaxStage) {
          statusEl.classList.add('status-done');
          statusEl.textContent = '已珍藏 ✓';
        } else if (stageIdx === unlockedMaxStage) {
          statusEl.classList.add('status-ready');
          statusEl.textContent = '進入 ➔';
        } else {
          statusEl.classList.add('status-locked');
          statusEl.textContent = '🔒 待解鎖';
        }
      }
    });
  }

  function switchStage(stageIdx) {
    if (stageIdx > unlockedMaxStage) {
      playMusicBoxNote(220, 0.25, 0.1);
      showToast(`🔒 請先完成第 ${unlockedMaxStage} 關，才能解鎖後續驚喜喔！`);
      return;
    }

    currentStage = stageIdx;

    // 切換頁面 class
    document.querySelectorAll('.stage-screen').forEach(screen => {
      screen.classList.remove('active');
    });
    const targetScreen = document.getElementById(`stage-${stageIdx}`);
    if (targetScreen) {
      targetScreen.classList.add('active');
    }

    // 捲動至頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 更新 Stepper 導航
    updateStepperUI();

    // 進入關卡的特定動作
    if (stageIdx === 1) {
      setTimeout(() => {
        resizeCatchCanvas();
      }, 60);
    } else if (stageIdx === 2) {
      // 確保第二關正常就緒
    } else if (stageIdx === 3) {
      // 確保第三關拼圖就緒
    } else if (stageIdx === 4) {
      triggerConfetti(4000);
      playVictoryFanfare();
    }
  }

  function initNavigation() {
    // 頂部步進按鈕點擊
    document.querySelectorAll('.step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const stageIdx = parseInt(btn.dataset.stage, 10);
        switchStage(stageIdx);
      });
    });

    // 首頁預覽卡片點擊
    document.querySelectorAll('.preview-card').forEach(card => {
      card.addEventListener('click', () => {
        const stageIdx = parseInt(card.dataset.previewStage, 10);
        switchStage(stageIdx);
      });
    });

    // 首頁「開啟愛的冒險」按鈕
    const startGameBtn = document.getElementById('start-game-btn');
    if (startGameBtn) {
      startGameBtn.addEventListener('click', () => {
        switchStage(1);
      });
    }

    // 第 1 關通關後「解鎖並進入第 2 關」按鈕
    const s1NextBtn = document.getElementById('s1-next-btn');
    if (s1NextBtn) {
      s1NextBtn.addEventListener('click', () => {
        unlockedMaxStage = Math.max(unlockedMaxStage, 2);
        switchStage(2);
      });
    }

    // 第 2 關通關後「解鎖並進入第 3 關」按鈕
    const s2NextBtn = document.getElementById('s2-next-btn');
    if (s2NextBtn) {
      s2NextBtn.addEventListener('click', () => {
        unlockedMaxStage = Math.max(unlockedMaxStage, 3);
        switchStage(3);
      });
    }

    // 第 3 關通關後「解鎖老公與小饅頭專屬心意信件」按鈕
    const s3NextBtn = document.getElementById('s3-next-btn');
    if (s3NextBtn) {
      s3NextBtn.addEventListener('click', () => {
        unlockedMaxStage = Math.max(unlockedMaxStage, 4);
        switchStage(4);
      });
    }

    // 終極彩蛋「再重溫一次遊戲」按鈕
    const replayBtn = document.getElementById('replay-btn');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        showToast('💖 所有關卡皆已解鎖，隨時可自由回顧重溫！');
        switchStage(0);
      });
    }

    // 初始化狀態
    updateStepperUI();

    // 暴露關卡切換輔助函式
    window.switchStage = switchStage;
    window.unlockAllStages = () => {
      unlockedMaxStage = 4;
      updateStepperUI();
    };
  }

  // ==========================================
  // 5. 第一關：接住昊澄所有的愛 (Baby Photo Catch Game)
  // 慢速大卡片、Retina 超清萌照、500分目標、客廳回憶原地展開
  // ==========================================
  const canvas = document.getElementById('catch-canvas');
  const ctx = canvas.getContext('2d');
  let catchAnimFrame = null;
  let catchScore = 0;
  const catchTarget = (config.stage1 && config.stage1.targetScore) || 500;

  // 嬰兒車 (146x122px，完美比例 Q 版高奢法式奶茶推車)
  let cart = {
    x: 140,
    width: 146,
    height: 122,
    speed: 10.5,
    scaleX: 1,
    scaleY: 1
  };

  let fallingItems = [];
  let floatingTexts = [];
  let praiseTexts = [];
  let ripples = [];
  let sparkles = [];
  let itemSpawnTimer = 0;
  let isStage1Active = false;
  let consecutiveCatches = 0;
  let lastSpawnX = 180;

  // 預載入超萌 Q 版立體嬰兒推車圖片
  const strollerImg = new Image();
  strollerImg.src = 'images/baby_stroller.png';

  // 14 款昊澄（小饅頭）精選成長萌照卡片定義 (500x500 高解析度特寫，全部已核對確保露出可愛正臉，零重複)
  // 16 款昊澄（小饅頭）精選成長萌照卡片定義 (全部已核對確保露出可愛正臉，零重複)
  const babyCardDefs = [
    { id: 1, src: 'images/baby_card_1.jpg', label: '黃圍兜笑臉 💛', score: 30, note: 1046.5 },
    { id: 2, src: 'images/baby_card_2.jpg', label: '大眼看鏡頭 👀', score: 30, note: 1174.66 },
    { id: 3, src: 'images/baby_card_3.jpg', label: '爬行小探險 🌟', score: 30, note: 1318.51 },
    { id: 4, src: 'images/baby_card_4.jpg', label: '咬奶嘴皮蛋 🍼', score: 30, note: 987.77 },
    { id: 5, src: 'images/baby_card_5.jpg', label: '長頸鹿笑笑 🦒', score: 30, note: 1396.91 },
    { id: 6, src: 'images/baby_card_6.jpg', label: '扶床甜甜笑 🌸', score: 30, note: 1046.5 },
    { id: 7, src: 'images/baby_card_7.jpg', label: '手抓彩球球 ⚽', score: 30, note: 1174.66 },
    { id: 8, src: 'images/baby_card_8.jpg', label: '沙發小靠枕 🛋️', score: 30, note: 1318.51 },
    { id: 9, src: 'images/baby_card_9.jpg', label: '抱抱枕甜笑 💕', score: 30, note: 1046.5 },
    { id: 10, src: 'images/baby_card_10.jpg', label: '格紋圍兜兜 ✨', score: 30, note: 1174.66 },
    { id: 11, src: 'images/baby_card_11.jpg', label: '沙發開懷笑 😆', score: 30, note: 1318.51 },
    { id: 12, src: 'images/baby_card_12.jpg', label: '露小牙齦大笑 😁', score: 30, note: 987.77 },
    { id: 13, src: 'images/baby_card_13.jpg', label: '傲嬌嘟嘟嘴 👶', score: 30, note: 1396.91 },
    { id: 14, src: 'images/baby_card_14.jpg', label: '床邊天使笑 👼', score: 30, note: 1046.5 },
    { id: 15, src: 'images/baby_card_15.jpg', label: '餐椅甜笑 🥣', score: 30, note: 1046.5 },
    { id: 16, src: 'images/baby_card_16.jpg', label: '餐椅開懷笑 🌟', score: 30, note: 1174.66 }
  ];

  // 預載入 16 張寶寶高清特寫照片
  const babyCardImages = {};
  babyCardDefs.forEach(b => {
    const img = new Image();
    img.src = b.src;
    babyCardImages[b.id] = img;
  });

  const momPraises = [
    '✨ 漂亮接住！',
    '💖 接得好！',
    '🍼 滿滿活力！',
    '🌸 順利得分！',
    '🥰 寶寶笑咪咪！',
    '🧁 好厲害！'
  ];

  // 卡片與照片尺寸 (Retina 邏輯座標 86x108px，手機適應性優化)
  const CARD_W = 86;
  const CARD_H = 108;

  let canvasCssWidth = 360;
  let canvasCssHeight = 360;

  function resizeCatchCanvas() {
    const container = document.getElementById('catch-canvas-container');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    canvasCssWidth = rect.width > 0 ? rect.width : Math.min(window.innerWidth - 40, 580);
    canvasCssHeight = rect.height > 0 ? rect.height : 360;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(canvasCssWidth * dpr);
    canvas.height = Math.round(canvasCssHeight * dpr);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // 手機與窄螢幕自適應推車大小，確保畫面不擁擠且完整可見
    if (canvasCssWidth < 420) {
      cart.width = 120;
      cart.height = 100;
    } else {
      cart.width = 146;
      cart.height = 122;
    }

    cart.x = Math.max(0, Math.min(canvasCssWidth - cart.width, canvasCssWidth / 2 - cart.width / 2));
  }

  function startStage1() {
    initAudio();
    resizeCatchCanvas();

    const overlay = document.getElementById('catch-start-overlay');
    if (overlay) overlay.style.display = 'none';

    catchScore = 0;
    fallingItems = [];
    floatingTexts = [];
    praiseTexts = [];
    ripples = [];
    sparkles = [];
    itemSpawnTimer = 0;
    consecutiveCatches = 0;
    cart.scaleX = 1;
    cart.scaleY = 1;
    isStage1Active = true;

    document.getElementById('catch-score').textContent = '0';
    document.getElementById('catch-target').textContent = catchTarget;
    document.getElementById('catch-progress').style.width = '0%';
    document.getElementById('s1-clear-banner').style.display = 'none';

    // 觸控與滑鼠操作支援
    let isTouching = false;
    const updateCartPos = (clientX) => {
      const rect = canvas.getBoundingClientRect();
      const posX = clientX - rect.left - cart.width / 2;
      cart.x = Math.max(0, Math.min(canvasCssWidth - cart.width, posX));
    };

    canvas.onpointerdown = (e) => {
      isTouching = true;
      updateCartPos(e.clientX);
    };
    window.onpointermove = (e) => {
      if (isTouching && isStage1Active) {
        updateCartPos(e.clientX);
      }
    };
    window.onpointerup = () => { isTouching = false; };

    // 鍵盤操控
    const keys = {};
    window.addEventListener('keydown', (e) => { keys[e.key] = true; });
    window.addEventListener('keyup', (e) => { keys[e.key] = false; });

    function gameLoop() {
      if (!isStage1Active) return;

      if (keys['ArrowLeft'] || keys['a']) {
        cart.x = Math.max(0, cart.x - cart.speed);
      }
      if (keys['ArrowRight'] || keys['d']) {
        cart.x = Math.min(canvasCssWidth - cart.width, cart.x + cart.speed);
      }

      ctx.clearRect(0, 0, canvasCssWidth, canvasCssHeight);

      // 生成掉落物 (節奏輕快舒適，畫面不擁擠，上限3張，防止過密)
      itemSpawnTimer++;
      if (itemSpawnTimer > 76 && fallingItems.length < 3) {
        itemSpawnTimer = 0;
        const rand = Math.random();
        let itemData = null;

        if (rand < 0.22) {
          // 22% 機率：便便小搗蛋 💩 (考驗閃避技巧！)
          itemData = {
            isBaby: false,
            type: 'poop',
            label: '快躲開! 💩',
            score: -15,
            emoji: '💩',
            width: 82,
            height: 102
          };
        } else if (rand < 0.76) {
          // 54% 機率：昊澄精選高畫質萌照大卡片
          const pick = babyCardDefs[Math.floor(Math.random() * babyCardDefs.length)];
          itemData = {
            isBaby: true,
            type: 'baby',
            imgId: pick.id,
            img: babyCardImages[pick.id],
            label: pick.label,
            score: pick.score,
            note: pick.note,
            width: CARD_W,
            height: CARD_H
          };
        } else if (rand < 0.86) {
          // 10% 機率：幸運皇冠卡 👑
          itemData = {
            isBaby: false,
            type: 'crown',
            label: '幸運皇冠 👑',
            score: 50,
            emoji: '👑',
            width: 84,
            height: 104
          };
        } else if (rand < 0.93) {
          // 7% 機率：熱呼呼奶瓶卡 🍼
          itemData = {
            isBaby: false,
            type: 'bottle',
            label: '溫暖ㄋㄟㄋㄟ 🍼',
            score: 25,
            emoji: '🍼',
            width: 82,
            height: 102
          };
        } else {
          // 7% 機率：母子暖心愛心卡 💖
          itemData = {
            isBaby: false,
            type: 'heart',
            label: '母子愛心 💕',
            score: 20,
            emoji: '💖',
            width: 82,
            height: 102
          };
        }

        const margin = itemData.width / 2 + 12;
        let baseX = 0;
        let attempts = 0;
        do {
          baseX = Math.random() * (canvasCssWidth - margin * 2) + margin;
          attempts++;
        } while (attempts < 6 && Math.abs(baseX - lastSpawnX) < 110);
        lastSpawnX = baseX;

        fallingItems.push({
          ...itemData,
          baseX: baseX,
          x: baseX,
          y: -itemData.height / 2 - 12,
          speed: 1.35 + Math.random() * 0.25, // 微調回溫柔舒適的掉落速度 (約 1.35~1.60)
          swayAmp: 10 + Math.random() * 6,
          swayFreq: 0.012 + Math.random() * 0.004,
          phase: Math.random() * Math.PI * 2,
          rot: 0
        });
      }

      // 更新並繪製卡片
      for (let i = fallingItems.length - 1; i >= 0; i--) {
        const item = fallingItems[i];
        item.y += item.speed;
        item.x = item.baseX + Math.sin(item.y * item.swayFreq + item.phase) * item.swayAmp;
        const minX = item.width / 2 + 6;
        const maxX = canvasCssWidth - item.width / 2 - 6;
        item.x = Math.max(minX, Math.min(maxX, item.x));
        item.rot = Math.sin(item.y * item.swayFreq + item.phase) * 0.08;

        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rot);

        const w = item.width;
        const h = item.height;
        const halfW = w / 2;
        const halfH = h / 2;

        if (item.isBaby) {
          // 拍立得風格【昊澄高清萌照大卡片】
          ctx.shadowColor = 'rgba(104, 32, 53, 0.18)';
          ctx.shadowBlur = 12;
          ctx.shadowOffsetY = 5;

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.roundRect(-halfW, -halfH, w, h, 9);
          ctx.fill();

          ctx.shadowColor = 'transparent';
          ctx.strokeStyle = '#e6c894';
          ctx.lineWidth = 1.4;
          ctx.stroke();

          // 粉金紙膠帶
          ctx.fillStyle = 'rgba(242, 171, 184, 0.9)';
          ctx.fillRect(-16, -halfH - 4, 32, 8);

          // 昊澄高清照片 (78x78 方形)
          const photoSize = 78;
          const photoX = -halfW + 6;
          const photoY = -halfH + 8;

          if (item.img && item.img.complete) {
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(photoX, photoY, photoSize, photoSize, 6);
            ctx.clip();
            ctx.drawImage(item.img, photoX, photoY, photoSize, photoSize);
            ctx.restore();
          } else {
            ctx.fillStyle = '#fef2f2';
            ctx.fillRect(photoX, photoY, photoSize, photoSize);
          }

          ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(photoX, photoY, photoSize, photoSize, 6);
          ctx.stroke();

          // 卡片下方標籤
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#682035';
          ctx.fillText(item.label, 0, halfH - 12);

        } else if (item.type === 'crown') {
          // 超人媽咪金色皇冠卡 (高對比溫暖微光)
          ctx.shadowColor = 'rgba(217, 119, 6, 0.25)';
          ctx.shadowBlur = 14;
          ctx.shadowOffsetY = 4;

          const grad = ctx.createLinearGradient(0, -halfH, 0, halfH);
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(1, '#fffbeb');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.roundRect(-halfW, -halfH, w, h, 9);
          ctx.fill();

          ctx.shadowColor = 'transparent';
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 1.8;
          ctx.stroke();

          ctx.fillStyle = '#f59e0b';
          ctx.fillRect(-16, -halfH - 4, 32, 8);

          ctx.font = '34px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('👑', 0, -10);

          // 標籤純白底膠囊，徹底解決黃底黃字
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.beginPath();
          ctx.roundRect(-halfW + 6, halfH - 24, w - 12, 18, 9);
          ctx.fill();
          ctx.strokeStyle = '#d97706';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#78350f'; // 濃郁深焦糖字體
          ctx.fillText(item.label, 0, halfH - 15);

        } else if (item.type === 'bottle' || item.type === 'heart') {
          // 奶瓶 / 愛心卡
          ctx.shadowColor = 'rgba(244, 63, 94, 0.2)';
          ctx.shadowBlur = 10;
          ctx.shadowOffsetY = 4;

          const grad = ctx.createLinearGradient(0, -halfH, 0, halfH);
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(1, item.type === 'bottle' ? '#f0fdf4' : '#fff1f2');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.roundRect(-halfW, -halfH, w, h, 9);
          ctx.fill();

          ctx.shadowColor = 'transparent';
          ctx.strokeStyle = item.type === 'bottle' ? '#86efac' : '#fca5a5';
          ctx.lineWidth = 1.4;
          ctx.stroke();

          ctx.fillStyle = item.type === 'bottle' ? 'rgba(74, 222, 128, 0.7)' : 'rgba(244, 63, 94, 0.7)';
          ctx.fillRect(-16, -halfH - 4, 32, 8);

          ctx.font = '32px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(item.emoji, 0, -10);

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = item.type === 'bottle' ? '#166534' : '#9f1239';
          ctx.fillText(item.label, 0, halfH - 14);

        } else {
          // 便便小搗蛋 (紅色警示邊框與醒目警示字)
          ctx.shadowColor = 'rgba(239, 68, 68, 0.22)';
          ctx.shadowBlur = 12;
          ctx.shadowOffsetY = 4;

          const grad = ctx.createLinearGradient(0, -halfH, 0, halfH);
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(1, '#fef2f2');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.roundRect(-halfW, -halfH, w, h, 9);
          ctx.fill();

          ctx.shadowColor = 'transparent';
          ctx.strokeStyle = '#f87171';
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // 紅色警示膠帶
          ctx.fillStyle = '#f87171';
          ctx.fillRect(-18, -halfH - 4, 36, 8);

          ctx.font = '36px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('💩', 0, -10);

          // 警告底色小膠囊
          ctx.fillStyle = '#fee2e2';
          ctx.beginPath();
          ctx.roundRect(-halfW + 6, halfH - 24, w - 12, 18, 9);
          ctx.fill();
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#991b1b'; // 深酒紅字
          ctx.fillText(item.label, 0, halfH - 15);
        }

        ctx.restore();

        // 碰撞檢測 (推車上方接卡區，精準對齊 Q 版推車大籃子口)
        const cartCatchLine = canvasCssHeight - cart.height - 10 + Math.round(cart.height * 0.42);
        const cardBottom = item.y + item.height / 2;

        if (
          cardBottom >= cartCatchLine - 14 &&
          cardBottom <= cartCatchLine + 36 &&
          item.x >= cart.x - 12 &&
          item.x <= cart.x + cart.width + 12
        ) {
          // 接到了！
          catchScore = Math.max(0, catchScore + item.score);
          document.getElementById('catch-score').textContent = catchScore;
          const progressPercent = Math.min(100, (catchScore / catchTarget) * 100);
          document.getElementById('catch-progress').style.width = `${progressPercent}%`;

          cart.scaleX = 1.18;
          cart.scaleY = 0.84;

          if (item.type === 'crown') {
            playCrownSound();
          } else if (item.type === 'poop') {
            playPoopSound();
          } else if (item.isBaby && item.note) {
            initAudio();
            playMusicBoxNote(item.note, 0.5, 0.14);
            setTimeout(() => playMusicBoxNote(item.note * 1.25, 0.45, 0.1), 70);
          } else {
            playCatchSound();
          }

          ripples.push({
            x: item.x,
            y: cartCatchLine,
            r: 8,
            maxR: 44,
            alpha: 1,
            color: item.score > 0 ? '#f2abb8' : '#cbd5e1'
          });

          if (item.score > 0) {
            for (let s = 0; s < 6; s++) {
              sparkles.push({
                x: item.x,
                y: cartCatchLine - 4,
                vx: (Math.random() - 0.5) * 3.8,
                vy: -Math.random() * 3.5 - 1.2,
                size: Math.random() * 4 + 2,
                color: item.type === 'crown' ? '#ffd700' : '#f43f5e',
                alpha: 1
              });
            }
          }

          floatingTexts.push({
            x: item.x,
            y: cartCatchLine - 18,
            text: item.score > 0 ? `+${item.score} ${item.label}` : `${item.score} 哎呀炸屎啦! 💩`,
            isBonus: item.type === 'crown',
            isPoop: item.score < 0,
            alpha: 1,
            vy: -1.7
          });

          if (item.score > 0) {
            consecutiveCatches++;
            if (consecutiveCatches % 2 === 0 || item.type === 'crown') {
              const praise = momPraises[Math.floor(Math.random() * momPraises.length)];
              praiseTexts.push({
                x: canvasCssWidth / 2,
                y: cartCatchLine - 44,
                text: praise,
                alpha: 1,
                vy: -1.2
              });
            }
          } else {
            consecutiveCatches = 0;
          }

          fallingItems.splice(i, 1);

          // 檢查是否達成 500 分
          if (catchScore >= catchTarget) {
            winStage1();
            return;
          }
          continue;
        }

        // 移出畫布
        if (item.y > canvasCssHeight + item.height + 20) {
          fallingItems.splice(i, 1);
        }
      }

      // 推車彈性回彈
      cart.scaleX += (1 - cart.scaleX) * 0.14;
      cart.scaleY += (1 - cart.scaleY) * 0.14;

      // 繪製水波漣漪
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rp = ripples[r];
        rp.r += 2.2;
        rp.alpha -= 0.045;
        if (rp.alpha <= 0) {
          ripples.splice(r, 1);
          continue;
        }
        ctx.save();
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = rp.color;
        ctx.globalAlpha = rp.alpha;
        ctx.lineWidth = 2.2;
        ctx.stroke();
        ctx.restore();
      }

      // 繪製金色火花粒子
      for (let s = sparkles.length - 1; s >= 0; s--) {
        const sp = sparkles[s];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.alpha -= 0.035;
        if (sp.alpha <= 0) {
          sparkles.splice(s, 1);
          continue;
        }
        ctx.save();
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.alpha;
        ctx.fill();
        ctx.restore();
      }

      // 繪製浮動分數 (超清晰雙層膠囊標籤，徹底解決黃字不清楚問題)
      for (let f = floatingTexts.length - 1; f >= 0; f--) {
        const ft = floatingTexts[f];
        ft.y += ft.vy;
        ft.alpha -= 0.022;
        if (ft.alpha <= 0) {
          floatingTexts.splice(f, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = ft.alpha;
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const txt = ft.text;
        const tw = ctx.measureText(txt).width;
        const pillW = tw + 22;
        const pillH = 28;

        // 膠囊底色：純白底或淡粉紅底
        ctx.fillStyle = ft.isPoop ? 'rgba(254, 226, 226, 0.98)' : 'rgba(255, 255, 255, 0.98)';
        ctx.beginPath();
        ctx.roundRect(ft.x - pillW / 2, ft.y - pillH / 2, pillW, pillH, 14);
        ctx.fill();

        // 膠囊立體對比邊框
        ctx.strokeStyle = ft.isPoop ? '#ef4444' : (ft.isBonus ? '#d97706' : '#e11d48');
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // 濃郁清晰深色字體 (徹底解決淡黃字看不清的問題！)
        ctx.fillStyle = ft.isPoop ? '#991b1b' : (ft.isBonus ? '#92400e' : '#881337');
        ctx.fillText(txt, ft.x, ft.y);
        ctx.restore();
      }

      // 繪製媽咪誇誇標籤 (超清晰純白玫瑰底色)
      for (let p = praiseTexts.length - 1; p >= 0; p--) {
        const pt = praiseTexts[p];
        pt.y += pt.vy;
        pt.alpha -= 0.018;
        if (pt.alpha <= 0) {
          praiseTexts.splice(p, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = pt.alpha;
        ctx.font = 'bold 14px sans-serif';
        const txtWidth = ctx.measureText(pt.text).width;
        const pillWidth = txtWidth + 24;
        const pillHeight = 28;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
        ctx.beginPath();
        ctx.roundRect(pt.x - pillWidth / 2, pt.y - pillHeight / 2, pillWidth, pillHeight, 14);
        ctx.fill();

        ctx.strokeStyle = '#e11d48';
        ctx.lineWidth = 1.6;
        ctx.stroke();

        ctx.fillStyle = '#881337'; // 醇厚酒紅深字
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(pt.text, pt.x, pt.y);
        ctx.restore();
      }

      // 繪製超萌 Q 版立體嬰兒推車 (136px 寬，附帶 Q 彈變形動畫)
      const cartY = canvasCssHeight - cart.height - 10;
      const cartCenterX = cart.x + cart.width / 2;
      const cartBottomY = cartY + cart.height;

      ctx.save();
      ctx.translate(cartCenterX, cartBottomY);
      ctx.scale(cart.scaleX, cart.scaleY);
      ctx.translate(-cartCenterX, -cartBottomY);

      if (strollerImg.complete && strollerImg.naturalWidth > 0) {
        ctx.drawImage(strollerImg, cart.x, cartY, cart.width, cart.height);
      } else {
        // 優雅備援
        const cartGrad = ctx.createLinearGradient(cart.x, cartY, cart.x + cart.width, cartY + cart.height);
        cartGrad.addColorStop(0, '#f5b5c2');
        cartGrad.addColorStop(1, '#d88697');
        ctx.fillStyle = cartGrad;
        ctx.beginPath();
        ctx.roundRect(cart.x, cartY, cart.width, cart.height, 16);
        ctx.fill();
        ctx.font = '26px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🧺', cart.x + cart.width / 2, cartY + cart.height / 2);
      }

      ctx.restore();

      catchAnimFrame = requestAnimationFrame(gameLoop);
    }

    if (catchAnimFrame) cancelAnimationFrame(catchAnimFrame);
    catchAnimFrame = requestAnimationFrame(gameLoop);
  }

  function winStage1() {
    isStage1Active = false;
    if (catchAnimFrame) cancelAnimationFrame(catchAnimFrame);
    playVictoryFanfare();
    triggerConfetti(3500);

    // 解鎖第 2 關
    unlockedMaxStage = Math.max(unlockedMaxStage, 2);
    updateStepperUI();

    // 原地展開通關成就卡，絕不跳出阻擋彈窗！
    const clearBanner = document.getElementById('s1-clear-banner');
    if (clearBanner) {
      clearBanner.style.display = 'flex';
      clearBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // ==========================================
  // 6. 第二關：拍立得母子時光翻牌 (一頁式・零遮蔽彈窗體驗)
  // 3 篇章 Tabs、5 秒記憶倒數、即時下方展開回憶卡、珍藏迷你相簿
  // ==========================================
  let stage2CurrentLevelIdx = 0;
  let stage2Levels = [];
  let memoryCardsData = [];
  let flippedCards = [];
  let matchedPairs = 0;
  let targetPairs = 6;
  let canFlip = true;
  let previewTimer = null;
  let isPreviewing = false;

  // 記錄各篇章已解鎖的卡片 ID
  const unlockedCardIds = new Set();

  function initStage2() {
    stage2Levels = (config.stage2 && config.stage2.levels) || [];
    if (!stage2Levels || stage2Levels.length === 0) {
      stage2Levels = [
        {
          level: 1,
          title: "初生相伴・天使降臨 🍼",
          intro: (config.stage2 && config.stage2.intro) || "",
          cards: (config.stage2 && config.stage2.cards) || []
        }
      ];
    }

    // 篇章 Tabs 切換綁定
    const tabBtns = document.querySelectorAll('.chapter-tab');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lvl = parseInt(btn.dataset.level, 10);
        switchStage2Chapter(lvl);
      });
    });

    // 重新記憶按鈕
    const restartBtn = document.getElementById('s2-restart-level-btn');
    if (restartBtn) {
      restartBtn.onclick = () => {
        startStage2Chapter(stage2CurrentLevelIdx, true);
      };
    }

    // 偷看按鈕
    const peekBtn = document.getElementById('s2-peek-btn');
    if (peekBtn) {
      peekBtn.onclick = () => handlePeekClick(3);
    }

    // 下一章節按鈕
    const nextChapterBtn = document.getElementById('s2-next-chapter-btn');
    if (nextChapterBtn) {
      nextChapterBtn.onclick = () => {
        const nextIdx = (stage2CurrentLevelIdx + 1) % stage2Levels.length;
        switchStage2Chapter(nextIdx);
      };
    }

    // 載入第 1 篇章
    startStage2Chapter(0, false);
  }

  function switchStage2Chapter(levelIdx) {
    stage2CurrentLevelIdx = levelIdx;

    // 更新 Tab 高亮
    document.querySelectorAll('.chapter-tab').forEach(tab => {
      if (parseInt(tab.dataset.level, 10) === levelIdx) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    startStage2Chapter(levelIdx, true);
  }

  function startStage2Chapter(levelIdx, autoStartCountdown = true) {
    if (previewTimer) {
      clearInterval(previewTimer);
      previewTimer = null;
    }

    stage2CurrentLevelIdx = levelIdx;
    const levelData = stage2Levels[levelIdx] || stage2Levels[0];
    const rawCards = levelData.cards || [];
    targetPairs = rawCards.length;
    matchedPairs = 0;
    flippedCards = [];
    canFlip = false;
    isPreviewing = true;

    // 更新 UI 文字
    const levelName = document.getElementById('s2-level-name');
    if (levelName) levelName.textContent = levelData.title;

    const introEl = document.getElementById('s2-intro');
    if (introEl && levelData.intro) introEl.textContent = levelData.intro;

    document.getElementById('matched-pairs-count').textContent = '0';
    document.getElementById('s2-level-complete-card').style.display = 'none';

    // 產生配對卡牌資料 (12 張)
    memoryCardsData = [];
    rawCards.forEach(item => {
      memoryCardsData.push({ ...item, uid: item.id + '-a' });
      memoryCardsData.push({ ...item, uid: item.id + '-b' });
    });

    // 洗牌
    for (let i = memoryCardsData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [memoryCardsData[i], memoryCardsData[j]] = [memoryCardsData[j], memoryCardsData[i]];
    }

    // 渲染卡片網格
    const grid = document.getElementById('cards-grid');
    grid.innerHTML = '';

    memoryCardsData.forEach(cardItem => {
      const cardEl = document.createElement('div');
      cardEl.className = 'memory-card flipped'; // 開局翻開
      cardEl.dataset.id = cardItem.id;
      cardEl.dataset.uid = cardItem.uid;

      cardEl.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">
          <img src="${cardItem.image}" alt="母子回憶照片" loading="lazy">
        </div>
      `;

      cardEl.addEventListener('click', () => handleCardClick(cardEl, cardItem));
      grid.appendChild(cardEl);
    });

    // 渲染本篇章迷你珍藏相簿 (6 格)
    renderChapterAlbum(rawCards);

    // 啟動 5 秒倒數記憶
    const previewSecs = (config.stage2 && config.stage2.previewSeconds) || 5;
    runPreviewCountdown(previewSecs);
  }

  function renderChapterAlbum(cards) {
    const albumGrid = document.getElementById('unlocked-album-grid');
    if (!albumGrid) return;
    albumGrid.innerHTML = '';

    cards.forEach(card => {
      const thumb = document.createElement('div');
      const isUnlocked = unlockedCardIds.has(card.id);
      thumb.className = `album-thumb ${isUnlocked ? 'unlocked' : 'locked'}`;
      thumb.id = `album-thumb-${card.id}`;
      thumb.title = isUnlocked ? card.date : '尚未解鎖的回憶';

      if (isUnlocked) {
        thumb.innerHTML = `<img src="${card.image}" alt="${card.date}">`;
      } else {
        thumb.textContent = '🔒';
      }

      thumb.addEventListener('click', () => {
        if (unlockedCardIds.has(card.id)) {
          showInlineMemory(card);
        }
      });

      albumGrid.appendChild(thumb);
    });
  }

  function runPreviewCountdown(seconds) {
    canFlip = false;
    isPreviewing = true;

    const banner = document.getElementById('memory-countdown-banner');
    const textEl = document.getElementById('countdown-text');
    const barFill = document.getElementById('countdown-bar-fill');

    if (banner) banner.style.display = 'block';
    if (textEl) textEl.innerHTML = `快速記憶時間：<strong id="countdown-num">${seconds}</strong> 秒`;
    if (barFill) barFill.style.width = '100%';

    initAudio();
    playMusicBoxNote(880, 0.35, 0.08);

    let currentSec = seconds;
    previewTimer = setInterval(() => {
      currentSec--;
      const currentNumEl = document.getElementById('countdown-num');
      if (currentNumEl) currentNumEl.textContent = currentSec;

      if (barFill) {
        const pct = Math.max(0, (currentSec / seconds) * 100);
        barFill.style.width = `${pct}%`;
      }

      if (currentSec > 0) {
        playMusicBoxNote(880 + (seconds - currentSec) * 40, 0.2, 0.06);
      } else {
        clearInterval(previewTimer);
        previewTimer = null;

        if (textEl) textEl.innerHTML = '🔒 蓋牌！請翻出相同的回憶照片～';
        playFlipSound();

        const allCards = document.querySelectorAll('#cards-grid .memory-card');
        allCards.forEach(c => c.classList.remove('flipped'));

        setTimeout(() => {
          canFlip = true;
          isPreviewing = false;
          if (banner) banner.style.display = 'none';
        }, 550);
      }
    }, 1000);
  }

  function handlePeekClick(seconds = 3) {
    if (isPreviewing || !canFlip) return;
    canFlip = false;
    isPreviewing = true;

    playFlipSound();
    const unmatchedCards = document.querySelectorAll('#cards-grid .memory-card:not(.matched)');
    unmatchedCards.forEach(c => c.classList.add('flipped'));

    const banner = document.getElementById('memory-countdown-banner');
    const textEl = document.getElementById('countdown-text');
    const barFill = document.getElementById('countdown-bar-fill');

    if (banner) banner.style.display = 'block';
    if (textEl) textEl.innerHTML = `偷看記憶中：<strong id="countdown-num">${seconds}</strong> 秒`;
    if (barFill) barFill.style.width = '100%';

    let sec = seconds;
    const peekTimer = setInterval(() => {
      sec--;
      const numEl = document.getElementById('countdown-num');
      if (numEl) numEl.textContent = sec;
      if (barFill) barFill.style.width = `${(sec / seconds) * 100}%`;

      if (sec <= 0) {
        clearInterval(peekTimer);
        playFlipSound();
        unmatchedCards.forEach(c => c.classList.remove('flipped'));
        setTimeout(() => {
          canFlip = true;
          isPreviewing = false;
          if (banner) banner.style.display = 'none';
        }, 500);
      }
    }, 1000);
  }

  function handleCardClick(cardEl, cardItem) {
    if (!canFlip || isPreviewing) return;
    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

    playFlipSound();
    cardEl.classList.add('flipped');
    flippedCards.push({ el: cardEl, data: cardItem });

    if (flippedCards.length === 2) {
      canFlip = false;
      const [first, second] = flippedCards;

      if (first.data.id === second.data.id) {
        // 配對成功！
        setTimeout(() => {
          first.el.classList.add('matched');
          second.el.classList.add('matched');
          matchedPairs++;
          document.getElementById('matched-pairs-count').textContent = matchedPairs;
          playMatchSound();
          triggerConfetti(1500);

          // 解鎖卡片
          unlockedCardIds.add(first.data.id);

          // 【零彈窗】在下方頁面內即時展開回憶卡片
          showInlineMemory(first.data);

          // 更新迷你相簿縮圖
          const thumbEl = document.getElementById(`album-thumb-${first.data.id}`);
          if (thumbEl) {
            thumbEl.className = 'album-thumb unlocked';
            thumbEl.innerHTML = `<img src="${first.data.image}" alt="${first.data.date}">`;
            thumbEl.title = first.data.date;
          }

          flippedCards = [];
          canFlip = true;

          // 判斷該篇章是否全部配對完成
          if (matchedPairs >= targetPairs) {
            handleChapterWin();
          }
        }, 320);
      } else {
        // 配對失敗，蓋回去
        setTimeout(() => {
          first.el.classList.remove('flipped');
          second.el.classList.remove('flipped');
          flippedCards = [];
          canFlip = true;
        }, 800);
      }
    }
  }

  // 在頁面內展示最新珍藏回憶 (完全不彈出 Modal 遮罩)
  function showInlineMemory(cardData) {
    const wrap = document.getElementById('inline-showcase-wrap');
    const photo = document.getElementById('showcase-photo');
    const date = document.getElementById('showcase-date');
    const caption = document.getElementById('showcase-caption');

    if (!wrap || !photo) return;
    photo.src = cardData.image;
    date.textContent = cardData.date;
    caption.textContent = cardData.caption;
    wrap.style.display = 'block';

    wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function handleChapterWin() {
    playVictoryFanfare();
    triggerConfetti(3500);

    // 通關後解鎖第 3 關！
    unlockedMaxStage = Math.max(unlockedMaxStage, 3);
    updateStepperUI();

    const levelCard = document.getElementById('s2-level-complete-card');
    const titleEl = document.getElementById('s2-complete-title');
    const descEl = document.getElementById('s2-complete-desc');
    const nextBtn = document.getElementById('s2-next-chapter-btn');
    const s2NextBtn = document.getElementById('s2-next-btn');

    if (levelCard) {
      const curLvl = stage2CurrentLevelIdx + 1;
      const totalLvls = stage2Levels.length;

      if (curLvl < totalLvls) {
        titleEl.textContent = `🎉 篇章 ${curLvl} 全部回憶已珍藏！`;
        descEl.textContent = `太厲害了！已收錄本篇章 6 段溫馨時光～可以繼續挑戰下一篇章，或直接前進第 3 關！`;
        if (nextBtn) {
          nextBtn.textContent = `繼續挑戰篇章 ${curLvl + 1} ➔`;
          nextBtn.style.display = 'inline-block';
        }
      } else {
        titleEl.textContent = `🎉 恭喜！3 大篇章 18 段回憶全部珍藏完畢！✨`;
        descEl.textContent = `從產房初啼到 120 天甜笑，每一個瞬間都是我們家最珍貴的寶藏 ❤️`;
        if (nextBtn) {
          nextBtn.style.display = 'none';
        }
      }

      levelCard.style.display = 'block';
      levelCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (s2NextBtn) {
      s2NextBtn.style.display = 'block';
    }
  }

  // ==========================================
  // 7. 第三關：厚切立體浮雕母子拼圖 (Jigsaw Puzzle)
  // ==========================================
  const puzzleSize = 3;
  let puzzleState = [];
  let selectedPieceIndex = null;

  function initStage3() {
    const imgUrl = (config.stage3 && config.stage3.fullImage) || 'images/puzzle_mom_baby_sq.jpg';
    const hintImg = document.getElementById('puzzle-hint-img');
    if (hintImg) hintImg.src = imgUrl;

    selectedPieceIndex = null;
    puzzleState = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    // 打亂拼圖
    do {
      for (let i = puzzleState.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [puzzleState[i], puzzleState[j]] = [puzzleState[j], puzzleState[i]];
      }
    } while (isPuzzleSolved());

    renderPuzzleBoard(imgUrl);

    // 一鍵通關作弊按鈕
    const autoBtn = document.getElementById('puzzle-auto-btn');
    if (autoBtn) {
      autoBtn.onclick = () => {
        puzzleState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        selectedPieceIndex = null;
        renderPuzzleBoard(imgUrl);
        checkPuzzleWin();
      };
    }
  }

  function renderPuzzleBoard(imgUrl) {
    const board = document.getElementById('puzzle-board');
    if (!board) return;
    board.innerHTML = '';

    puzzleState.forEach((pieceIdx, gridPos) => {
      const piece = document.createElement('div');
      piece.className = 'puzzle-piece';
      if (selectedPieceIndex === gridPos) {
        piece.classList.add('selected');
      }

      const row = Math.floor(pieceIdx / puzzleSize);
      const col = pieceIdx % puzzleSize;
      const xPercent = (col / (puzzleSize - 1)) * 100;
      const yPercent = (row / (puzzleSize - 1)) * 100;

      piece.style.backgroundImage = `url('${imgUrl}')`;
      piece.style.backgroundPosition = `${xPercent}% ${yPercent}%`;

      piece.addEventListener('click', () => handlePuzzleClick(gridPos, imgUrl));
      board.appendChild(piece);
    });
  }

  function handlePuzzleClick(gridPos, imgUrl) {
    playPuzzleSwapSound();

    if (selectedPieceIndex === null) {
      selectedPieceIndex = gridPos;
      renderPuzzleBoard(imgUrl);
    } else if (selectedPieceIndex === gridPos) {
      selectedPieceIndex = null;
      renderPuzzleBoard(imgUrl);
    } else {
      const temp = puzzleState[selectedPieceIndex];
      puzzleState[selectedPieceIndex] = puzzleState[gridPos];
      puzzleState[gridPos] = temp;
      selectedPieceIndex = null;
      renderPuzzleBoard(imgUrl);

      checkPuzzleWin();
    }
  }

  function isPuzzleSolved() {
    for (let i = 0; i < puzzleState.length; i++) {
      if (puzzleState[i] !== i) return false;
    }
    return true;
  }

  function checkPuzzleWin() {
    if (isPuzzleSolved()) {
      playVictoryFanfare();
      triggerConfetti(4500);

      // 解鎖第 4 關 (Grand Finale)
      unlockedMaxStage = Math.max(unlockedMaxStage, 4);
      updateStepperUI();

      const clearBanner = document.getElementById('s3-clear-banner');
      if (clearBanner) {
        clearBanner.style.display = 'flex';
        clearBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  // ==========================================
  // 8. 終極彩蛋：火漆信封與愛妻兌換券 (The Grand Finale)
  // ==========================================
  function initFinale() {
    const finaleConf = config.finale || {};

    // 填入信件內容
    const letterBody = document.getElementById('letter-content');
    if (letterBody) {
      letterBody.innerHTML = '';
      const greeting = document.createElement('h3');
      greeting.style.color = '#a64c61';
      greeting.style.marginBottom = '12px';
      greeting.style.fontSize = '16px';
      greeting.textContent = finaleConf.letterGreeting || '親愛的老婆：';
      letterBody.appendChild(greeting);

      const paragraphs = finaleConf.letterParagraphs || ['生日快樂！愛妳喔！'];
      paragraphs.forEach(pText => {
        const p = document.createElement('p');
        p.textContent = pText;
        letterBody.appendChild(p);
      });
    }

    // 火漆蠟印點擊拆信
    const sealBtn = document.getElementById('wax-seal-btn');
    if (sealBtn) {
      sealBtn.onclick = () => {
        playSealOpenSound();
        triggerConfetti(2000);
        sealBtn.style.transform = 'scale(1.22) rotate(15deg)';
        setTimeout(() => {
          sealBtn.style.transform = 'scale(1)';
        }, 300);
      };
    }

    // 渲染專屬打孔燙金兌換券
    const couponsList = document.getElementById('coupons-list');
    if (couponsList) {
      couponsList.innerHTML = '';
      const coupons = finaleConf.coupons || [];

      coupons.forEach(coupon => {
        const ticket = document.createElement('div');
        ticket.className = 'coupon-ticket';
        ticket.id = `coupon-${coupon.id}`;

        const tagHtml = coupon.tag ? `<span class="coupon-tag">${coupon.tag}</span>` : '';
        const btnLabel = coupon.btnText || '立即使用 ✦';

        ticket.innerHTML = `
          <div class="coupon-info">
            <div class="coupon-icon">${coupon.icon || '🎁'}</div>
            <div>
              <div class="coupon-title">
                ${coupon.title}
                ${tagHtml}
              </div>
              <div class="coupon-desc">${coupon.desc}</div>
            </div>
          </div>
          <button class="coupon-use-btn" data-id="${coupon.id}">${btnLabel}</button>
        `;

        const useBtn = ticket.querySelector('.coupon-use-btn');
        useBtn.addEventListener('click', () => {
          playStampSound();
          ticket.classList.add('used');
          useBtn.style.display = 'none';

          const stamp = document.createElement('div');
          stamp.className = 'stamp-mark';
          stamp.textContent = coupon.stampText || '已兌換';
          ticket.appendChild(stamp);

          triggerConfetti(2800);
          setTimeout(() => {
            const defaultMsg = `🎉 恭喜老婆兌換【${coupon.title}】！\n老公已收到指令，即刻全力執行，讓老婆好好放鬆！❤️`;
            alert(coupon.alertMsg || defaultMsg);
          }, 150);
        });

        couponsList.appendChild(ticket);
      });
    }
  }

  // ==========================================
  // 8.5 專屬通關密碼保護系統 (Passcode: 1009)
  // ==========================================
  function initLockScreen() {
    const lockScreen = document.getElementById('lock-screen');
    const lockCard = document.getElementById('lock-card');
    const lockError = document.getElementById('lock-error-msg');
    const lockHint = document.getElementById('lock-hint-text');
    if (!lockScreen) return;

    const expectedPasscode = (config && config.passcode) || "1009";
    if (config && config.passcodeHint && lockHint) {
      lockHint.textContent = config.passcodeHint;
    }

    // 檢查 sessionStorage 是否已解鎖過
    if (sessionStorage.getItem('birthday_unlocked') === expectedPasscode) {
      lockScreen.style.display = 'none';
      return;
    }

    let currentPin = "";
    const maxPinLen = 4;
    const dots = [
      document.getElementById('dot-0'),
      document.getElementById('dot-1'),
      document.getElementById('dot-2'),
      document.getElementById('dot-3')
    ];

    function updatePinDots() {
      dots.forEach((dot, idx) => {
        if (!dot) return;
        dot.className = 'pin-dot';
        if (idx < currentPin.length) {
          dot.classList.add('filled');
        }
      });
      if (lockError) lockError.classList.remove('visible');
    }

    function checkPasscode() {
      if (currentPin === expectedPasscode) {
        // 解鎖成功！
        playMatchSound();
        dots.forEach(d => {
          if (d) {
            d.classList.remove('filled');
            d.classList.add('success');
          }
        });
        triggerConfetti(3500);
        sessionStorage.setItem('birthday_unlocked', expectedPasscode);

        // 自動嘗試播放主題曲
        if (typeof autoStartBGMOnFirstGesture === 'function') {
          autoStartBGMOnFirstGesture();
        }

        setTimeout(() => {
          lockScreen.classList.add('unlocked');
          setTimeout(() => {
            lockScreen.style.display = 'none';
          }, 550);
        }, 350);
      } else {
        // 密碼錯誤
        playPoopSound();
        dots.forEach(d => {
          if (d) {
            d.classList.remove('filled');
            d.classList.add('error');
          }
        });
        if (lockCard) {
          lockCard.classList.remove('shake');
          void lockCard.offsetWidth; // trigger reflow
          lockCard.classList.add('shake');
        }
        if (lockError) {
          lockError.textContent = "密碼錯誤唷～提示是媽咪的生日 🎂 (1009)";
          lockError.classList.add('visible');
        }
        setTimeout(() => {
          currentPin = "";
          updatePinDots();
        }, 700);
      }
    }

    function handleKeyPress(key) {
      if (currentPin.length >= maxPinLen) return;
      playMusicBoxNote(520 + currentPin.length * 130, 0.35, 0.08);
      currentPin += key;
      updatePinDots();
      if (currentPin.length === maxPinLen) {
        setTimeout(checkPasscode, 150);
      }
    }

    function handleBackspace() {
      if (currentPin.length > 0) {
        playMusicBoxNote(320, 0.25, 0.06);
        currentPin = currentPin.slice(0, -1);
        updatePinDots();
      }
    }

    function handleClear() {
      currentPin = "";
      updatePinDots();
    }

    // 虛擬數字鍵盤按鈕點擊
    document.querySelectorAll('#lock-keypad .key-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        initAudio();
        const key = btn.dataset.key;
        const action = btn.dataset.action;
        if (key !== undefined) {
          handleKeyPress(key);
        } else if (action === 'backspace') {
          handleBackspace();
        } else if (action === 'clear') {
          handleClear();
        }
      });
    });

    // 實體鍵盤支援
    window.addEventListener('keydown', (e) => {
      if (lockScreen.style.display === 'none' || lockScreen.classList.contains('unlocked')) return;
      if (e.key >= '0' && e.key <= '9') {
        initAudio();
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        initAudio();
        handleBackspace();
      } else if (e.key === 'Escape') {
        handleClear();
      }
    });

    updatePinDots();
  }

  // ==========================================
  // 9. 系統啟動與事件綁定
  // ==========================================
  function initGame() {
    initLockScreen();
    initAmbientBackground();
    initConfetti();
    initNavigation();

    // 填入首頁資訊
    if (config.wifeName) {
      document.getElementById('welcome-title').textContent = `${config.wifeName}，${config.celebrationTitle || '生日快樂！'}`;
    }
    if (config.themeSubtitle) {
      document.getElementById('welcome-sub').textContent = config.themeSubtitle;
    }

    // 音效開關
    const sfxBtn = document.getElementById('sfx-toggle');
    if (sfxBtn) {
      sfxBtn.onclick = () => {
        soundEnabled = !soundEnabled;
        sfxBtn.textContent = soundEnabled ? '🔔' : '🔕';
        sfxBtn.style.opacity = soundEnabled ? '1' : '0.5';
      };
    }

    // 背景音樂：專屬主題曲 (A tiny hand in mine tonight)
    const bgmBtn = document.getElementById('bgm-toggle');
    const bgmAudio = document.getElementById('bgm-player');
    if (config.bgmUrl && bgmAudio) {
      bgmAudio.src = config.bgmUrl;
    }

    function playBGM() {
      if (!bgmAudio) return;
      initAudio();
      bgmAudio.play().then(() => {
        bgmPlaying = true;
        if (bgmBtn) {
          bgmBtn.textContent = '🎶';
          bgmBtn.classList.add('playing');
          bgmBtn.title = (config.bgmTitle || '主題曲') + ' (播放中，點擊可暫停)';
        }
      }).catch(e => {
        console.log('Autoplay deferred until user interaction');
      });
    }

    function pauseBGM() {
      if (!bgmAudio) return;
      bgmAudio.pause();
      bgmPlaying = false;
      if (bgmBtn) {
        bgmBtn.textContent = '🎵';
        bgmBtn.classList.remove('playing');
        bgmBtn.title = (config.bgmTitle || '主題曲') + ' (已暫停，點擊播放)';
      }
    }

    if (bgmBtn && bgmAudio) {
      bgmBtn.onclick = (e) => {
        e.stopPropagation();
        initAudio();
        if (!bgmPlaying) {
          playBGM();
          showToast(`🎶 正在播放主題曲：${config.bgmTitle || 'A Tiny Hand in Mine Tonight'}`);
        } else {
          pauseBGM();
          showToast('🔇 已暫停背景音樂');
        }
      };
    }

    // 當使用者在頁面上進行任何首次互動（例如點擊開啟愛的冒險），自動開啟主題曲播放
    function autoStartBGMOnFirstGesture() {
      if (!bgmPlaying) {
        playBGM();
      }
    }

    window.addEventListener('click', autoStartBGMOnFirstGesture, { once: true });
    window.addEventListener('touchstart', autoStartBGMOnFirstGesture, { once: true });

    // 第一關開始按鈕
    const startCatchBtn = document.getElementById('start-catch-btn');
    if (startCatchBtn) {
      startCatchBtn.onclick = () => startStage1();
    }
    const catchContainer = document.getElementById('catch-canvas-container');
    if (catchContainer) {
      catchContainer.addEventListener('click', () => {
        if (!isStage1Active) startStage1();
      });
    }

    // 初始調整一次第一關 Canvas 尺寸
    resizeCatchCanvas();
    window.addEventListener('resize', resizeCatchCanvas);

    // 初始化第二關翻牌
    initStage2();

    // 初始化第三關拼圖
    initStage3();

    // 初始化終章情書與兌換券
    initFinale();
  }

  window.addEventListener('DOMContentLoaded', initGame);
})();
