function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f8ff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#333', marginBottom: '1rem' }}>
          Welcome to the Crewmate Creator!
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          This app lets you create, edit, and view fun profiles for your crewmates.
          Add details like name, color, and role, and manage your crewmate gallery with ease!
        </p>
      </div>
    </div>
  );
}

export default Home;
