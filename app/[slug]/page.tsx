"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { urls } from "@/environment/route_urls";

export default function RedirectPage({ params }: { params: { slug: string } }) {
  const router      =   useRouter();
  const { slug }    =   params;

  useEffect(() => {
    async function fetchAndRedirect() {
      try {
        const res = await fetch(urls.redirect_url+slug);
        if (!res.ok) throw new Error("URL not found");

        const { link } = await res.json();
        window.location.href = link; // Client-side redirect
        
      } catch (error) {
        router.push("/404");
      }
    }

    fetchAndRedirect();
  }, [slug, router]);

  return <p>Redirecting...</p>;
}
