# CIEPP React + Tailwind CSS

Konversi dari HTML standalone menjadi React aplikasi dengan Tailwind CSS untuk CIEPP — Platform Pendidikan Inklusif dan Perlindungan Anak.

## Fitur

✨ **Struktur Komponen**
- Layout terpisah: Topbar, Sidebar, MainContent, Footer
- 11 halaman sebagai komponen terpisah
- State management dengan Context API
- Responsive design dengan Tailwind CSS

✨ **Fungsionalitas**
- Navigasi antar halaman
- Font size toggle (A+/A−)
- High contrast mode
- Mobile-friendly responsive layout

✨ **Theme**
Mengikuti desain asli dengan color palette:
- Primary: #1f5c99
- Accent: #2b8a6e
- Muted: #667085
- Warning: #fff5d8
- Danger: #ffeded

## Struktur Folder

```
ciepp-react/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Topbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   └── pages/
│   │       ├── HomePage.tsx
│   │       ├── EducationPage.tsx
│   │       ├── ServicePage.tsx
│   │       ├── StreetChildPage.tsx
│   │       ├── InclusionPage.tsx
│   │       ├── CommunityPage.tsx
│   │       ├── ReportPage.tsx
│   │       ├── DataPage.tsx
│   │       ├── InternalPage.tsx
│   │       ├── PartnersPage.tsx
│   │       └── AboutPage.tsx
│   ├── context/
│   │   └── AppContext.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Setup

### 1. Install Dependencies
```bash
cd ciepp-react
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:3000`

### 3. Build untuk Production
```bash
npm run build
```

Output akan tersimpan di folder `dist/`

## Dependencies

- **React 18.2**: Framework UI
- **Vite**: Build tool & dev server
- **Tailwind CSS 3.3**: Utility-first CSS framework
- **TypeScript**: Type safety

## Pages Tersedia

1. **Beranda** - Homepage dengan hero section dan journey flow
2. **Edukasi & Pencegahan** - Modul edukasi dengan 9 kategori konten
3. **Layanan & Rujukan** - Service journey timeline dan partner cards
4. **Anak Jalanan & Pekerja Anak** - Jalur khusus penanganan
5. **Pendidikan Inklusif / ABK** - Accessibility guidelines
6. **PATBM & Jejaring Desa** - Community-based prevention
7. **Pengaduan / Permintaan Bantuan** - Demo form dengan 6 fields
8. **Dashboard Data** - KPI cards dan charts
9. **Ruang Petugas** - Case management dengan role switcher
10. **Mitra & MoU** - Partner network configuration
11. **Tentang & Tata Kelola** - Prinsip desain dan governance

## Fitur Tambahan

### 1. Dark Mode / High Contrast
Tombol "Kontras" di topbar untuk toggle mode tinggi
- Dark background (#000)
- Bright text (#fff)
- Adjusted color palette

### 2. Font Size Toggle
Tombol "A+/A−" untuk memperbesar/memperkecil font
- Default: 1rem
- Large: 1.12rem

### 3. State Management
Menggunakan React Context untuk:
- Current page
- Font size state
- High contrast state

## Customization

### Ubah Theme Colors
Edit di `tailwind.config.js`:
```js
colors: {
  primary: {
    DEFAULT: '#1f5c99',
    dark: '#133f70',
  },
  accent: '#2b8a6e',
  // ... color lainnya
}
```

### Tambah Halaman Baru
1. Buat komponen di `src/components/pages/NewPage.tsx`
2. Import di `src/App.tsx`
3. Tambah case ke switch statement
4. Tambah ke PageId type di `src/types/index.ts`
5. Tambah nav item di `src/components/layout/Sidebar.tsx`

### Modify Tailwind Classes
Edit di `src/index.css` untuk custom components:
```css
@layer components {
  .btn-primary {
    @apply px-[15px] py-[10px] ...;
  }
}
```

## TypeScript

Semua komponen menggunakan TypeScript untuk type safety. Props dan state didefinisikan dengan interfaces.

## Accessibility

- Skip to main content link
- Semantic HTML (header, main, footer, nav, aside, article)
- ARIA labels pada buttons
- Focus management
- Keyboard navigation support

## Performance

- Code splitting dengan Vite
- Tree shaking untuk unused CSS
- Lazy loading support
- Optimized images

## Notes

- Ini adalah dummy prototype tanpa backend
- Form submissions tidak mengirim data ke server
- Semua data adalah dummy/fiktif
- Cocok untuk co-design dan demo

## License

Untuk keperluan internal CIEPP Project
