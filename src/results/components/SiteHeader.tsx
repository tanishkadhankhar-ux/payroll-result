import { Wordmark } from "@/kit/Wordmark";

export function SiteHeader() {
  return (
    <header className="top">
      <Wordmark />
      <a className="disclosure" href="#disclosure">
        Advertiser Disclosure
      </a>
    </header>
  );
}
