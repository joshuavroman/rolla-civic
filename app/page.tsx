export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "system-ui, sans-serif",
      background: "#0f172a",
      color: "white",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Rolla Civic (Work in Progress)
      </h1>

      <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>
        A simple civic information platform for the City of Rolla.
      </p>

      <p style={{ marginTop: "2rem", opacity: 0.7 }}>
        More coming soon.
      </p>
    </main>
  );
}
