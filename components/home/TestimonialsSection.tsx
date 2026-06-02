const testimonials = [
  {
    name: "Chad Combs",
    initials: "CC",
    quote: "Zack help me in so many ways to obtain my first home purchase. He is Fast reliable and relatable for any vet trying to navigate the Va loan process. Will by my first call if i decide to ever move and buy again.",
  },
  {
    name: "Ashley Aguirre",
    initials: "AA",
    quote: "Zack and his team were amazing from start to finish on our refinance! From explaining options in the beginning to being quick and efficient getting us closed. We couldn't ask for a better experience and because of this team, we are experiencing financial freedom for the first time in a long time!",
  },
  {
    name: "Alisson Mejia",
    initials: "AM",
    quote: "We had the pleasure of working with Zack as our loan lender, and we couldn't be happier! Zack was incredibly patient and always communicative, keeping us informed every step of the way. He made the entire process run smoothly, explaining everything thoroughly and ensuring we always had the paperwork we needed on time. He was punctual and professional throughout. Thanks to Zack, we got into our home seamlessly! We'll absolutely use Zack again for future needs, and we'd recommend him 1000% to anyone looking for a loan lender!",
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{ backgroundColor: "#0f172a", padding: "4rem 1.5rem", borderTop: "1px solid #1e293b" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(245, 197, 24, 0.1)", border: "1px solid rgba(245, 197, 24, 0.3)", borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.25rem" }}>
            <span style={{ color: "#f5c518", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>VETERAN REVIEWS</span>
          </div>
          <h2 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>
            What Veterans Are Saying
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.9375rem", margin: 0 }}>
            Real reviews from military families who worked with Zack
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {testimonials.map(t => (
            <div key={t.name} style={{
              backgroundColor: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "12px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: "0.2rem" }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} style={{ color: "#f5c518", fontSize: "1rem" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                color: "#cbd5e1",
                fontSize: "0.875rem",
                lineHeight: 1.75,
                margin: 0,
                flex: 1,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #1e293b" }}>
                <div style={{
                  width: "36px", height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245, 197, 24, 0.15)",
                  border: "1px solid rgba(245, 197, 24, 0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ color: "#f5c518", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.02em" }}>{t.initials}</span>
                </div>
                <div>
                  <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.875rem" }}>{t.name}</div>
                  <div style={{ color: "#475569", fontSize: "0.72rem", letterSpacing: "0.04em" }}>Verified Client</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
