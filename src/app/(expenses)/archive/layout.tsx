export default function ArchiveLayout({
  archive,
  latest,
}: Readonly<{
  latest: React.ReactNode;
  archive: React.ReactNode;
}>) {
  return (
    <div>
      <section>{archive}</section>
      <div className="my-10 w-10/12 mx-auto  px-2">
        <div className="border-t-sm border-gray-600   "></div>
      </div>
      <section>{latest}</section>
    </div>
  );
}
