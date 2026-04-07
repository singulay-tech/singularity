import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{site.name}</p>
        <p>{site.slogan}</p>
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
      </div>
    </footer>
  );
}
