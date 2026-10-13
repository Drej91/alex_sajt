# Lorem Designs — sajt za grafički dizajn i brending

Statički sajt (HTML, CSS, JavaScript) bez build koraka. Tekst je lorem ipsum, slike su placeholder sa [picsum.photos](https://picsum.photos).

## Struktura

```
index.html        Početna
usluge.html       Usluge
portfolio.html    Portfolio (sa filterom kategorija)
o-meni.html       O meni
kontakt.html      Kontakt forma + česta pitanja
assets/css/style.css   Svi stilovi (boje su na vrhu, u :root)
assets/js/main.js      Header, footer, meni, odbrojavanje, animacije
```

## Gde se šta menja

- **Naziv u logu, navigacija, footer, društvene mreže:** `assets/js/main.js` (važi za sve stranice).
- **Datum odbrojavanja u gornjoj traci:** `PROMO_DEADLINE` u `assets/js/main.js`.
- **Boje i font:** promenljive na vrhu `assets/css/style.css`.
- **Slike:** zameniti `https://picsum.photos/seed/...` putanjama do pravih slika (npr. `assets/img/hero.jpg`).
- **Forme:** trenutno su demo (ne šalju ništa). Za pravo slanje može se koristiti npr. Formspree ili Mailchimp.

## Lokalni pregled

Dovoljno je otvoriti `index.html` u browseru.

## Objavljivanje na GitHub Pages

1. Push na GitHub repozitorijum.
2. Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
