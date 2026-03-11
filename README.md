# Dandela Academy v2 — Next.js App Router

Site vitrine professionnel, **App Router**, i18n FR/PT/EN, photos réelles.

## 🚀 Démarrage

```bash
npm install
npm run dev   # → http://localhost:3000
```

## 📂 Architecture App Router

```
dandela-academy/
├── app/
│   ├── layout.js        # Root layout (Server Component) + metadata
│   ├── page.js          # Entry point → <HomeClient />
│   └── globals.css      # Design system (variables, utilitaires)
├── components/
│   ├── HomeClient.js    # Shell 'use client' avec LangProvider
│   ├── Navbar.js        # Navigation sticky + LangSelector intégré
│   ├── LangSelector.js  # Dropdown FR 🇫🇷 / PT 🇦🇴 / EN 🇬🇧
│   ├── Hero.js          # Section hero animée
│   ├── Presentation.js  # Chiffres clés + atouts
│   ├── Formations.js    # 5 formations (cards colorées)
│   ├── Espaces.js       # Cybercafé, Cafétéria, Salles (photos picsum)
│   ├── Pourquoi.js      # 5 raisons de choisir Dandela
│   ├── Equipe.js        # Équipe complète (photos pravatar)
│   ├── Certification.js # INEFOP + certificat + partenaires
│   ├── Contact.js       # Formulaire + WhatsApp
│   ├── Footer.js        # Pied de page complet
│   └── *.module.css     # Styles CSS scopés
└── lib/
    ├── LangContext.js            # Context React (lang, setLang, t)
    └── i18n/translations.js     # FR + PT + EN complet
```

## 🌍 Multilingue

Le sélecteur de langue (🇫🇷 FR / 🇦🇴 PT / 🇬🇧 EN) est intégré dans la navbar.
Toutes les sections réagissent instantanément au changement de langue.

Architecture i18n :
- `lib/LangContext.js` — `LangProvider` + hook `useLang()`
- `lib/i18n/translations.js` — objet `{ fr, pt, en }` complet
- Chaque composant : `const { t } = useLang()` → textes traduits

## 📸 Photos

### Équipe (pravatar.cc)
Photos réalistes de https://i.pravatar.cc/150?img=N
- João Mbala → img=33
- Daniel Mbengui → img=52
- Ricardo Fernandes → img=57
- Samuel Costa → img=12
- Helena Martins → img=47
- Marta Lopes → img=44
- Sofia Almeida → img=49
- Paulo Neves → img=15
- António Silva → img=22
- Manuel Tavares → img=25
- Rosa Domingos → img=48

### Espaces (picsum.photos)
- Cybercafé → `picsum.photos/seed/cybertech01/800/480`
- Cafétéria → `picsum.photos/seed/cafecozy44/800/480`
- Salles → `picsum.photos/seed/classroom77/800/480`

Pour remplacer par de vraies photos, modifier les `src` dans `components/Espaces.js`.

## 🔧 Personnalisation rapide

| Fichier | À changer |
|---|---|
| `components/Contact.js` | Numéro WhatsApp réel |
| `components/Footer.js` | Adresse, email, tél |
| `components/Espaces.js` | URLs des vraies photos |
| `components/Equipe.js` | Vraies photos de l'équipe |
| `lib/i18n/translations.js` | Textes, options formations |

## 🎨 Design

- **Typographie** : Sora (titres) + Plus Jakarta Sans (corps)
- **Couleurs** : Bleu #1565D8 (dominant), Orange #FF9F1C (accent)
- **Composants** : CSS Modules — aucune dépendance externe
- **Responsive** : Mobile-first, breakpoints 480/600/768/900px
