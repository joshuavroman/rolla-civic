export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <a
        href="/officials"
        style={{
          marginBottom: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#FFD700",
          color: "#0f172a",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: "6px",
        }}
      >
        View City Officials
      </a>

      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Rolla Civic</h1>

      <p style={{ fontSize: "1.25rem", maxWidth: "600px", marginBottom: "1rem" }}>
        A simple civic information platform for the City of Rolla.
      </p>

      <p style={{ opacity: 0.7 }}>More coming soon.</p>
    </main>
  );
}
