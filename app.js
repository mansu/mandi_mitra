const crops = [
  {
    name: "Paddy (Rice)",
    states: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana", "Kerala"],
    seasons: ["kharif", "rabi"],
    soils: ["clay", "loam"],
    waterNeed: "high",
    investmentNeed: "high",
    volatilityScore: 2,
    demandTrendPct: 3.1,
    yieldQtlPerAcre: 22,
    farmGatePrice: 2400,
    mandiPrice: 2520,
    lastMonthMandiPrice: 2460,
    costPerAcre: 32000,
  },
  {
    name: "Maize",
    states: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana"],
    seasons: ["kharif", "rabi"],
    soils: ["loam", "red", "black"],
    waterNeed: "medium",
    investmentNeed: "medium",
    volatilityScore: 3,
    demandTrendPct: 4.8,
    yieldQtlPerAcre: 20,
    farmGatePrice: 2100,
    mandiPrice: 2240,
    lastMonthMandiPrice: 2140,
    costPerAcre: 23500,
  },
  {
    name: "Turmeric",
    states: ["Karnataka", "Tamil Nadu", "Telangana", "Andhra Pradesh"],
    seasons: ["kharif"],
    soils: ["red", "loam"],
    waterNeed: "medium",
    investmentNeed: "high",
    volatilityScore: 4,
    demandTrendPct: 6.5,
    yieldQtlPerAcre: 26,
    farmGatePrice: 6400,
    mandiPrice: 6700,
    lastMonthMandiPrice: 6410,
    costPerAcre: 92000,
  },
  {
    name: "Groundnut",
    states: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana"],
    seasons: ["kharif", "rabi"],
    soils: ["sandy", "red", "loam"],
    waterNeed: "low",
    investmentNeed: "medium",
    volatilityScore: 3,
    demandTrendPct: 4.2,
    yieldQtlPerAcre: 11,
    farmGatePrice: 6300,
    mandiPrice: 6550,
    lastMonthMandiPrice: 6420,
    costPerAcre: 34000,
  },
  {
    name: "Cotton",
    states: ["Karnataka", "Andhra Pradesh", "Telangana", "Tamil Nadu"],
    seasons: ["kharif"],
    soils: ["black", "red"],
    waterNeed: "medium",
    investmentNeed: "high",
    volatilityScore: 4,
    demandTrendPct: 5.2,
    yieldQtlPerAcre: 8,
    farmGatePrice: 7600,
    mandiPrice: 7980,
    lastMonthMandiPrice: 7560,
    costPerAcre: 45500,
  },
  {
    name: "Red Chilli",
    states: ["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu"],
    seasons: ["kharif", "rabi"],
    soils: ["red", "black", "loam"],
    waterNeed: "medium",
    investmentNeed: "high",
    volatilityScore: 5,
    demandTrendPct: 7.4,
    yieldQtlPerAcre: 10,
    farmGatePrice: 9800,
    mandiPrice: 10400,
    lastMonthMandiPrice: 9820,
    costPerAcre: 70500,
  },
  {
    name: "Onion",
    states: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana"],
    seasons: ["rabi", "summer"],
    soils: ["loam", "black", "red"],
    waterNeed: "medium",
    investmentNeed: "medium",
    volatilityScore: 5,
    demandTrendPct: 8.1,
    yieldQtlPerAcre: 95,
    farmGatePrice: 1220,
    mandiPrice: 1360,
    lastMonthMandiPrice: 1180,
    costPerAcre: 68500,
  },
  {
    name: "Banana",
    states: ["Tamil Nadu", "Andhra Pradesh", "Karnataka", "Kerala"],
    seasons: ["kharif", "rabi", "summer"],
    soils: ["loam", "clay", "red"],
    waterNeed: "high",
    investmentNeed: "high",
    volatilityScore: 3,
    demandTrendPct: 3.8,
    yieldQtlPerAcre: 135,
    farmGatePrice: 980,
    mandiPrice: 1120,
    lastMonthMandiPrice: 1040,
    costPerAcre: 87000,
  },
  {
    name: "Ragi (Finger Millet)",
    states: ["Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    seasons: ["kharif", "rabi"],
    soils: ["red", "loam", "sandy"],
    waterNeed: "low",
    investmentNeed: "low",
    volatilityScore: 1,
    demandTrendPct: 2.4,
    yieldQtlPerAcre: 12,
    farmGatePrice: 3300,
    mandiPrice: 3380,
    lastMonthMandiPrice: 3340,
    costPerAcre: 16500,
  },
  {
    name: "Sugarcane",
    states: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana"],
    seasons: ["kharif", "rabi"],
    soils: ["clay", "loam", "black"],
    waterNeed: "high",
    investmentNeed: "high",
    volatilityScore: 2,
    demandTrendPct: 1.9,
    yieldQtlPerAcre: 370,
    farmGatePrice: 360,
    mandiPrice: 390,
    lastMonthMandiPrice: 382,
    costPerAcre: 76500,
  },
];

const cropNames = {
  "Paddy (Rice)": {
    kn: "ನೆಲ್ಲಿ (ಅಕ್ಕಿ)",
    ta: "நெல் (அரிசி)",
    te: "వరి (బియ్యం)",
    ml: "നെല് (അരി)",
  },
  Maize: {
    kn: "ಮೆಕ್ಕೆಜೋಳ",
    ta: "மக்காச்சோளம்",
    te: "మొక్కజొన్న",
    ml: "മൈസ്",
  },
  Turmeric: {
    kn: "ಅರಿಶಿನ",
    ta: "மஞ்சள்",
    te: "పసుపు",
    ml: "മഞ്ഞള്",
  },
  Groundnut: {
    kn: "ಕಡಲೆಕಾಯಿ",
    ta: "நிலக்கடலை",
    te: "వేరుసెనగ",
    ml: "നിലക്കടല",
  },
  Cotton: {
    kn: "ಹತ್ತಿ",
    ta: "பருத்தி",
    te: "పత్తి",
    ml: "പരുത്തി",
  },
  "Red Chilli": {
    kn: "ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ",
    ta: "சிவப்பு மிளகாய்",
    te: "ఎర్రమిర్చి",
    ml: "ചുവപ്പ് മുളക്",
  },
  Onion: {
    kn: "ಈರುಳ್ಳಿ",
    ta: "வெங்காயம்",
    te: "ఉల్లిపాయ",
    ml: "സവാള",
  },
  Banana: {
    kn: "ಬಾಳೆ",
    ta: "வாழை",
    te: "అరటి",
    ml: "വാഴ",
  },
  "Ragi (Finger Millet)": {
    kn: "ರಾಗಿ",
    ta: "ராகி",
    te: "రాగి",
    ml: "റാഗി",
  },
  Sugarcane: {
    kn: "ಕಬ್ಬು",
    ta: "கரும்பு",
    te: "చెరకు",
    ml: "കരിമ്പ്",
  },
};

const i18n = {
  en: {
    meta_title: "Mandi Mitra - Crop Market Intelligence",
    brand: "Mandi Mitra",
    language: "Language",
    eyebrow: "Commercial Crop Intelligence for South India",
    hero_title_prefix: "Choose the next crop with",
    hero_title_highlight: "market-first analysis",
    hero_subtitle:
      "Analyze commercial value, compare prices, and find a practical crop plan for your next season.",
    farm_profile: "Farm Profile",
    state: "State",
    state_karnataka: "Karnataka",
    state_tamil_nadu: "Tamil Nadu",
    state_andhra_pradesh: "Andhra Pradesh",
    state_telangana: "Telangana",
    state_kerala: "Kerala",
    season: "Season",
    season_kharif: "Kharif",
    season_rabi: "Rabi",
    season_summer: "Summer",
    soil_type: "Soil Type",
    soil_loam: "Loam",
    soil_clay: "Clay",
    soil_sandy: "Sandy",
    soil_black: "Black",
    soil_red: "Red",
    water_availability: "Water Availability",
    investment_capacity: "Investment Capacity",
    risk_appetite: "Risk Appetite",
    level_low: "Low",
    level_medium: "Medium",
    level_high: "High",
    farm_size: "Farm Size (acres)",
    run_analysis: "Run Market Analysis",
    top_recommendations: "Top Crop Recommendations",
    commercial_analysis: "Commercial Value Analysis",
    th_crop: "Crop",
    th_score: "Score",
    th_yield: "Yield (qtl/acre)",
    th_farm_gate: "Farm-Gate (INR/qtl)",
    th_revenue: "Revenue/acre",
    th_cost: "Cost/acre",
    th_margin: "Margin/acre",
    th_roi: "ROI",
    th_break_even: "Break-even Yield",
    price_comparison: "Price Comparison",
    sort_by: "Sort by",
    sort_mandi: "Highest mandi price",
    sort_trend: "Strongest 30-day trend",
    sort_spread: "Best mandi-farm spread",
    sort_stable: "Lowest volatility",
    th_mandi: "Mandi (INR/qtl)",
    th_trend: "30-day Trend",
    th_spread: "Mandi-Farm Spread",
    th_volatility: "Volatility",
    th_signal: "Signal",
    note:
      "Note: This MVP uses sample economics and indicative prices for demonstration. Replace with district-level live mandi feeds for production use.",
    score_chip: "Score",
    total_margin: "Total Margin ({acres} acres)",
    per_acre_margin: "Per Acre Margin",
    reason: "Reason",
    commercial_upside: "commercial upside",
    qtl_per_acre: "qtl/acre",
    unit_qtl: "qtl",
    highlight_top_mandi: "Top Mandi Price",
    highlight_best_trend: "Best 30-day Trend",
    highlight_most_stable: "Most Stable",
    volatility_text: "Volatility",
    signal_strong: "Strong selling window",
    signal_healthy: "Healthy market",
    signal_risky: "High risk this month",
    signal_watch: "Watch and stage sales",
    reason_season_fit: "season fit",
    reason_state_suitable: "state-suitable",
    reason_soil_match: "soil match",
    reason_water_workable: "water workable",
    reason_water_stress: "water stress risk",
  },
  kn: {
    meta_title: "ಮಂಡಿ ಮಿತ್ರ - ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆ",
    brand: "ಮಂಡಿ ಮಿತ್ರ",
    language: "ಭಾಷೆ",
    eyebrow: "ದಕ್ಷಿಣ ಭಾರತದ ವಾಣಿಜ್ಯ ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿ",
    hero_title_prefix: "ಮುಂದಿನ ಬೆಳೆ ಆಯ್ಕೆಗೆ",
    hero_title_highlight: "ಮಾರುಕಟ್ಟೆ ಆಧಾರಿತ ವಿಶ್ಲೇಷಣೆ",
    hero_subtitle: "ವಾಣಿಜ್ಯ ಮೌಲ್ಯ, ಬೆಲೆ ಹೋಲಿಕೆ ಮತ್ತು ಮುಂದಿನ ಹಂಗಾಮಿಗೆ ಉಪಯುಕ್ತ ಬೆಳೆ ಯೋಜನೆಯನ್ನು ನೋಡಿ.",
    farm_profile: "ಕೃಷಿ ಪ್ರೊಫೈಲ್",
    state: "ರಾಜ್ಯ",
    state_karnataka: "ಕರ್ನಾಟಕ",
    state_tamil_nadu: "ತಮಿಳುನಾಡು",
    state_andhra_pradesh: "ಆಂಧ್ರ ಪ್ರದೇಶ",
    state_telangana: "ತೆಲಂಗಾಣ",
    state_kerala: "ಕೇರಳ",
    season: "ಹಂಗಾಮು",
    season_kharif: "ಖರೀಫ್",
    season_rabi: "ರಬಿ",
    season_summer: "ಬೆಸಿಗೆ",
    soil_type: "ಮಣ್ಣಿನ ವಿಧ",
    soil_loam: "ಲೋಮ್",
    soil_clay: "ಮಣ್ಣು",
    soil_sandy: "ಮರಳು",
    soil_black: "ಕಪ್ಪು",
    soil_red: "ಕೆಂಪು",
    water_availability: "ನೀರಿನ ಲಭ್ಯತೆ",
    investment_capacity: "ಹೂಡಿಕೆ ಸಾಮರ್ಥ್ಯ",
    risk_appetite: "ಅಪಾಯ ಸ್ವೀಕಾರ",
    level_low: "ಕಡಿಮೆ",
    level_medium: "ಮಧ್ಯಮ",
    level_high: "ಹೆಚ್ಚು",
    farm_size: "ಕೃಷಿ ಭೂಮಿ (ಎಕರೆ)",
    run_analysis: "ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆ ನಡೆಸಿ",
    top_recommendations: "ಮುಖ್ಯ ಬೆಳೆ ಶಿಫಾರಸುಗಳು",
    commercial_analysis: "ವಾಣಿಜ್ಯ ಮೌಲ್ಯ ವಿಶ್ಲೇಷಣೆ",
    th_crop: "ಬೆಳೆ",
    th_score: "ಅಂಕ",
    th_yield: "ಉತ್ಪಾದನೆ (ಕ್ವಿಂ/ಎಕರೆ)",
    th_farm_gate: "ಫಾರ್ಮ್-ಗೇಟ್ (ರೂ/ಕ್ವಿಂ)",
    th_revenue: "ಆದಾಯ/ಎಕರೆ",
    th_cost: "ವೆಚ್ಚ/ಎಕರೆ",
    th_margin: "ಲಾಭ/ಎಕರೆ",
    th_roi: "ROI",
    th_break_even: "ಬ್ರೇಕ್-ಈವನ್ ಉತ್ಪಾದನೆ",
    price_comparison: "ಬೆಲೆ ಹೋಲಿಕೆ",
    sort_by: "ವರ್ಗೀಕರಿಸಿ",
    sort_mandi: "ಅತಿ ಹೆಚ್ಚು ಮಂಡಿ ಬೆಲೆ",
    sort_trend: "ಅತ್ಯುತ್ತಮ 30-ದಿನ ಧೋರಣೆ",
    sort_spread: "ಅತ್ಯುತ್ತಮ ಮಂಡಿ-ಫಾರ್ಮ್ ವ್ಯತ್ಯಾಸ",
    sort_stable: "ಕಡಿಮೆ ಅಸ್ಥಿರತೆ",
    th_mandi: "ಮಂಡಿ (ರೂ/ಕ್ವಿಂ)",
    th_trend: "30-ದಿನ ಧೋರಣೆ",
    th_spread: "ಮಂಡಿ-ಫಾರ್ಮ್ ವ್ಯತ್ಯಾಸ",
    th_volatility: "ಅಸ್ಥಿರತೆ",
    th_signal: "ಸೂಚನೆ",
    note:
      "ಸೂಚನೆ: ಈ MVP ಮಾದರಿ ಆರ್ಥಿಕ ಡೇಟಾ ಮತ್ತು ಸೂಚಕ ಬೆಲೆಗಳನ್ನು ಬಳಸುತ್ತದೆ. ನೈಜ ಬಳಕೆಗೆ ಜಿಲ್ಲಾಸ್ಥರದ ಲೈವ್ ಮಂಡಿ ಡೇಟಾ ಸೇರಿಸಿ.",
    score_chip: "ಅಂಕ",
    total_margin: "ಒಟ್ಟು ಲಾಭ ({acres} ಎಕರೆ)",
    per_acre_margin: "ಪ್ರತಿ ಎಕರೆಗೆ ಲಾಭ",
    reason: "ಕಾರಣ",
    commercial_upside: "ವಾಣಿಜ್ಯ ಲಾಭ ಸಾಧ್ಯತೆ",
    qtl_per_acre: "ಕ್ವಿಂ/ಎಕರೆ",
    unit_qtl: "ಕ್ವಿಂ",
    highlight_top_mandi: "ಅತಿ ಹೆಚ್ಚು ಮಂಡಿ ಬೆಲೆ",
    highlight_best_trend: "ಉತ್ತಮ 30-ದಿನ ಧೋರಣೆ",
    highlight_most_stable: "ಅತ್ಯಂತ ಸ್ಥಿರ",
    volatility_text: "ಅಸ್ಥಿರತೆ",
    signal_strong: "ಬಲವಾದ ಮಾರಾಟ ಅವಕಾಶ",
    signal_healthy: "ಆರೋಗ್ಯಕರ ಮಾರುಕಟ್ಟೆ",
    signal_risky: "ಈ ತಿಂಗಳು ಹೆಚ್ಚು ಅಪಾಯ",
    signal_watch: "ಗಮನಿಸಿ ಹಂತ ಹಂತವಾಗಿ ಮಾರಾಟ ಮಾಡಿ",
    reason_season_fit: "ಹಂಗಾಮಿಗೆ ಸೂಕ್ತ",
    reason_state_suitable: "ರಾಜ್ಯಕ್ಕೆ ಸೂಕ್ತ",
    reason_soil_match: "ಮಣ್ಣಿಗೆ ಹೊಂದಿಕೆ",
    reason_water_workable: "ನೀರಿನ ಪರಿಸ್ಥಿತಿ ಸರಿಹೊಂದುತ್ತದೆ",
    reason_water_stress: "ನೀರಿನ ಒತ್ತಡ ಅಪಾಯ",
  },
  ta: {
    meta_title: "மண்டி மித்ரா - பயிர் சந்தை நுண்ணறிவு",
    brand: "மண்டி மித்ரா",
    language: "மொழி",
    eyebrow: "தென் இந்தியாவுக்கான வணிகப் பயிர் சந்தை தகவல்",
    hero_title_prefix: "அடுத்த பயிரை தேர்வு செய்ய",
    hero_title_highlight: "சந்தை முன்னுரிமை பகுப்பாய்வு",
    hero_subtitle:
      "வணிக மதிப்பு, விலை ஒப்பீடு, அடுத்த பருவத்திற்கான நடைமுறை பயிர் திட்டம் ஆகியவற்றை பார்க்கவும்.",
    farm_profile: "பண்ணை சுயவிவரம்",
    state: "மாநிலம்",
    state_karnataka: "கர்நாடகா",
    state_tamil_nadu: "தமிழ்நாடு",
    state_andhra_pradesh: "ஆந்திரப் பிரதேசம்",
    state_telangana: "தெலங்கானா",
    state_kerala: "கேரளா",
    season: "பருவம்",
    season_kharif: "கரீப்",
    season_rabi: "ரபி",
    season_summer: "கோடை",
    soil_type: "மண் வகை",
    soil_loam: "லோயம்",
    soil_clay: "களிமண்",
    soil_sandy: "மணற்பாங்கு",
    soil_black: "கருமண்",
    soil_red: "சிவப்பு மண்",
    water_availability: "நீர் கிடைக்கும் நிலை",
    investment_capacity: "முதலீட்டு திறன்",
    risk_appetite: "அபாய சகிப்பு",
    level_low: "குறைவு",
    level_medium: "நடுத்தரம்",
    level_high: "அதிகம்",
    farm_size: "பண்ணை பரப்பு (ஏக்கர்)",
    run_analysis: "சந்தை பகுப்பாய்வு செய்",
    top_recommendations: "முக்கிய பயிர் பரிந்துரைகள்",
    commercial_analysis: "வணிக மதிப்பு பகுப்பாய்வு",
    th_crop: "பயிர்",
    th_score: "மதிப்பெண்",
    th_yield: "விளைச்சல் (க்விண்/ஏக்கர்)",
    th_farm_gate: "பண்ணை விலை (ரூ/க்விண்)",
    th_revenue: "வருவாய்/ஏக்கர்",
    th_cost: "செலவு/ஏக்கர்",
    th_margin: "லாபம்/ஏக்கர்",
    th_roi: "ROI",
    th_break_even: "இடைநிலை விளைச்சல்",
    price_comparison: "விலை ஒப்பீடு",
    sort_by: "வரிசைப்படுத்து",
    sort_mandi: "அதிகபட்ச மண்டி விலை",
    sort_trend: "சிறந்த 30 நாள் போக்கு",
    sort_spread: "சிறந்த மண்டி-பண்ணை விலை வித்தியாசம்",
    sort_stable: "குறைந்த அதிர்வு",
    th_mandi: "மண்டி (ரூ/க்விண்)",
    th_trend: "30 நாள் போக்கு",
    th_spread: "மண்டி-பண்ணை விலை வித்தியாசம்",
    th_volatility: "அதிர்வு",
    th_signal: "சுட்டுரை",
    note:
      "குறிப்பு: இந்த MVP மாதிரி பொருளாதார தரவு மற்றும் வழிகாட்டி விலைகளைப் பயன்படுத்துகிறது. உற்பத்தி பயன்பாட்டுக்கு மாவட்ட அளவிலான நேரடி மண்டி தரவை இணைக்கவும்.",
    score_chip: "மதிப்பெண்",
    total_margin: "மொத்த லாபம் ({acres} ஏக்கர்)",
    per_acre_margin: "ஏக்கருக்கு லாபம்",
    reason: "காரணம்",
    commercial_upside: "வணிக லாப வாய்ப்பு",
    qtl_per_acre: "க்விண்/ஏக்கர்",
    unit_qtl: "க்விண்",
    highlight_top_mandi: "அதிக மண்டி விலை",
    highlight_best_trend: "சிறந்த 30 நாள் போக்கு",
    highlight_most_stable: "மிகவும் நிலைத்தது",
    volatility_text: "அதிர்வு",
    signal_strong: "வலுவான விற்பனை வாய்ப்பு",
    signal_healthy: "சந்தை நிலை நல்லது",
    signal_risky: "இந்த மாதம் அதிக அபாயம்",
    signal_watch: "கவனித்து கட்டங்களாக விற்பனை செய்யவும்",
    reason_season_fit: "பருவத்துக்கு பொருத்தம்",
    reason_state_suitable: "மாநிலத்திற்கு பொருத்தம்",
    reason_soil_match: "மண்ணுடன் பொருந்தும்",
    reason_water_workable: "நீர் நிலை ஏற்றது",
    reason_water_stress: "நீர் தட்டுப்பாட்டு அபாயம்",
  },
  te: {
    meta_title: "మండి మిత్ర - పంట మార్కెట్ విశ్లేషణ",
    brand: "మండి మిత్ర",
    language: "భాష",
    eyebrow: "దక్షిణ భారతానికి వాణిజ్య పంట మార్కెట్ సమాచారం",
    hero_title_prefix: "తదుపరి పంట ఎంపికకు",
    hero_title_highlight: "మార్కెట్ ఆధారిత విశ్లేషణ",
    hero_subtitle:
      "వాణిజ్య విలువ, ధరల పోలిక, తదుపరి సీజన్‌కు ఉపయోగకరమైన పంట ప్రణాళికను చూడండి.",
    farm_profile: "వ్యవసాయ వివరాలు",
    state: "రాష్ట్రం",
    state_karnataka: "కర్ణాటక",
    state_tamil_nadu: "తమిళనాడు",
    state_andhra_pradesh: "ఆంధ్రప్రదేశ్",
    state_telangana: "తెలంగాణ",
    state_kerala: "కేరళ",
    season: "సీజన్",
    season_kharif: "ఖరీఫ్",
    season_rabi: "రబీ",
    season_summer: "వేసవి",
    soil_type: "మట్టి రకం",
    soil_loam: "లోమ్",
    soil_clay: "మట్టి",
    soil_sandy: "ఇసుక",
    soil_black: "నల్ల మట్టి",
    soil_red: "ఎర్ర మట్టి",
    water_availability: "నీటి లభ్యత",
    investment_capacity: "పెట్టుబడి సామర్థ్యం",
    risk_appetite: "ప్రమాద స్వీకరణ",
    level_low: "తక్కువ",
    level_medium: "మధ్యస్థ",
    level_high: "అధిక",
    farm_size: "వ్యవసాయ విస్తీర్ణం (ఎకరాలు)",
    run_analysis: "మార్కెట్ విశ్లేషణ నడపండి",
    top_recommendations: "ప్రధాన పంట సూచనలు",
    commercial_analysis: "వాణిజ్య విలువ విశ్లేషణ",
    th_crop: "పంట",
    th_score: "స్కోర్",
    th_yield: "ఉత్పత్తి (క్వింటాల్/ఎకరం)",
    th_farm_gate: "ఫార్మ్ ధర (రూ/క్వింటాల్)",
    th_revenue: "ఆదాయం/ఎకరం",
    th_cost: "ఖర్చు/ఎకరం",
    th_margin: "లాభం/ఎకరం",
    th_roi: "ROI",
    th_break_even: "బ్రేక్-ఈవెన్ దిగుబడి",
    price_comparison: "ధరల పోలిక",
    sort_by: "క్రమబద్ధీకరణ",
    sort_mandi: "అత్యధిక మార్కెట్ ధర",
    sort_trend: "ఉత్తమ 30-రోజుల ధోరణి",
    sort_spread: "మండీ-ఫార్మ్ వ్యత్యాసం ఎక్కువ",
    sort_stable: "తక్కువ అస్థిరత",
    th_mandi: "మండీ (రూ/క్వింటాల్)",
    th_trend: "30-రోజుల ధోరణి",
    th_spread: "మండీ-ఫార్మ్ వ్యత్యాసం",
    th_volatility: "అస్థిరత",
    th_signal: "సిగ్నల్",
    note:
      "గమనిక: ఈ MVP నమూనా ఆర్థిక డేటా మరియు సూచిక ధరలను ఉపయోగిస్తుంది. ప్రొడక్షన్‌కు జిల్లా స్థాయి లైవ్ మండీ డేటా జోడించండి.",
    score_chip: "స్కోర్",
    total_margin: "మొత్తం లాభం ({acres} ఎకరాలు)",
    per_acre_margin: "ఎకరానికి లాభం",
    reason: "కారణం",
    commercial_upside: "వాణిజ్య లాభ అవకాశం",
    qtl_per_acre: "క్వింటాల్/ఎకరం",
    unit_qtl: "క్వింటాల్",
    highlight_top_mandi: "అత్యధిక మండీ ధర",
    highlight_best_trend: "ఉత్తమ 30-రోజుల ధోరణి",
    highlight_most_stable: "అత్యంత స్థిరమైనది",
    volatility_text: "అస్థిరత",
    signal_strong: "అమ్మకానికి బలమైన అవకాశం",
    signal_healthy: "మార్కెట్ స్థితి బాగుంది",
    signal_risky: "ఈ నెల ప్రమాదం ఎక్కువ",
    signal_watch: "గమనించి దశలవారీగా అమ్మండి",
    reason_season_fit: "సీజన్‌కు సరిపోతుంది",
    reason_state_suitable: "రాష్ట్రానికి అనుకూలం",
    reason_soil_match: "మట్టికి సరిపోతుంది",
    reason_water_workable: "నీటి స్థితి సరిపోతుంది",
    reason_water_stress: "నీటి ఒత్తిడి ప్రమాదం",
  },
  ml: {
    meta_title: "മണ്ടി മിത്ര - വിള വിപണി വിശകലനം",
    brand: "മണ്ടി മിത്ര",
    language: "ഭാഷ",
    eyebrow: "ദക്ഷിണ ഇന്ത്യയ്ക്കായുള്ള വാണിജ്യ വിള വിപണി വിവരം",
    hero_title_prefix: "അടുത്ത വിള തിരഞ്ഞെടുക്കാൻ",
    hero_title_highlight: "വിപണി കേന്ദ്രീകൃത വിശകലനം",
    hero_subtitle:
      "വാണിജ്യ മൂല്യം, വില താരതമ്യം, അടുത്ത സീസണിലേക്കുള്ള പ്രായോഗിക വിള പദ്ധതി കാണുക.",
    farm_profile: "കൃഷി പ്രൊഫൈൽ",
    state: "സംസ്ഥാനം",
    state_karnataka: "കർണാടക",
    state_tamil_nadu: "തമിഴ്നാട്",
    state_andhra_pradesh: "ആന്ധ്ര പ്രദേശ്",
    state_telangana: "തെലങ്കാന",
    state_kerala: "കേരളം",
    season: "സീസൺ",
    season_kharif: "ഖരീഫ്",
    season_rabi: "റബി",
    season_summer: "വേനൽ",
    soil_type: "മണ്ണിന്റെ തരം",
    soil_loam: "ലോം",
    soil_clay: "കിളിമണ്ണ്",
    soil_sandy: "മണൽമണ്ണ്",
    soil_black: "കറുത്ത മണ്ണ്",
    soil_red: "ചുവപ്പ് മണ്ണ്",
    water_availability: "ജലലഭ്യത",
    investment_capacity: "നിക്ഷേപ ശേഷി",
    risk_appetite: "റിസ്ക് സ്വീകരിക്കൽ",
    level_low: "കുറവ്",
    level_medium: "ഇടത്തരം",
    level_high: "ഉയർന്ന",
    farm_size: "കൃഷിഭൂമി (ഏക്കർ)",
    run_analysis: "വിപണി വിശകലനം നടത്തുക",
    top_recommendations: "മികച്ച വിള ശുപാർശകൾ",
    commercial_analysis: "വാണിജ്യ മൂല്യ വിശകലനം",
    th_crop: "വിള",
    th_score: "സ്കോർ",
    th_yield: "വിളവ് (ക്വിന്റൽ/ഏക്കർ)",
    th_farm_gate: "ഫാം-ഗേറ്റ് (രൂ/ക്വിന്റൽ)",
    th_revenue: "വരുമാനം/ഏക്കർ",
    th_cost: "ചെലവ്/ഏക്കർ",
    th_margin: "ലാഭം/ഏക്കർ",
    th_roi: "ROI",
    th_break_even: "ബ്രേക്ക്-ഈവൻ വിളവ്",
    price_comparison: "വില താരതമ്യം",
    sort_by: "ക്രമീകരിക്കൽ",
    sort_mandi: "ഏറ്റവും ഉയർന്ന മണ്ടി വില",
    sort_trend: "മികച്ച 30-ദിവസ ട്രെൻഡ്",
    sort_spread: "മികച്ച മണ്ടി-ഫാം വ്യത്യാസം",
    sort_stable: "കുറഞ്ഞ അസ്ഥിരത",
    th_mandi: "മണ്ടി (രൂ/ക്വിന്റൽ)",
    th_trend: "30-ദിവസ ട്രെൻഡ്",
    th_spread: "മണ്ടി-ഫാം വ്യത്യാസം",
    th_volatility: "അസ്ഥിരത",
    th_signal: "സിഗ്നൽ",
    note:
      "കുറിപ്പ്: ഈ MVP മാതൃകാ സാമ്പത്തിക ഡാറ്റയും സൂചനാ വിലകളും ഉപയോഗിക്കുന്നു. പ്രൊഡക്ഷൻ ഉപയോഗത്തിന് ജില്ലാ തല ലൈവ് മണ്ടി ഡാറ്റ ചേർക്കുക.",
    score_chip: "സ്കോർ",
    total_margin: "മൊത്തം ലാഭം ({acres} ഏക്കർ)",
    per_acre_margin: "ഏക്കറിന് ലാഭം",
    reason: "കാരണം",
    commercial_upside: "വാണിജ്യ ലാഭ സാധ്യത",
    qtl_per_acre: "ക്വിന്റൽ/ഏക്കർ",
    unit_qtl: "ക്വിന്റൽ",
    highlight_top_mandi: "ഏറ്റവും ഉയർന്ന മണ്ടി വില",
    highlight_best_trend: "മികച്ച 30-ദിവസ ട്രെൻഡ്",
    highlight_most_stable: "ഏറ്റവും സ്ഥിരതയുള്ളത്",
    volatility_text: "അസ്ഥിരത",
    signal_strong: "വിൽപ്പനയ്ക്ക് മികച്ച സമയം",
    signal_healthy: "ആരോഗ്യകരമായ വിപണി",
    signal_risky: "ഈ മാസം കൂടുതൽ അപകടസാധ്യത",
    signal_watch: "നിരീക്ഷിച്ച് ഘട്ടംഘട്ടമായി വിൽക്കുക",
    reason_season_fit: "സീസണിന് അനുയോജ്യം",
    reason_state_suitable: "സംസ്ഥാനത്തിന് അനുയോജ്യം",
    reason_soil_match: "മണ്ണിനോട് പൊരുത്തം",
    reason_water_workable: "ജലസ്ഥിതി അനുയോജ്യം",
    reason_water_stress: "ജലക്ഷാമ സാധ്യത",
  },
};

const localeMap = {
  en: "en-IN",
  kn: "kn-IN",
  ta: "ta-IN",
  te: "te-IN",
  ml: "ml-IN",
};

const form = document.getElementById("analysisForm");
const analysisBody = document.querySelector("#analysisTable tbody");
const topRecommendations = document.getElementById("topRecommendations");
const priceBody = document.querySelector("#priceTable tbody");
const priceSort = document.getElementById("priceSort");
const priceHighlights = document.getElementById("priceHighlights");
const languageSelect = document.getElementById("languageSelect");

const levels = { low: 1, medium: 2, high: 3 };
let currentLanguage = "en";

const getLocale = () => localeMap[currentLanguage] || "en-IN";

const t = (key) => i18n[currentLanguage]?.[key] || i18n.en[key] || key;

const inr = (value) =>
  new Intl.NumberFormat(getLocale(), { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    value
  );

const fmtNumber = (value, max = 1) =>
  new Intl.NumberFormat(getLocale(), { maximumFractionDigits: max }).format(value);

const pct = (value) => `${fmtNumber(value, 1)}%`;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function cropLabel(crop) {
  return cropNames[crop.name]?.[currentLanguage] || crop.name;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });

  document.title = t("meta_title");
  document.documentElement.lang = currentLanguage;
}

function getInput() {
  return {
    state: document.getElementById("state").value,
    season: document.getElementById("season").value,
    soilType: document.getElementById("soilType").value,
    water: document.getElementById("water").value,
    investment: document.getElementById("investment").value,
    risk: document.getElementById("risk").value,
    acres: Number(document.getElementById("acres").value) || 1,
  };
}

function scoreCrop(crop, input) {
  let score = 50;
  const notes = [];

  if (crop.seasons.includes(input.season)) {
    score += 14;
    notes.push("reason_season_fit");
  } else {
    score -= 18;
  }

  if (crop.states.includes(input.state)) {
    score += 8;
    notes.push("reason_state_suitable");
  }

  if (crop.soils.includes(input.soilType)) {
    score += 10;
    notes.push("reason_soil_match");
  } else {
    score -= 8;
  }

  const waterGap = levels[input.water] - levels[crop.waterNeed];
  if (waterGap >= 0) {
    score += 9 - waterGap * 2;
    notes.push("reason_water_workable");
  } else {
    score += waterGap * 10;
    notes.push("reason_water_stress");
  }

  const investGap = levels[input.investment] - levels[crop.investmentNeed];
  score += investGap >= 0 ? 8 : -13;

  const riskWeight = input.risk === "low" ? 3 : input.risk === "medium" ? 2 : 1;
  score += 9 - crop.volatilityScore * riskWeight;

  score += crop.demandTrendPct;

  const marginPerAcre = crop.yieldQtlPerAcre * crop.farmGatePrice - crop.costPerAcre;
  score += clamp(Math.round(marginPerAcre / 6500), -10, 18);

  return {
    score: clamp(Math.round(score), 0, 100),
    notes,
  };
}

function buildRows(input) {
  return crops
    .map((crop) => {
      const revenuePerAcre = crop.yieldQtlPerAcre * crop.farmGatePrice;
      const marginPerAcre = revenuePerAcre - crop.costPerAcre;
      const roi = (marginPerAcre / crop.costPerAcre) * 100;
      const breakEvenYield = crop.costPerAcre / crop.farmGatePrice;
      const trend = ((crop.mandiPrice - crop.lastMonthMandiPrice) / crop.lastMonthMandiPrice) * 100;
      const spread = crop.mandiPrice - crop.farmGatePrice;
      const scored = scoreCrop(crop, input);

      return {
        ...crop,
        score: scored.score,
        reasons: scored.notes,
        revenuePerAcre,
        marginPerAcre,
        roi,
        breakEvenYield,
        trend,
        spread,
        totalRevenue: revenuePerAcre * input.acres,
        totalMargin: marginPerAcre * input.acres,
      };
    })
    .sort((a, b) => b.score - a.score);
}

function renderTopPicks(rows) {
  const picks = rows.slice(0, 3);
  const acres = fmtNumber(getInput().acres, 1);

  topRecommendations.innerHTML = picks
    .map((crop) => {
      const reasons = crop.reasons.slice(0, 3).map((reasonKey) => t(reasonKey)).join(", ") || t("commercial_upside");
      return `
      <article class="card">
        <h3>${cropLabel(crop)}</h3>
        <span class="score-chip">${t("score_chip")} ${crop.score}/100</span>
        <p><strong>${t("total_margin").replace("{acres}", acres)}:</strong> <span class="money">${inr(crop.totalMargin)}</span></p>
        <p><strong>${t("per_acre_margin")}:</strong> ${inr(crop.marginPerAcre)}</p>
        <p><strong>${t("reason")}:</strong> ${reasons}</p>
      </article>
    `;
    })
    .join("");
}

function renderAnalysisTable(rows) {
  analysisBody.innerHTML = rows
    .map(
      (crop) => `
      <tr>
        <td>${cropLabel(crop)}</td>
        <td>${crop.score}</td>
        <td>${fmtNumber(crop.yieldQtlPerAcre, 1)}</td>
        <td>${inr(crop.farmGatePrice)}</td>
        <td>${inr(crop.revenuePerAcre)}</td>
        <td>${inr(crop.costPerAcre)}</td>
        <td class="${crop.marginPerAcre >= 0 ? "up" : "down"}">${inr(crop.marginPerAcre)}</td>
        <td>${pct(crop.roi)}</td>
        <td>${fmtNumber(crop.breakEvenYield, 1)} ${t("qtl_per_acre")}</td>
      </tr>
    `
    )
    .join("");
}

function priceSignalKey(crop) {
  if (crop.trend >= 4 && crop.spread >= 150) {
    return "signal_strong";
  }
  if (crop.trend >= 2 && crop.volatilityScore <= 3) {
    return "signal_healthy";
  }
  if (crop.trend < 0 && crop.volatilityScore >= 4) {
    return "signal_risky";
  }
  return "signal_watch";
}

function sortPriceRows(rows, key) {
  const copy = [...rows];
  if (key === "trend") {
    return copy.sort((a, b) => b.trend - a.trend);
  }
  if (key === "spread") {
    return copy.sort((a, b) => b.spread - a.spread);
  }
  if (key === "stable") {
    return copy.sort((a, b) => a.volatilityScore - b.volatilityScore);
  }
  return copy.sort((a, b) => b.mandiPrice - a.mandiPrice);
}

function renderPriceHighlights(rows) {
  const bestPrice = [...rows].sort((a, b) => b.mandiPrice - a.mandiPrice)[0];
  const bestTrend = [...rows].sort((a, b) => b.trend - a.trend)[0];
  const stable = [...rows].sort((a, b) => a.volatilityScore - b.volatilityScore)[0];

  priceHighlights.innerHTML = `
    <article class="highlight">
      <strong>${t("highlight_top_mandi")}</strong>
      <div>${cropLabel(bestPrice)}: ${inr(bestPrice.mandiPrice)} / ${t("unit_qtl")}</div>
    </article>
    <article class="highlight">
      <strong>${t("highlight_best_trend")}</strong>
      <div>${cropLabel(bestTrend)}: <span class="up">${pct(bestTrend.trend)}</span></div>
    </article>
    <article class="highlight">
      <strong>${t("highlight_most_stable")}</strong>
      <div>${cropLabel(stable)}: ${t("volatility_text")} ${fmtNumber(stable.volatilityScore, 0)}/5</div>
    </article>
  `;
}

function renderPriceComparison(rows) {
  const sorted = sortPriceRows(rows, priceSort.value);

  priceBody.innerHTML = sorted
    .map(
      (crop) => `
      <tr>
        <td>${cropLabel(crop)}</td>
        <td>${inr(crop.farmGatePrice)}</td>
        <td>${inr(crop.mandiPrice)}</td>
        <td class="${crop.trend >= 0 ? "up" : "down"}">${pct(crop.trend)}</td>
        <td>${inr(crop.spread)}</td>
        <td>${fmtNumber(crop.volatilityScore, 0)}/5</td>
        <td>${t(priceSignalKey(crop))}</td>
      </tr>
    `
    )
    .join("");

  renderPriceHighlights(rows);
}

function analyze() {
  const input = getInput();
  const rows = buildRows(input);
  renderTopPicks(rows);
  renderAnalysisTable(rows);
  renderPriceComparison(rows);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  analyze();
});

priceSort.addEventListener("change", () => analyze());

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  applyTranslations();
  analyze();
});

applyTranslations();
analyze();
