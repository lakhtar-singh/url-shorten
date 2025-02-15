
import { urls } from "@/environment/route_urls";
import { redirect } from "next/navigation";


export default async function RedirectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug; // Ensure params is handled synchronously
   
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
