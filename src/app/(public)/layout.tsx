export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>public</h1>
      <div>{children}</div>
    </div>
  );
}
