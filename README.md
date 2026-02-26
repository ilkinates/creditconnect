# CreditConnect — Fintech SaaS Platform

Qredits financiering platformu için tam kapsamlı Next.js web sitesi.

---

## 🚀 Vercel'e Deploy (En Kolay Yol)

### Adım 1: GitHub Repo Oluştur
1. **github.com/new** adresine git
2. Repo adı: `creditconnect` (Public veya Private)
3. "Create repository" tıkla

### Adım 2: Kodu GitHub'a Yükle
```bash
# ZIP'i aç
unzip creditconnect-local.zip
cd creditconnect-local

# Git başlat ve push et
git init
git add .
git commit -m "Initial commit - CreditConnect platform"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/creditconnect.git
git push -u origin main
```

### Adım 3: Vercel'de Deploy Et
1. **vercel.com/new** adresine git
2. GitHub hesabını bağla
3. `creditconnect` reposunu seç
4. **Deploy** butonuna bas
5. ✅ Bitti! Site otomatik olarak yayında.

---

## 📁 Proje Yapısı

```
creditconnect-local/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + metadata
│   │   ├── page.tsx            # Ana sayfa (Router shell)
│   │   └── globals.css         # Global stiller
│   ├── lib/
│   │   ├── tokens.ts           # Design system tokenleri
│   │   └── router-context.tsx  # Client-side router context
│   └── components/
│       ├── ui/
│       │   ├── shared.tsx      # Paylaşılan UI bileşenleri
│       │   ├── Navbar.tsx      # Navigation bar
│       │   └── Footer.tsx      # Footer
│       └── pages/
│           ├── HomePage.tsx         # Ana sayfa
│           ├── FinancieringPage.tsx  # Finansman sayfası
│           ├── HoeHetWerktPage.tsx   # Nasıl çalışır
│           ├── OverOnsPage.tsx       # Hakkımızda
│           ├── FAQPage.tsx           # SSS
│           ├── ContactPage.tsx       # İletişim
│           └── PartnersPage.tsx      # Partnerler
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## 📄 Sayfalar

| Sayfa | Açıklama |
|-------|----------|
| **Home** | Hero, trust bar, ürünler, istatistikler, testimonials, CTA |
| **Financiering** | Bedrag + Looptijd slider (12-120 ay), ürün detayları |
| **Hoe het werkt** | 4 adımlık süreç (KVK, Open Banking, Lening, AI Plan) |
| **Over ons** | Misyon, değerler, ekip |
| **FAQ** | Accordion SSS (3 kategori) |
| **Contact** | İletişim formu + bilgiler |
| **Partners** | Adviseur/partner programı |

## 🛠 Teknoloji Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animasyonlar)

## 🎨 Design System

- Font: **Outfit** (Google Fonts)
- Primary: `#0066FF`
- Accent: `#00D68F`
- Bridgefund.nl estetiği: whitespace, soft shadows, rounded cards
