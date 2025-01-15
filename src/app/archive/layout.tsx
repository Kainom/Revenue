export default function ArchiveLayour({
  archive,
  latest,
}: Readonly<{
  archive: React.ReactNode;
  latest:React.ReactNode
}>) {
    return (
      <div>
        {archive}
        <div className="w-10/12 border-t-[1px] border-foreground-tertiary mx-auto my-10 mt-14 ">

        </div>
        {latest}
      </div>
    );
}
