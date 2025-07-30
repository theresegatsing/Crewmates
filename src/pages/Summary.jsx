import { useEffect, useState } from 'react';
//import Edit from './Edit';
import supabase from '../supabase';
import { useNavigate } from 'react-router-dom';

function Summary() {
  const [crewmates, setCrewmates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Function to generate a random light color
  const getRandomLightColor = () => {
    const colors = ['#d0f0fd', '#fde2e4', '#e2f0cb', '#fdf1d1', '#e0eafc', '#fce1f0'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select()
        .order('created_at', { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setCrewmates(data);
      }
      setLoading(false);
    };

    fetchCrewmates();
  }, []);

  if (loading) return <p>Loading crewmates...</p>;

  return (
    <div>
      <h2>Your Crewmate Gallery!</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {crewmates.map((mate) => (
          <div
            key={mate.id}
            style={{
              backgroundColor: getRandomLightColor(),
              padding: '16px',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              width: '200px',
              height: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
          >
            <p>Name: {mate.name}</p>
            <p>Role: {mate.role}</p>
            <p>Color: {mate.color}</p>
            <button type='button' onClick={() => navigate(`/edit/${mate.id}`)}> Edit crewmate</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summary;
