import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*el layout envuelve la aplicacion y las rutas que se van a renderizar, es decir, el page.tsx*/}
      <body>
        {/* este children seria el page.tsx */}
        {children}
      </body>
    </html>
  );
}
