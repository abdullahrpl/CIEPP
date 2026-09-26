import React, { useContext } from 'react';
import { Topbar } from './components/layout/Topbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { AppContext } from './context/AppContext';

// Import pages
import { HomePage } from './components/pages/HomePage';
import { EducationPage } from './components/pages/EducationPage';
import { ServicePage } from './components/pages/ServicePage';
import { StreetChildPage } from './components/pages/StreetChildPage';
import { InclusionPage } from './components/pages/InclusionPage';
import { CommunityPage } from './components/pages/CommunityPage';
import { ReportPage } from './components/pages/ReportPage';
import { DataPage } from './components/pages/DataPage';
import { InternalPage } from './components/pages/InternalPage';
import { PartnersPage } from './components/pages/PartnersPage';
import { AboutPage } from './components/pages/AboutPage';

import './index.css';

function App() {
    const context = useContext(AppContext);
    if (!context) return null;

    const { currentPage, highContrast, fontLarge } = context;

    const renderPage = () => {
        switch (currentPage) {
            case 'beranda':
                return <HomePage />;
            case 'edukasi':
                return <EducationPage />;
            case 'layanan':
                return <ServicePage />;
            case 'anjal':
                return <StreetChildPage />;
            case 'inklusi':
                return <InclusionPage />;
            case 'komunitas':
                return <CommunityPage />;
            case 'lapor':
                return <ReportPage />;
            case 'data':
                return <DataPage />;
            case 'internal':
                return <InternalPage />;
            case 'mitra':
                return <PartnersPage />;
            case 'tentang':
                return <AboutPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div
            className={`flex flex-col min-h-screen ${highContrast ? 'high-contrast' : ''}`}
            style={{ fontSize: fontLarge ? '1.12rem' : '1rem' }}
        >
            <a href="#main" className="skip-link">
                Lewati ke konten utama
            </a>
            <Topbar />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar />

                <main
                    id="main"
                    className="flex-1 overflow-auto p-10 md:p-12 lg:p-14 max-w-7xl mx-auto w-full md:ml-[250px]"
                    tabIndex={-1}
                >
                    {renderPage()}
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default App;
