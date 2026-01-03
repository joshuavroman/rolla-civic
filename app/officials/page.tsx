import Link from "next/link";

type Official = {
  name: string;
  role: string;
  note?: string;
};

const MAYOR: Official = { name: "TBD", role: "Mayor" };

const COUNCIL: Official[] = Array.from({ length: 12 }).map((_, i) => ({
  name: "TBD",
  role: `Council Member ${i + 1}`,
}));

export default function OfficialsPage() {
  return (
    <main style={styles.page}>
      {/* Top Bar */}
      <header style={styles.topBar}>
        <div style={styles.brandRow}>
          <div style={styles.mascotBadge} aria-label="Bulldog">
            🐶
          </div>
          <div>
            <div style={styles.brandTitle}>Rolla Civic</div>
            <div style={styles.brandSub}>City Officials</div>
          </div>
        </div>

        <Link href="/" style={styles.backLink}>
          ← Back to Home
        </Link>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroAccent} />
        <h1 style={styles.h1}>Rolla City Officials</h1>
        <p style={styles.p}>
          Maroon. Gold. Silver. (And yes — bulldog energy.)
        </p>
      </section>

      {/* Mayor */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Mayor</h2>
        <div style={styles.gridOne}>
          <Card official={MAYOR} />
        </div>
      </section>

      {/* Council */}
      <section style={styles.section}>
        <h2 style={styles.h2}>City Council (12)</h2>
        <div style={styles.grid}>
          {COUNCIL.map((o) => (
            <Card key={o.role} official={o} />
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerLine} />
        <div style={styles.footerText}>
          Tip: Replace “TBD” with real names when you have them.
        </div>
      </footer>
    </main>
  );
}

function Card({ official }: { official: Official }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardTop}>
        <div style={styles.cardRole}>{official.role}</div>
        <div style={styles.cardPip} />
      </div>
      <div style={styles.cardName}>{official.name}</div>
      {official.note ? <div style={styles.cardNote}>{official.note}</div> : null}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(900px 500px at 50% 0%, rgba(255,215,0,0.12), transparent 60%), linear-gradient(180deg, #0b1226 0%, #070b16 100%)",
    color: "#eef2ff",
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
    padding: "28px 18px 48px",
  },

  topBar: {
    maxWidth: 1100,
    margin: "0 auto 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brandRow: { display: "flex", alignItems: "center", gap: 12 },
  mascotBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, #6b0f1a 0%, #2b0a12 100%)",
    border: "1px solid rgba(255,215,0,0.35)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    fontSize: 22,
  },
  brandTitle: {
    fontWeight: 800,
    letterSpacing: 0.2,
    color: "#f8fafc",
    lineHeight: 1.1,
  },
  brandSub: {
    fontSize: 12.5,
    color: "rgba(226,232,240,0.72)",
    marginTop: 2,
  },
  backLink: {
    textDecoration: "none",
    color: "rgba(255,215,0,0.92)",
    border: "1px solid rgba(255,215,0,0.35)",
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(107, 15, 26, 0.25)",
  },

  hero: {
    maxWidth: 1100,
    margin: "0 auto 26px",
    position: "relative",
    padding: "22px 18px",
    borderRadius: 18,
    border: "1px solid rgba(148,163,184,0.22)",
    background:
      "linear-gradient(135deg, rgba(107,15,26,0.32) 0%, rgba(15,23,42,0.22) 55%, rgba(148,163,184,0.10) 100%)",
    overflow: "hidden",
  },
  heroAccent: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(600px 180px at 20% 0%, rgba(255,215,0,0.18), transparent 60%), radial-gradient(500px 220px at 90% 10%, rgba(148,163,184,0.20), transparent 55%)",
    pointerEvents: "none",
  },
  h1: { position: "relative", margin: 0, fontSize: "2rem", fontWeight: 900 },
  p: {
    position: "relative",
    margin: "8px 0 0",
    color: "rgba(226,232,240,0.78)",
    maxWidth: 650,
  },

  section: { maxWidth: 1100, margin: "0 auto 22px" },
  h2: {
    margin: "0 0 12px",
    fontSize: "1.1rem",
    letterSpacing: 0.2,
    color: "rgba(248,250,252,0.92)",
  },

  gridOne: { display: "grid", gridTemplateColumns: "1fr", gap: 12 },
  grid: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  },

  card: {
    borderRadius: 18,
    padding: 16,
    border: "1px solid rgba(148,163,184,0.22)",
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(2,6,23,0.55) 100%)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
  },
  cardTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 },
  cardRole: {
    fontSize: 12,
    color: "rgba(226,232,240,0.72)",
    textTransform: "uppercase",
    letterSpacing: 0.9,
  },
  cardPip: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "linear-gradient(180deg, #FFD700 0%, #B8860B 100%)",
    boxShadow: "0 0 0 4px rgba(255,215,0,0.12)",
  },
  cardName: { marginTop: 10, fontSize: "1.25rem", fontWeight: 800, color: "#f8fafc" },
  cardNote: { marginTop: 6, color: "rgba(226,232,240,0.7)", fontSize: 13 },

  footer: { maxWidth: 1100, margin: "26px auto 0", paddingTop: 10 },
  footerLine: { height: 1, background: "rgba(148,163,184,0.18)" },
  footerText: { marginTop: 10, fontSize: 12.5, color: "rgba(226,232,240,0.6)" },
};
