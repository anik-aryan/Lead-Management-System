import Sidebar from "./Sidebar";

export default function Layout({
  children,
}) {
  return (
    <div className="min-h-screen bg-[#f5f6f8] flex">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}