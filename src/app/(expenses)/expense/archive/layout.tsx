import { MonthExpenseNav } from "@/components/expense/MonthExpenseNav";




export default function ArchiveLayout({
  archive,
  latest,
}: Readonly<{
  latest: React.ReactNode;
  archive: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <MonthExpenseNav  />
      <section>{archive}</section>
      <section>{latest}</section>
    </div>
  );
}
