import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <Sidebar />

      <main className="lg:ml-72 min-h-screen pt-20 lg:pt-8 p-4 md:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}