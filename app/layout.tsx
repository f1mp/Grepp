import type {Metadata} from 'next';import './globals.css';import './theory.css';import './scale-fretboard.css';import './bass.css';import './tuner.css';import './tuning-presets.css';import './sound.css';
export const metadata:Metadata={title:'Grepp — Gitarr- och basverktyg',description:'Lär dig gitarr och bas med tydliga greppdiagram, fingerplaceringar, skalor, ljud och stämning.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="sv"><body>{children}</body></html>}

