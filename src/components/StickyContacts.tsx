import { Mail } from "lucide-react";

const StickyContacts = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=256773896703&text=Hello%20Fervor%20Bakes%2C%20I%20need%20more%20info"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="group text-white p-0 rounded-full w-15 h-15 flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
        aria-label="Contact us on WhatsApp (+256 773 896 703)"
      >
        {/* Inline WhatsApp SVG (keeps styling consistent without extra package exports) */}
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 .002 5.373 0 12c0 2.112.55 4.132 1.598 5.93L0 24l6.354-1.642A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.205-1.247-6.207-3.48-8.52z" fill="#25D366"/>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.173.2-.297.3-.496.099-.198.05-.372-.025-.521-.075-.149-.672-1.62-.92-2.219-.242-.579-.487-.5-.672-.51l-.572-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487 2.982 1.288 2.982.859 3.522.805.54-.05 1.758-.715 2.006-1.405.248-.69.248-1.28.173-1.405-.074-.124-.272-.198-.57-.347z" fill="#FFF"/>
        </svg>
  <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="font-medium">Chat on WhatsApp</div>
          <div className="text-xs text-primary-foreground/90 mt-1">+256 773 896 703</div>
        </div>
      </a>
    </div>
  );
};

export default StickyContacts;