# Canastify – Актуализирана архитектура (Single Player, Vite multi-page, един index.html)

Този документ описва **финалната, коригирана архитектура** за рестарта на Canastify, съобразена с решението:
- **Само един `index.html` в проекта** (главна страница).
- Всички други екрани са **отделни HTML файлове**: `rules.html`, `faq.html`, `game.html`, `profile.html`, `admin.html`.
- **Vite multi-page**, без SPA router.
- **Single-player v1**, multiplayer е бъдеща еволюция.
- **Supabase-first** (Auth + DB + Storage).
- **Без TypeScript и без UI frameworks**.

---

## 1) Основен принцип за страниците

- `index.html` → **Landing / Entry point**
- Всяка друга страница:
  - е самостоятелен HTML файл;
  - няма собствен `index.html`;
  - има собствен `.css` и `.js` файл;
  - се зарежда чрез нормален `<a href="rules.html">` линк.

➡️ Това държи проекта **ясен, предвидим и без SPA магия**.

---

## 2) Структура на проекта (коригирана)

```
canastify/
├─ index.html                 # Landing (единствен index.html)
├─ rules.html
├─ faq.html
├─ game.html
├─ profile.html
├─ admin.html
│
├─ styles/
│  ├─ base.css
│  ├─ layout.css
│  └─ theme.css
│
├─ scripts/
│  ├─ landing.js
│  ├─ rules.js
│  ├─ faq.js
│  ├─ game.js
│  ├─ profile.js
│  └─ admin.js
│
├─ page-styles/
│  ├─ landing.css
│  ├─ rules.css
│  ├─ faq.css
│  ├─ game.css
│  ├─ profile.css
│  └─ admin.css
│
├─ src/
│  ├─ app/
│  │  ├─ init-page.js          # общ init (navbar, auth guard, theme)
│  │  ├─ env.js                # Vite env loader
│  │  ├─ constants.js
│  │  └─ routes.js             # helpers за href-и
│  │
│  ├─ ui/
│  │  ├─ components/
│  │  │  ├─ navbar.js
│  │  │  ├─ modal.js
│  │  │  ├─ toast.js
│  │  │  └─ cards/
│  │  │     ├─ card-view.js
│  │  │     └─ card-assets.js
│  │  └─ render/
│  │     ├─ render-game.js
│  │     ├─ render-profile.js
│  │     └─ render-admin.js
│  │
│  ├─ engine/                  # PURE логика (без DOM / Supabase)
│  │  ├─ model/
│  │  ├─ state/
│  │  ├─ actions/
│  │  └─ rules/
│  │
│  ├─ modes/
│  │  └─ single/
│  │     ├─ single.controller.js
│  │     └─ single.setup.js
│  │
│  ├─ services/
│  │  └─ supabase/
│  │     ├─ client.js          # export supabaseClient
│  │     ├─ auth.service.js
│  │     ├─ storage.service.js
│  │     └─ repos/
│  │
│  └─ utils/
│     ├─ assert.js
│     ├─ random.js
│     └─ format.js
│
├─ assets/
│  ├─ cards-svg/
│  ├─ icons/
│  └─ images/
│
├─ supabase/
│  ├─ migrations/
│  └─ seed/
│
├─ docs/
│  ├─ architecture.md
│  ├─ db-schema.md
│  └─ rules-and-faq/
│     ├─ game_rules.md
│     └─ Canastify_FAQ.md
│
├─ .env.example
├─ vite.config.js
└─ package.json
```

---

## 3) Как се зарежда всяка страница (пример)

### `rules.html`
```html
<link rel="stylesheet" href="/styles/base.css" />
<link rel="stylesheet" href="/page-styles/rules.css" />

<script type="module" src="/scripts/rules.js"></script>
```

### `scripts/rules.js`
```js
import { initPage } from '/src/app/init-page.js';

initPage({
  page: 'rules',
  requireAuth: false
});
```

➡️ Всяка страница:
- вика `initPage()`;
- няма логика за други страници;
- остава изолирана и лесна за дебъг.

---

## 4) Защо този модел е по-добър от `pages/*/index.html`

- Няма объркване с много `index.html`.
- Линковете са очевидни (`/rules.html`, `/game.html`).
- По-лесно деплойване (Netlify/Vercel).
- По-лесно за проверяващи / преподаватели.
- Пасва идеално на „не SPA, multi-page“ изискването.

---

## 5) Правила, които НЕ се нарушават

- UI ≠ Engine ≠ Services.
- Single-player няма lobby.
- Supabase клиентът се казва **`supabaseClient`**.
- DB промените винаги имат migration файл.
- Page JS файловете са тънки.

---

## 6) Кратък checklist преди старт

- [ ] Единствен `index.html`
- [ ] Всички други страници са `*.html`
- [ ] Няма SPA router
- [ ] `supabaseClient`, не `supabase`
- [ ] `supabase/migrations/` е versioned в git
- [ ] Engine няма DOM код

---

**Край на документа**
