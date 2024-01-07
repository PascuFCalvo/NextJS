export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <p>Esto es el layout del dashboard</p>
      {children}
    </section>
  );
}
