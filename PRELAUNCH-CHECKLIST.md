# PRINS Solution Website — Placeholders & Pre-Launch Checklist

Strategy conflicts were resolved using **Website_Chatgpt_Suggest** as the source of truth
(positioning, 3 service pillars, HRDC wording, RFQ-style gifts page, no HRDC claim).

## 1. Placeholders awaiting the client's verified input
Every item below is visibly marked `[to be confirmed]` on the site — search for `class="tbc"`.

| # | Item | Where | Notes |
|---|------|-------|-------|
| 1 | **WhatsApp number** | Floating button (all pages), contact.html | Not provided in any source document. Once confirmed, replace the `.float-wa` href on every page with the ready-made `wa.me` link in the HTML comment above the closing `</body>` (prefilled enquiry message included). |
| 2 | **Email** | Footer, contact.html | Client brief says `admin@prins.my`; Company Profile 2026 says `info@prins.my`. Publish one. |
| 3 | **Office address** | Footer, contact.html | Brief: Sunway 163, Mont Kiara. Profile: A1-16-13, Arcoris Mont Kiara, 50480 KL. Publish one. |
| 4 | **Phone 03-6411 9533** | Footer, contact.html | From Company Profile 2026 — confirm still active. |
| 5 | **Typical lead time** | Home FAQ, Corporate Events FAQ | Replace the marked sentence with a real range (e.g. "4–8 weeks"). |
| 6 | **Minimum-budget line (optional)** | services-corporate-events.html | Only publish a "from RM X" figure if PRINS confirms one; otherwise delete the marked span. |
| 7 | **Corporate gifts MOQ** | services-corporate-gifts.html FAQ | Replace placeholder answer with the real policy. |
| 8 | **Response-time commitment** | contact.html form microcopy | e.g. "within 1 working day". |
| 9 | **Company registration number** | Footer legal line | Recommended for procurement trust; delete the span if not wanted. |
| 10 | **Canonical domain** | `<link rel="canonical">` + OG tags on every page | Currently `https://www.prins.my` (inferred from the @prins.my email domain). Confirm the live domain and re-run find/replace. |
| 11 | **Form access key** `[YOUR-ACCESS-KEY]` | contact.html | The form points at Web3Forms but **will not send** until the owner registers their own free access key at web3forms.com and pastes it into the hidden `access_key` input. Never publish with the placeholder. |

## 2. Compliance-sensitive lines — do NOT edit out
- **HRDC wording** (Employee Engagement page, appears twice) must remain exactly:
  *"HRDC-claimable options available through approved partners, subject to programme scope."*
  Never claim "HRDC claimable" directly — per the strategy document.
- **Gallup 25% Malaysia engagement statistic** must keep its "(Source: Gallup workplace research.)" attribution.
- **Qualification lines** on Home, About and beside the contact form are deliberate lead-quality filters — keep them.
- All figures (1,515,000 impressions · 200,000+ viewers · 11 livestreams · 1,500 participants · 1,000 employees · RM45,000 vouchers · since 2016/2017/2019/2020/2022) trace to the Company Profile 2026 and client brief. Do not round up or embellish.
- No superlatives ("best", "#1", "leading") anywhere — none are third-party verified. Do not add any.
- No testimonials — none were supplied. The dated client track record serves that role; do not add fabricated quotes.

## 3. Media notes
- All photographs were extracted from the client's own Company Profile 2026 PDF and optimised to WebP ≤250KB. **They are compressed deck images** — for best quality, replace with the original event photos before launch (same filenames in `/assets/`).
- Logo files (`logo-pink.png`, `logo-white.png`) are the actual PRINS wordmark extracted from the PDF (the pink version is the white mark recolored to the sampled brand pink `#FF1372`). Replace with a vector logo if available.
- No stock, AI-generated or hotlinked imagery is used.

## 4. Design token record (derived, per brief §7)
- `--pink #FF1372` — sampled from the deck's hot-pink slides; single accent (CTA, key figures, motif rule).
- `--pink-text #B0004F` — the raw pink fails WCAG AA on white (~3.6:1), so it is darkened for all text/link use.
- `--ink #262326` — sampled from the deck's charcoal slides.
- `--paper #FFFFFF`, `--mist #F6F3F5` — neutrals.
- Display: **Archivo Black** (matches the logo's ultra-bold geometric weight); Body: **Jost** (echoes the deck's Century Gothic-style body face). Loaded from Google Fonts.
- Signature motif: the deck's **pink vertical rule** before headings + pipe-separated eyebrow labels ("SHOW**CASE** | …"), repeated site-wide.
- Motion: fade-up reveals + count-up stats only; `prefers-reduced-motion` fully respected.

## 5. FAQ JSON-LD schema map (each question on exactly ONE page)
- Home: engagement timing · concept-to-completion · nationwide coverage · budget customisation · in-house scope
- About: who is behind PRINS · known clients · after-sales support · in-house vs vendors
- Corporate Events: venue/AV/manpower · lead times · post-event deliverables
- Brand Activation: multi-state roadshows · livestream production · activation outcomes
- Employee Engagement: recurring calendar · customisation · HRDC
- Corporate Gifts: logo printing · MOQ · venue delivery
(Showcase and Contact carry no FAQ schema.)
