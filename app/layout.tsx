import type {Metadata} from 'next';import './globals.css';import './theory.css';
export const metadata:Metadata={title:'Grepp — Gitarrackord som lyssnar',description:'Lär dig gitarrackord med tydliga greppdiagram och identifiera ackord via mikrofonen.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="sv"><body>{children}</body></html>}
