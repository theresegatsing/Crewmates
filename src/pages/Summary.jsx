import { useEffect, useState } from 'react';
import supabase from '../supabase';

function Summary() {
  const [crewmates, setCrewmates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmates = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching crewmates:', error.message);
      } else {
        setCrewmates(data);
      }

      setLoading(false);
    };

    fetchCrewmates();
  }, []);

  return (
    <div className="summary-container">
      <h2>Crewmate Summary</h2>
      {loading ? (
        <p>Loading crewmates...</p>
      ) : (
        <ul className="crewmate-list">
          {crewmates.map((mate) => (
            <li key={mate.id} className="crewmate-card" style={{ borderColor: mate.color }}>
              <p><strong>Name:</strong> {mate.name}</p>
              <p><strong>Role:</strong> {mate.role}</p>
              <p><strong>Color:</strong> {mate.color}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Summary;
