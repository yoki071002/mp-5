import LinksDisplay from "@/components/LinksDisplay";

export const metadata = {
  title: "CS391 URL Shortener",
  description: "Create a custom URL that is easier for sharing and redirecting"
}

export default async function Home() {

  return (
    <div className="flex flex-col items-center bg-purple-200 p-4">
      <LinksDisplay />
    </div>
  );
}