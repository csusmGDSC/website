import Tabs from "@/components/main/admin/tabs";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Tabs />
      {children}
    </>
  );
}
