import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <div className="md:w-64 hidden md:block fixed h-full">
          <SideNav />
        </div>

        {/* Main content */}
        <div className="md:ml-64">
          <Header />
          <div>{children}</div>
        </div>
      </section>
    </>
  );
}
