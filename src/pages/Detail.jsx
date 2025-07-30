import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../supabase';

export default function Detail() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    async function fetchCrewmate() {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single();

      if (error) console.error('Error fetching crewmate:', error);
      else setCrewmate(data);
    }

    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{crewmate.name}</h2>
      <p><strong>Color:</strong> {crewmate.color}</p>
      <p><strong>Created at:</strong> {new Date(crewmate.created_at).toLocaleString()}</p>
      
      <Link to={`/edit/${crewmate.id}`} style={{
        display: 'inline-block',
        marginTop: '20px',
        backgroundColor: '#4f46e5',
        color: 'white',
        padding: '10px 16px',
        borderRadius: '8px',
        textDecoration: 'none'
      }}>
        Edit this crewmate
      </Link>
    </div>
  );
}
