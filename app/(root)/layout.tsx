import Nav from "../components/Nav";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav></Nav>
      <main className="font-work-sans">{children}</main>
    </>
  );
}
