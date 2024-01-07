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
        <h1>Titulo</h1>
        {/* este children seria el page.tsx */}
        <div style={{ border: '1px solid #000' }}>{children}</div>
      </body>
    </html>
  );
}
