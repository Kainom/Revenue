



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
      <section>{latest}</section>
    </div>
  );
}
