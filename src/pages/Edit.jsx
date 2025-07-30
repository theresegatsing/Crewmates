import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../supabase';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCrewmate() {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching crewmate:", error.message);
        return;
      }

      setCrewmate(data);
      setLoading(false);
    }

    fetchCrewmate();
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setCrewmate((prev) => ({ ...prev, [name]: value }));
  }

  async function handleUpdate(e) {
    e.preventDefault();
    const { name, role, color } = crewmate;

    const { error } = await supabase
      .from('crewmates')
      .update({ name, role, color })
      .eq('id', id);

    if (error) {
      console.error("Error updating crewmate:", error.message);
      return;
    }

    navigate('/summary');
  }

  if (loading) return <p>Loading...</p>;
  if (!crewmate) return <p>Crewmate not found.</p>;

  return (
    <div style = {{maxWidth: '500px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f0f8ff'
    }}>
        <form onSubmit={handleUpdate} className="edit-form">
        <h2>Edit Crewmate</h2>
        <input
            type="text"
            name="name"
            value={crewmate.name}
            onChange={handleChange}
            placeholder="Name"
            required
        />
        <input
            type="text"
            name="role"
            value={crewmate.role}
            onChange={handleChange}
            placeholder="Role"
            required
        />
        <input
            type="text"
            name="color"
            value={crewmate.color}
            onChange={handleChange}
            placeholder="Color"
            required
        />
        <button type="submit">Save Changes</button>
        </form>
    </div>
  );
}

export default Edit;
