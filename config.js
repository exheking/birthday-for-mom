// ==========================================
// 💖 遊戲自訂設定檔 (Config)
// 焦點：生活回憶記錄、溫馨日常與真誠祝福
// ==========================================

window.GAME_CONFIG = {
  // 1. 基本資訊
  wifeName: "親愛的老婆",
  celebrationTitle: "生日快樂！Happy Birthday 🎂",
  themeSubtitle: "祝親愛的老婆生日快樂！一起重溫我們的生活回憶 🎂",

  // 1.5 專屬通關密碼保護 (1009)
  passcode: "1009",
  passcodeHint: "（小提示：媽咪最特別的幸運紀念日 🎂 10/09）",

  // 2. 專屬主題曲背景音樂
  bgmUrl: "A_tiny_hand_in_mine_tonight.mp3",
  bgmTitle: "A Tiny Hand in Mine Tonight 🎶",

  // 3. 第一關：接住小饅頭所有的愛 (Catching Game)
  stage1: {
    title: "第一關：接住小饅頭所有的愛 👶🍼",
    intro: "飄落著小饅頭一張張可愛照片～推著推車接住小卡片！",
    targetScore: 500, // 500 分通關
    items: [
      { type: "baby", score: 30, label: "小饅頭卡片" },
      { type: "crown", text: "👑", score: 50, label: "生日皇冠卡" },
      { type: "bottle", text: "🍼", score: 25, label: "小奶瓶卡" },
      { type: "heart", text: "💖", score: 20, label: "愛心卡" },
      { type: "poop", text: "💩", score: -15, label: "便便卡 (要避開唷!)" }
    ]
  },

  // 4. 第二關：母子時光回憶寶盒 (Memory Flip Game - 3 關不同卡牌，先看5秒再蓋牌)
  stage2: {
    title: "第二關：母子時光記憶寶盒 📸",
    intro: "每關開始先給妳 5 秒快速記憶，隨後蓋牌！翻出成對的幸福印記～",
    previewSeconds: 5,
    levels: [
      {
        level: 1,
        title: "第 1 關：初生相伴・初見面 🍼",
        intro: "產房初啼與月子時光，記錄小饅頭剛來到身邊的時刻。",
        cards: [
          {
            id: "1-1",
            image: "images/mom_baby_1_born.jpg",
            date: "產房初次見面",
            caption: "待產過程辛苦了，小饅頭平安出生，第一次趴在媽媽胸口肌膚接觸，安靜地聽著心跳。"
          },
          {
            id: "1-2",
            image: "images/mom_baby_2_sleep.jpg",
            date: "病房安穩熟睡",
            caption: "剛出生的小饅頭小小一隻，在病房裡躺在媽媽身邊睡得很香。"
          },
          {
            id: "1-3",
            image: "images/mom_baby_round1_5_selfie.jpg",
            date: "產房自拍留念",
            caption: "生產順利結束後，在產房裡跟小饅頭拍下的第一張紀念自拍。"
          },
          {
            id: "1-4",
            image: "images/mom_baby_round1_6_sleep2.jpg",
            date: "病房同床休息",
            caption: "在病房休息時，小饅頭靠在媽媽枕頭旁邊一起睡覺。"
          },
          {
            id: "1-5",
            image: "images/mom_baby_3_home.jpg",
            date: "滿月居家時光",
            caption: "小饅頭滿月了，臉頰圓滾滾的，抱在懷裡安安穩穩的。"
          },
          {
            id: "1-6",
            image: "images/mom_baby_4_bath.jpg",
            date: "幫小饅頭洗澡日常",
            caption: "在家幫小饅頭洗澡的日常，每次泡溫水他都滿放鬆的。"
          }
        ]
      },
      {
        level: 2,
        title: "第 2 關：日常散步與家庭生活 🌿",
        intro: "記錄我們一家三口的生活日常與重要時刻。",
        cards: [
          {
            id: "2-1",
            image: "images/baby_card_15.jpg",
            date: "藍色餐椅新生活",
            caption: "小饅頭坐在專屬餐椅上，笑得很開心，越來越有大寶寶的樣子了。"
          },
          {
            id: "2-2",
            image: "images/mom_baby_6_look.jpg",
            date: "背巾探頭好奇張望",
            caption: "用背巾背著小饅頭，他探出小腦袋東張西望，好奇地打量四周。"
          },
          {
            id: "2-3",
            image: "images/mom_baby_round2_3_care.jpg",
            date: "出月中回家合照",
            caption: "從月子中心結業返家的日子，抱著越來越結實的小饅頭，我們一家正式開啟了育兒生活。看著妳抱著寶寶的眼神，希望未來能好充實好甜蜜！"
          },
          {
            id: "2-4",
            image: "images/mom_baby_round2_4_birth_fam.jpg",
            date: "產房全家合照",
            caption: "小饅頭誕生當天，在產房裡留下的第一張全家合照。"
          },
          {
            id: "2-5",
            image: "images/mom_baby_round2_5_pregnancy.jpg",
            date: "步道孕期散步",
            caption: "孕期一起去步道散步時拍的照片，記錄肚子慢慢變大的過程。"
          },
          {
            id: "2-6",
            image: "images/mom_baby_round2_6_wedding.jpg",
            date: "結婚登記留念",
            caption: "2025 年我們登記結婚的那一天，兩個人拿著手板在背板前合照，正式開啟了一起生活的新階段。"
          }
        ]
      },
      {
        level: 3,
        title: "第 3 關：小饅頭成長點滴 🎈",
        intro: "小饅頭慢慢長大，記錄各個階段可愛的模樣。",
        cards: [
          {
            id: "3-1",
            image: "images/stage2_l3_1.jpg",
            date: "小獅子造型衣",
            caption: "穿上連帽小獅子衣服，坐在那裡開心地大笑。"
          },
          {
            id: "3-2",
            image: "images/stage2_l3_2.jpg",
            date: "檸檬衣服練習抬頭",
            caption: "穿著檸檬衣服趴在地墊上練習抬頭，已經很有力氣了。"
          },
          {
            id: "3-3",
            image: "images/stage2_l3_3.jpg",
            date: "嬰兒床新生兒小衣",
            caption: "剛出生不久躺在嬰兒床上的樣子，那時候還小小一隻。"
          },
          {
            id: "3-4",
            image: "images/stage2_l3_4.jpg",
            date: "躺在床上舉小手",
            caption: "躺在床上舉著小手看鏡頭，眼睛亮晶晶的。"
          },
          {
            id: "3-5",
            image: "images/stage2_l3_5.jpg",
            date: "躺床開懷笑瞇眼",
            caption: "心情很好的時候，躺在床上直接笑瞇了眼睛。"
          },
          {
            id: "3-6",
            image: "images/stage2_l3_6.jpg",
            date: "汽座戴條紋帽",
            caption: "坐在安全汽座提籃裡戴著條紋帽子，準備一起出門。"
          }
        ]
      }
    ]
  },

  // 5. 第三關：拼出最美的母子時光 (Photo Jigsaw Puzzle)
  // 精選 4 個月 120 天慶祝，媽咪抱著開懷大笑的昊澄（小饅頭）
  stage3: {
    title: "第三關：拼出最美母子時光 🧩",
    intro: "點擊兩張碎片即可交換位置，拼出媽咪與小饅頭 120 天紀念的甜蜜合照！",
    fullImage: "images/puzzle_mom_baby_sq.jpg",
    gridSize: 3,
    completedMessage: "完成拼圖了！4 個月 120 天紀念，祝老婆生日快樂！❤️"
  },

  // 6. 終極彩蛋：生日信件與專屬好禮兌換券 (The Grand Finale)
  finale: {
    envelopeTitle: "老婆親啟 💌",
    letterGreeting: "親愛的老婆：",
    letterParagraphs: [
      "生日快樂！🎂 祝妳新的一歲順順利利、健康開心。",
      "這一年家裡多了小饅頭，生活節奏變了許多。從懷孕、生產到現在每天餵奶、哄睡、換尿布，妳真的辛苦了。",
      "看著小饅頭一天天長大，會笑、會抬頭、認得人，都是我們一起努力生活的過程。",
      "照顧寶寶之餘，也要留時間給自己好好放鬆休息。今天的家務和顧娃就交給我，好好享受妳的生日吧！"
    ],
    // 專屬好禮兌換券（老婆可直接在手機上點擊領取與兌換！）
    coupons: [
      {
        id: "c1",
        title: "今日大餐券 🍽️",
        tag: "今日獲取中 ⏳",
        desc: "正在獲得中，準備領取！這次大餐由爸爸搞定寶寶，專心陪老婆好好享用大餐！",
        btnText: "準備領取 ✦",
        stampText: "已領取",
        alertMsg: "🎉 恭喜老婆領取【今日大餐券】！\n爸爸全力搞定寶寶，請老婆專心享用今日美味大餐！❤️",
        icon: "🍽️"
      },
      {
        id: "c2",
        title: "亮眼的眼鏡券 👓✨",
        tag: "今日獲取中 🎁",
        desc: "今日獲取中，準備領取！特別挑選的質感亮眼新眼鏡，為親愛的老婆增添迷人風采！",
        btnText: "準備領取 ✦",
        stampText: "已領取",
        alertMsg: "🎉 恭喜老婆領取【亮眼的眼鏡券】！\n新眼鏡準備就緒，祝老婆戴上閃閃發亮、每天好心情！❤️",
        icon: "👓"
      },
      {
        id: "c3",
        title: "按腳券 30 分鐘 🦶✨",
        desc: "老公專屬 30 分鐘腳底與小腿舒壓按摩，好好放鬆一下！",
        btnText: "立即使用 ✦",
        stampText: "已兌換",
        alertMsg: "🎉 恭喜老婆兌換【按腳券 30 分鐘】！\n老公已收到指令，今晚就為老婆送上專屬舒壓按摩！❤️",
        icon: "🦶"
      },
      {
        id: "c4",
        title: "放風券 🛍️",
        desc: "爸爸全天一打一顧小饅頭，老婆自由出門逛街散步放風，享受專屬個人時光！",
        btnText: "立即使用 ✦",
        stampText: "已兌換",
        alertMsg: "🎉 恭喜老婆兌換【放風券】！\n爸爸全天顧娃模式待命中，老婆隨時開啟專屬放風行程！❤️",
        icon: "🛍️"
      }
    ]
  }
};
