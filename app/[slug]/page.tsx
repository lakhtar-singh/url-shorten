"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { slug } = params;

  useEffect(() => {
    async function fetchAndRedirect() {
      try {
        const res = await fetch(`http://localhost:5000/redirect-url/${slug}`);
        if (!res.ok) throw new Error("URL not found");

        const { link } = await res.json();
        router.replace(link); // Redirect to the original URL
      } catch (error) {
        console.error("Error fetching URL:", error);
      }
    }

    fetchAndRedirect();
  }, [slug, router]);

  return <p>Redirecting...</p>;
}
