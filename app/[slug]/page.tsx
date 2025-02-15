
import { urls } from "@/environment/route_urls";
import { redirect } from "next/navigation";

interface PageProps {
  params?: { slug?: string }; // Make `params` optional to prevent errors
}

export default async function RedirectPage({ params }: PageProps) {
  const slug    =   await params?.slug;
      
  const res = await fetch(urls.redirect_url+slug, {
      cache: "no-store", // Prevents caching issues
  });
    if (!res.ok) throw new Error("URL not found");

    const { link } = await res.json();
    if(link){
      redirect(link);
    }

  return <p>Invalid URL</p>;
}
