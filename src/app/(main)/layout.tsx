
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-card">
        {children}
      </main>
      <Footer />
    </div>
  );
}
