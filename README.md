# Mandi Mitra

Mandi Mitra is a South India-focused crop market analysis website that helps farmers decide what to plant next based on commercial value, suitability, and price signals.

## What It Does
- Captures farm profile inputs: state, season, soil, water, investment, risk, and farm size.
- Recommends top crops using a suitability + commercial scoring model.
- Shows commercial analysis per crop:
  - Yield
  - Farm-gate price
  - Revenue/acre
  - Cost/acre
  - Margin/acre
  - ROI
  - Break-even yield
- Provides a dedicated **price comparison dashboard**:
  - Farm-gate vs mandi prices
  - 30-day trend
  - Mandi-farm spread
  - Volatility
  - Market signal
- Supports multilingual UI with a language switcher:
  - English
  - Kannada
  - Tamil
  - Telugu
  - Malayalam

## Tech Stack
- HTML
- CSS
- Vanilla JavaScript

No backend is required for this MVP.

## Run Locally
From the project root:

```bash
python3 -m http.server 8000
```

Open in browser:

```text
http://localhost:8000/index.html
```

Stop server with `Ctrl+C`.

## Project Structure
- `index.html` - UI layout and language-aware text hooks.
- `styles.css` - visual design, responsive layout, animations, language switcher styling.
- `app.js` - crop dataset, scoring logic, rendering, translations, and price-comparison logic.
- `PLAN.md` - phased roadmap for MVP and future enhancements.

## Important Note
This MVP currently uses sample/indicative economics and price values for demonstration. For production use, plug in district-level live mandi data sources.

## Next Suggested Enhancements
- Integrate live mandi/APMC data feed.
- Add district selector and local market filters.
- Add weather and rainfall risk layer.
- Add WhatsApp/SMS price alerts.
- Persist user preferences and language selection.
