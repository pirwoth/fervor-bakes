import { useState } from "react";
import { Instagram, Facebook, X, Music } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-16 px-6">
      <div className="max-w-3xl w-full">
        <div className="bg-card rounded-2xl shadow-elegant p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/assets/hero-abstract.jpg"
              alt="Giramia Joan Dodrege"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />

            <div className="flex-1 text-center md:text-left">
              <h1 className="font-heading text-3xl text-primary font-bold">
                Giramia Joan Dodrege
              </h1>
              <p className="text-muted-foreground mt-2">Master Baker & Founder</p>

              <p className="mt-4 text-foreground/80">
                Joan crafts each pastry with love and discipline. Her philosophy fuses
                tradition with creativity to produce memorable flavors.
              </p>

              <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" aria-label="X (Twitter)" className="text-muted-foreground hover:text-primary">
                  <X className="w-6 h-6" />
                </a>
                <a href="#" aria-label="TikTok" className="text-muted-foreground hover:text-primary">
                  <Music className="w-6 h-6" />
                </a>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setExpanded((s) => !s)}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View more
                  <span className="inline-block transform transition-transform" aria-hidden>
                    {expanded ? "▲" : "▼"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {expanded && (
            <div className="mt-6 border-t border-border pt-6 text-foreground/90 space-y-4">
              <p>
                Giramia Joan started baking as a child, learning family recipes passed
                down through generations. Over the years she trained in artisan techniques
                and developed a particular love for laminated doughs and delicate
                decorative finishes.
              </p>

              <p>
                Her work focuses on seasonal ingredients and thoughtful presentation. In
                addition to running Fervor Bakes, Joan teaches occasional workshops and
                contributes to local community food events.
              </p>

              <p>
                For collaborations or bookings reach out via the contact page or through
                her social channels above.
              </p>

            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
