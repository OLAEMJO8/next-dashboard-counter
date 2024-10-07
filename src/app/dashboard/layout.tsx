import { Sidebar } from "../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main className="flex flex-col items-center p-24 flex-1 ml-64">
        {children}
      </main>
    </>
  );
}
