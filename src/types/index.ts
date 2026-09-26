export type PageId = 'beranda' | 'edukasi' | 'layanan' | 'anjal' | 'inklusi' | 'komunitas' | 'lapor' | 'data' | 'internal' | 'mitra' | 'tentang';

export interface AppContextType {
    currentPage: PageId;
    setCurrentPage: (page: PageId) => void;
    fontLarge: boolean;
    setFontLarge: (large: boolean) => void;
    highContrast: boolean;
    setHighContrast: (contrast: boolean) => void;
}
