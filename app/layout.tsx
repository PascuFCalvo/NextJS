import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*el layout envuelve la aplicacion y las rutas que se van a renderizar, es decir, el page.tsx*/}
      <body className={`${montserrat.className} antialiased`}>
        {/* este children seria el page.tsx */}
        <p>si quisiera un componente para toda la app iria aqui</p>
        {children}
        <footer className="flex items-center justify-center py-10">
          Hecho con amor ❤️ para aprender a usar nextJS{' '}
        </footer>
      </body>
    </html>
  );
}
