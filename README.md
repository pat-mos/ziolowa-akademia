# Ziołowa Akademia — strona

Statyczna strona w [Astro](https://astro.build). Hosting docelowy:
**Cloudflare Pages**. Domenę kupioną na **GoDaddy** podpinamy przez DNS Cloudflare
(zalecane) albo rekordem CNAME u GoDaddy.

---

## 🚀 Codzienna praca

```bash
npm install
npm run dev      # http://localhost:4321
```

---

## ☁️ Deploy na Cloudflare Pages

Strona jest **w 100% statyczna** (`dist/`) — **nie potrzebuje** adaptera
`@astrojs/cloudflare` ani Workers.

### Ustawienia projektu w Cloudflare Pages

| Pole | Wartość |
|------|---------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repo root) |
| Node.js version | `22` (albo `20`) |

### Sposób A — Git (zalecane)

1. Wrzuć repo na GitHub / GitLab.
2. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → podłącz repo.
3. Ustaw build jak w tabeli powyżej → **Save and Deploy**.
4. Każdy push do głównej gałęzi = nowy deploy. Preview dla PR-ów dostajesz automatycznie.

### Sposób B — ręczne wgranie `dist/`

```bash
npm run build
npx wrangler pages deploy dist --project-name=ziolowa-akademia
```

(wymaga `npx wrangler login` raz).

---

## 🌐 Domena z GoDaddy → Cloudflare

### Zalecane: DNS w Cloudflare (nameservery)

1. W Cloudflare: **Add a site** → wpisz domenę kupioną na GoDaddy (np. `ziolowa-akademia.pl`).
2. Cloudflare pokaże **dwa nameservery** (np. `ada.ns.cloudflare.com`, `bob.ns.cloudflare.com`).
3. W GoDaddy: **Moje produkty** → domena → **DNS** / **Nameservers** → **Zmień** na te z Cloudflare.
4. Poczekaj na propagację (często 15 min–kilka godzin; max ~24–48 h).
5. W Cloudflare Pages → projekt → **Custom domains** → **Set up a custom domain** → wpisz domenę (i opcjonalnie `www`).
6. SSL/TLS ustaw na **Full (strict)** — certyfikat wystawi Cloudflare sam.

Po podpięciu zaktualizuj w projekcie:

```js
// astro.config.mjs
site: 'https://prawdziwa-domena.pl',
```

i w `public/_redirects` odkomentuj regułę `www` → apex (podmień nazwę domeny).

### Alternatywa: DNS zostaje u GoDaddy

Jeśli nameserverów nie chcecie ruszać:

1. W Cloudflare Pages dodaj custom domain — Cloudflare poda target typu `xxx.pages.dev`.
2. W GoDaddy DNS:
   - **www** → CNAME → `twoj-projekt.pages.dev`
   - **apex** (`@`) — GoDaddy zwykle nie ma ALIAS/ANAME; najprościej przekierowanie GoDaddy „forwarding” z `@` → `https://www.…` albo przejście na nameservery Cloudflare (sposób wyżej).

> Apex bez Cloudflare DNS bywa uciążliwy u GoDaddy — stąd nameservery Cloudflare są prostsze.

---

## ✏️ Co gdzie zmienić

| Chcę zmienić… | Plik |
|---|---|
| Teksty w hero | `src/components/Hero.astro` |
| Ofertę | `src/components/Oferta.astro` |
| Opinie | `src/components/Opinie.astro` |
| FAQ | `src/components/Faq.astro` |
| **E-mail / telefon** | `src/components/Kontakt.astro` + `Footer.astro` |
| Logo / menu | `src/components/Nav.astro` |
| Stopkę | `src/components/Footer.astro` |
| Kolory, typografię | `src/styles/global.css` |
| Zdjęcia | `src/assets/img/` |
| Adres domeny (SEO) | `astro.config.mjs` → `site` |
| Cache / nagłówki | `public/_headers` |
| Redirect www | `public/_redirects` |

> ⚠️ Przed publikacją uzupełnij prawdziwy e-mail i telefon (teraz są placeholdery).

---

## 📦 Build lokalnie

```bash
npm run build     # → dist/
npm run preview   # podgląd produkcyjny
```

Limity Cloudflare Pages (Free): plik max ~25 MB — nasze wideo hero (~2.5 MB) jest OK.

---

## 🎨 Kolory (`src/styles/global.css`)

```
--lime   CTA / akcent
--ink    ciemny mech (tekst, stopka)
--cream / --paper / pastels   tła
```
