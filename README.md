# Ziołowa Akademia — strona

Statyczna strona zbudowana w [Astro](https://astro.build). Po zbudowaniu
powstaje folder `dist/` z gotowymi plikami HTML/CSS/obrazami, które wgrywasz
na dowolny hosting (cPanel / FTP) — **serwer nie musi mieć Node.js**.

---

## 🚀 Szybki start (codzienna praca)

W terminalu, w folderze projektu:

```bash
npm install      # tylko raz, po pobraniu projektu
npm run dev      # podgląd na żywo → otwórz http://localhost:4321
```

Zmieniasz plik → strona odświeża się sama. Zatrzymanie serwera: `Ctrl + C`.

---

## 📦 Budowanie do wgrania na hosting

```bash
npm run build    # tworzy folder dist/
npm run preview  # (opcjonalnie) podgląd gotowego builda
```

Następnie **zawartość folderu `dist/`** (a nie sam folder!) wgraj przez FTP
do katalogu strony na hostingu — zwykle `public_html/` lub `www/`.

Program do FTP: **FileZilla** (darmowy). Dane logowania (host, login, hasło)
dostajesz od dostawcy hostingu.

---

## ✏️ Co gdzie zmienić

| Chcę zmienić… | Plik |
|---|---|
| Teksty w nagłówku / hero | `src/components/Hero.astro` |
| Sekcja „O mnie" (Monika) | `src/components/OMnie.astro` |
| Ofertę i zakładki (dzieci/dorośli/firmy) | `src/components/Oferta.astro` |
| Opinie | `src/components/Opinie.astro` |
| Pytania FAQ | `src/components/Faq.astro` |
| **Dane kontaktowe (e-mail, telefon)** | `src/components/Kontakt.astro` |
| Menu / logo | `src/components/Nav.astro` |
| Stopkę | `src/components/Footer.astro` |
| Kolory, czcionkę, odstępy | `src/styles/global.css` (sekcja `:root`) |
| Zdjęcia | folder `src/assets/img/` (podmień pliki, zachowując nazwy) |
| Adres domeny (SEO) | `astro.config.mjs` → `site` |

> ⚠️ **Zanim opublikujesz — uzupełnij prawdziwe dane** w `Kontakt.astro`:
> `email` i `telefon` mają teraz wartości przykładowe.

---

## 🎨 Kolory (w `src/styles/global.css`)

```
--lime   limonkowy akcent (przyciski)
--ink    ciemna zieleń (tekst)
--cream  jasne tło sekcji
```

Zmiana jednej wartości w `:root` zmienia kolor w całej stronie.

---

## 💡 Wskazówki dla początkującego

- Każda sekcja to osobny plik `.astro` — HTML na górze, style w `<style>` na dole.
- Zdjęcia optymalizują się automatycznie przy `npm run build` (zmniejszenie
  rozmiaru + format WebP), więc wrzucaj spokojnie duże pliki do `src/assets/img/`.
- Nic nie zepsujesz na produkcji, dopóki nie wgrasz nowego `dist/` na serwer.
