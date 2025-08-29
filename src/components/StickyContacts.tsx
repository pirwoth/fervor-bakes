import { Mail, MessageCircle } from "lucide-react";

const StickyContacts = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/256700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-floating hover:shadow-elegant transition-all duration-500 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat on WhatsApp
        </div>
      </a>

      {/* Email */}
      <a
        href="mailto:hello@fervorbakes.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-floating hover:shadow-elegant transition-all duration-500 hover:scale-110"
        aria-label="Send us an email"
      >
        <Mail className="w-6 h-6" />
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Send Email
        </div>
      </a>
    </div>
  );
};

export default StickyContacts;