import heroImg from "@/assets/hero-abstract.jpg";

const FixedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 bg-center bg-cover bg-no-repeat pointer-events-none -z-50"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* subtle overlay to preserve readability but keep image visible */}
      <div className="absolute inset-0 bg-background/10" />
    </div>
  );
};

export default FixedBackground;
