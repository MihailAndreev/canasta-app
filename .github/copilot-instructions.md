# Canastify – Copilot & Project Instructions

Този документ е **единственият авторитетен източник** за архитектурни, кодови и процесни правила в проекта **Canastify**.  
Copilot / AI / contributors **трябва да ги спазват без изключение**.

---

## 1. Общи архитектурни принципи

- Проектът е **Vite multi-page app**, НЕ SPA.
- Има **само един `index.html`** (Landing).
- Всички други екрани са отделни HTML файлове:
  - `rules.html`
  - `faq.html`
  - `game.html`
  - `profile.html`
  - `admin.html`
- **Без TypeScript. Без React/Vue.**
- UI, Engine и Services са **строго разделени**.

---

## 2. Структура на проекта (задължителна)

### Страници (UI входове)
- `index.html` – landing
- `rules.html`
- `faq.html`
- `game.html`
- `profile.html`
- `admin.html`

Всяка страница има:
- собствен `.js` файл в `scripts/`
- собствен `.css` файл в `page-styles/`

---

## 3. Разделение по отговорности

### 3.1 Pages / Scripts
- Съдържат **само**:
  - page init
  - event listeners
  - UI render извиквания
- ❌ НЯМАТ право да:
  - валидират правила
  - смятат точки
  - достъпват Supabase директно

---

### 3.2 Engine (`src/engine/`)
**Единствената истина за правилата.**

- Няма DOM
- Няма Supabase
- Няма localStorage
- Всички правила са детерминистични и pure

Съдържа:
- валидатори (set / run / mixed / opening)
- scoring
- state transitions

---

### 3.3 Modes (`src/modes/`)
- Оркестрация между UI ⇄ Engine ⇄ Persistence
- Single-player логиката е в `modes/single/`
- Няма UI код
- Няма правила

---

### 3.4 Services (`src/services/`)
**Единственият слой с достъп до Supabase**

- Auth
- DB repositories
- Storage
- Persistence

❌ Engine и UI **не говорят директно** със Supabase.

---

## 4. Supabase правила (КРИТИЧНО)

### 4.1 Име на клиента
За да се избегне грешката:
```
Uncaught SyntaxError: Identifier 'supabase' has already been declared
```

➡️ **ВИНАГИ** използвай:
```js
supabaseClient
```

❌ Никога не използвай променлива с име `supabase`.

---

### 4.2 Инициализация
- Supabase се инициализира **само** в:
```
src/services/supabase/client.js
```
- Export: `supabaseClient`
- Ключове се четат от Vite env:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

---

## 5. Миграции (ЗАДЪЛЖИТЕЛНО)

### 5.1 Локални миграции
- Всички DB промени се описват като **SQL файлове** в:
```
supabase/migrations/
```

### 5.2 Правила
- ❌ Не се редактират стари migration файлове
- ✅ Всяка промяна = нов migration
- ✅ Migration файлът се комитва заедно с кода

Принцип:
> **Keep database migrations in a local folder, synced with the database**

---

## 6. Single Player – правила

- Няма lobby
- Всяка игра има запис в DB (`games`, `game_states`)
- Няма localStorage за game state
- Всеки action:
  1. зарежда state
  2. валидира чрез engine
  3. връща нов state
  4. записва state в Supabase

---

## 7. Gameplay валидации (задължителни)

- Ходът има фази:
  - `DRAW → PLAY → DISCARD`
- `DISCARD` винаги е **точно 1 карта**
- Ако отборът **не е отворил** и:
  - има свалени meld-ове
  - но **OPENING_THRESHOLD не е покрит**
→ discard е **забранен**, разрешено е само:
- още meld-ове
- или **Undo**

---

## 8. Undo (строго правило)

- Undo връща **ВСИЧКИ meld-ове**, свалени в текущия ход
- Не връща теглене
- Възможно е само **преди discard**

---

## 9. Naming conventions

- файлове: `kebab-case.js`
- модули: `dot.notation.js`
- функции: `camelCase`
- константи: `SCREAMING_SNAKE_CASE`

---

## 10. Git дисциплина (изпитно изискване)

- Работи се **feature-by-feature**
- Всяка стабилна стъпка = commit
- Не се комитва счупен код
- Минимум:
  - **15 commits**
  - в **поне 3 различни дни**
- Commit message-ите трябва да са ясни и описателни

---

## 11. Забранени практики

❌ SPA router  
❌ Global mutable state извън engine  
❌ Валидиране в UI  
❌ Supabase calls от engine  
❌ TypeScript / React / Vue  

---

## 12. Златно правило

> Ако нещо е правило в Canasta – то **живее в engine**.  
> Ако нещо е UI – то **не знае правилата**.

---

**Край на документа**
