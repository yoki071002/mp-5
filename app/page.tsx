import PostPreview from "@/components/LinkPreview";
import getAllLinks from "@/lib/getAllLinks";
import LinksDisplay from "@/components/LinksDisplay";

export const metadata = {
  title: "CS391 URL Shortener",
  description: "Create a custom URL that is easier for sharing and redirecting"
}

export default async function Home() {
  const links = await getAllLinks();

  return (
    <div className="flex flex-col items-center bg-purple-200 p-4">
      <LinksDisplay inputLinks={links} />
    </div>
  );
}