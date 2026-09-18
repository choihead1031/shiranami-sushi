const dict = {
  ja: {
    "nav.news": "新着情報",
    "nav.craft": "こだわり",
    "nav.about": "店舗情報",
    "nav.reserve": "ご予約",
    "hero.kana": "しらなみ",
    "hero.sub": "卓越し た技術",
    "news.title": "おしらせ",
    "news.h": "秋季おまかせコースのご案内",
    "news.p": "秋の初鰻、北寄、そして新米のシャリ。季節の移ろいを一皿ずつお届けするおまかせを、9月よりご用意しております。",
    "news.h2": "ランチ席を増設いたしました",
    "news.p2": "平日ランチにカウンター2席を増設。ご予約はお電話またはフォームよりお願いいたします。",
    "craft.title": "こだわり",
    "craft.1t": "一握入魂",
    "craft.1p": "すしは、味はもとより、見た目の美しさや握りの所作もおいしさのひとつ。ネタ・シャリ・わさびの三位一体を、温度と湿度ごと設計します。",
    "craft.2t": "凛・清",
    "craft.2p": "カウンターを舞台に、伝統的ですっきりとした内装。玄関の暖簿から天井まで、江戸前らしい清々しい空気感を大切にしています。",
    "craft.3t": "すし導",
    "craft.3p": "「食事」は人を良くする事。技と知だけでなく、品性と感性を磨き、一席ごとの時間をお預かりします。",
    "about.title": "店舗情報",
    "about.chef": "白波 慎一郎",
    "about.bio": "東京で十年修業ののち独立。江戸前の仕事を軸に、香港の海の幸と向き合う。旬を急がず、熟成と塩梅で季節を語る。",
    "about.loc": "所在地",
    "about.hours": "営業時間",
    "about.hoursv": "火–日 12:00–14:00 / 18:00–22:00<br />月曜定休",
    "about.tel": "電話",
    "reserve.title": "ご予約",
    "reserve.lead": "おまかせのみ。アレルギーはご予約時にお知らせください。",
    "form.name": "お名前",
    "form.date": "ご希望日",
    "form.guests": "人数",
    "form.note": "ご要望",
    "form.send": "送信する",
    "form.ok": "ありがとうございます。スタッフより折り返しご連絡いたします。",
  },
  en: {
    "nav.news": "News",
    "nav.craft": "Craft",
    "nav.about": "About",
    "nav.reserve": "Reserve",
    "hero.kana": "SHIRANAMI",
    "hero.sub": "A practiced hand",
    "news.title": "Notice",
    "news.h": "Autumn omakase now serving",
    "news.p": "First bonito of autumn, hokki clam, and new-harvest shari. A course that follows the season, dish by dish.",
    "news.h2": "Two extra lunch seats",
    "news.p2": "Weekday lunch now has two additional counter seats. Please reserve by phone or the form below.",
    "craft.title": "Commitments",
    "craft.1t": "One nigiri, fully",
    "craft.1p": "Taste, form, and the gesture of the hand are all part of flavour. Fish, rice, and wasabi are composed with temperature and humidity in mind.",
    "craft.2t": "Still and clear",
    "craft.2p": "The counter is the stage. From noren to ceiling, the room is kept spare so Edomae can be felt as air, not ornament.",
    "craft.3t": "A path of sushi",
    "craft.3p": "A meal should leave a person better. Technique is not enough; character and sense are trained so each seat is held with care.",
    "about.title": "The restaurant",
    "about.chef": "Shinichiro Shiranami",
    "about.bio": "After a decade in Tokyo, he opened independently. Edomae method, Hong Kong waters. Season is spoken through ageing and seasoning, never haste.",
    "about.loc": "Address",
    "about.hours": "Hours",
    "about.hoursv": "Tue–Sun 12:00–14:00 / 18:00–22:00<br />Closed Mondays",
    "about.tel": "Tel",
    "reserve.title": "Reservations",
    "reserve.lead": "Omakase only. Please note allergies when you book.",
    "form.name": "Name",
    "form.date": "Preferred date",
    "form.guests": "Guests",
    "form.note": "Notes",
    "form.send": "Send",
    "form.ok": "Thank you. We will write back shortly.",
  },
};

let lang = "ja";

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = dict[lang][key];
    if (value) el.innerHTML = value;
  });
  document.getElementById("langToggle").textContent = lang === "ja" ? "EN" : "JP";
}

document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "ja" ? "en" : "ja";
  applyLang();
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

document.getElementById("reserveForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formOk").classList.remove("hidden");
  e.target.reset();
});

applyLang();
