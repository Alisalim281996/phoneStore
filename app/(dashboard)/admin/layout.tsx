

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <h2>Dashboard</h2>

      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
        </div>
        <div className="lg:col-span-10 px-4">
          {children}
        </div>
      </section>
    </main>
  );
}
