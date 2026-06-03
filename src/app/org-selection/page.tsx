import { OrganizationList } from "@clerk/nextjs";

export default function orgSelection() {
  return (
    <div className="flex min-h-screen justify-center bg-background">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        appearance={{
          elements: {
            rootBox: "max-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
}
