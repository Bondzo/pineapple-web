import React, { useState } from 'react';
import './App.css';

interface SolutionOption {
  id: string;
  name: string;
  tagline: string;
  stack: string;
  delivery: string;
  highlights: string[];
}

const solutions: SolutionOption[] = [
  {
    id: 'pos',
    name: 'Kasir & Inventaris (POS)',
    tagline: 'Otomasi stok barang fisik, riwayat transaksi instan, dan nota digital WhatsApp.',
    stack: 'React 19 • Laravel REST API • SQLite/PostgreSQL',
    delivery: '7–12 Hari Kerja',
    highlights: ['Multi-cabang real-time', 'Barcode scanner mobile', 'Laporan laba otomatis']
  },
  {
    id: 'absensi',
    name: 'Dashboard Absensi GPS',
    tagline: 'Verifikasi radius kehadiran tim, kamera selfie, dan approval izin tanpa kertas.',
    stack: 'Next.js • Geofencing API • Supabase Cloud',
    delivery: '10–14 Hari Kerja',
    highlights: ['Radius presisi 25m', 'Approval berjenjang', 'Ekspor rekap Excel']
  },
  {
    id: 'booking',
    name: 'Portal Booking & Jadwal',
    tagline: 'Pelanggan reservasi langsung sesuai ketersediaan slot tanpa repot tanya admin.',
    stack: 'Inertia React • Tailwind • WhatsApp Webhook',
    delivery: '6–10 Hari Kerja',
    highlights: ['Slot kalender real-time', 'Reminder otomatis WA', 'Sinkron Google Calendar']
  },
  {
    id: 'profile',
    name: 'Web Profil Otoritas',
    tagline: 'Halaman identitas bisnis performa tinggi yang memuat cepat di ponsel calon klien.',
    stack: 'React • Hallmark Anti-Slop (LCP < 300ms)',
    delivery: '3–6 Hari Kerja',
    highlights: ['Bebas bloatware/plugin', 'Tampilan mobile presisi', 'SEO teknis terstruktur']
  }
];

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SolutionOption>(solutions[0]);

  return (
    <div className="page-wrapper">
      {/* Masthead Navigation */}
      <header className="masthead">
        <div className="shell masthead-inner">
          <a href="/" className="brand">
            <img src="/logo_nobg.png" alt="Pineapple Logo" className="brand-logo-img" />
            <div className="brand-text-block">
              <span className="brand-title">Pineapple</span>
              <span className="brand-badge">Web Solution</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#solusi" className="nav-link">Katalog Solusi</a>
            <a href="#arsitektur" className="nav-link">Standar Kode</a>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Pineapple%2C%20saya%20ingin%20konsultasi%20Web%20Solution" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary"
            >
              Mulai Konsultasi →
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION · Asymmetric Apple Layout */}
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-text-col reveal-on-scroll">
              <h1 className="hero-statement">
                Sistem web yang bekerja nyata untuk bisnis Anda.
              </h1>
              <p className="hero-sub">
                Kami merancang aplikasi web dan sistem operasional kustom tanpa template pasaran. Cepat dibuka, mudah dikelola, dan langsung menyelesaikan kendala pencatatan manual.
              </p>
              <div className="hero-actions">
                <a 
                  href="https://wa.me/6281234567890?text=Halo%20Pineapple%2C%20saya%20tertarik%20membahas%20Web%20Solution" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Ajukan Kebutuhan →
                </a>
                <a href="#solusi" className="btn-secondary">
                  Lihat Solusi Siap Bangun
                </a>
              </div>
            </div>

            {/* Right: Premium Pineapple Art Visual Frame */}
            <div className="visual-hero-frame reveal-on-scroll">
              <img 
                src="/hero_visual.jpg" 
                alt="Pineapple Web Solution Visual Workspace" 
                className="hero-art-img" 
              />
            </div>
          </div>
        </section>

        {/* SECTION 1 · INTERACTIVE SHOWCASE */}
        <section id="solusi" className="section reveal-on-scroll">
          <div className="shell">
            <div className="section-header-compact">
              <h2>Solusi yang Langsung Dipakai Operasional</h2>
            </div>

            {/* Tab Selector */}
            <div className="tab-pill-bar">
              {solutions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`tab-pill ${activeTab.id === item.id ? 'active' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Asymmetric Interactive Showcase Card */}
            <div className="showcase-card">
              <div className="showcase-left">
                <h3 className="showcase-title">{activeTab.name}</h3>
                <p className="showcase-tagline">{activeTab.tagline}</p>

                <div className="showcase-meta-grid">
                  <div className="meta-box">
                    <span className="meta-lbl">Pilihan Stack</span>
                    <strong className="meta-val">{activeTab.stack}</strong>
                  </div>
                  <div className="meta-box">
                    <span className="meta-lbl">Estimasi Rilis</span>
                    <strong className="meta-val tnum">{activeTab.delivery}</strong>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20Pineapple%2C%20saya%20ingin%20membuat%20${encodeURIComponent(activeTab.name)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-primary" 
                  style={{ alignSelf: 'flex-start', marginTop: 'var(--space-md)' }}
                >
                  Konsultasikan Modul Ini →
                </a>
              </div>

              <div className="showcase-right">
                <span className="right-heading">Kemampuan Utama:</span>
                <ul className="highlight-list">
                  {activeTab.highlights.map((h, idx) => (
                    <li key={idx} className="highlight-item">
                      <span className="h-check">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="right-note">
                  Setiap sistem diserahkan dengan source code lengkap, dokumentasi instalasi, dan panduan admin.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 · ENGINEERING STANDARDS (Clean 2-Column) */}
        <section id="arsitektur" className="section reveal-on-scroll">
          <div className="shell standard-grid">
            <div className="standard-col">
              <h2>Standar Mutu Perusahaan</h2>
              <p className="standard-lead">
                Kami membangun perangkat lunak dengan pendekatan arsitektur yang terstruktur agar aplikasi Anda berumur panjang dan tidak ambruk saat bisnis berkembang.
              </p>
              
              <div className="points-stack">
                <div className="point-card">
                  <h4>Database Ternormalisasi</h4>
                  <p>Struktur relasi tabel ketat mencegah data ganda, inkonsistensi transaksi, dan kebocoran stok.</p>
                </div>
                <div className="point-card">
                  <h4>Antarmuka Lugas &amp; Cepat</h4>
                  <p>Navigasi mudah dipahami karyawan lapangan tanpa perlu manual book ratusan halaman.</p>
                </div>
                <div className="point-card">
                  <h4>Keamanan &amp; Backup Rutin</h4>
                  <p>Validasi input mencegah serangan umum (CSRF, SQL Injection) dengan skema backup otomatis.</p>
                </div>
              </div>
            </div>

            <div className="standard-cta-box">
              <h3>Punya ide sistem atau kendala alur kerja di bisnis Anda?</h3>
              
              <a 
                href="https://wa.me/6281234567890?text=Halo%20Pineapple%2C%20saya%20mau%20konsultasi%20sistem" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary" 
                style={{ width: '100%', marginTop: 'var(--space-lg)' }}
              >
                Chat WhatsApp Langsung →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="colophon">
        <div className="shell colophon-inner">
          <div className="col-brand-area">
            <span className="brand-foot">Pineapple</span>
            <p>Web Solution dan aplikasi bisnis kustom. Surabaya &amp; Sekitarnya.</p>
          </div>
          
          <div className="col-links-area">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">WhatsApp Admin</a>
            <span>© 2026 Pineapple</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
