export default function AccountLayout({
  children,
  credential,
}: Readonly<{
  children: React.ReactNode;
  credential: React.ReactNode;
}>) {
  return (
    <>
     <main className="bg-background-tertiary p-4 py-12">
       {children}
       {credential}
     </main>
    </>
  );
}
