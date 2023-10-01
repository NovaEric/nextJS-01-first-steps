
export default function PagesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <span className="text-5xl">
          {children}
        </span>
      </main>
    </>
  );
}