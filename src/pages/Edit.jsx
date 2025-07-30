import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    async function fetchCrewmate() {
      const { data, error } = await supabase
        .from('crewmates')
        .select()
        .eq('id', id)
        .single();

      if (!error) setCrewmate(data);
    }

    fetchCrewmate();
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    const { name, role, color } = crewmate;

    const { error } = await supabase
      .from('crewmates')
      .update({ name, role, color })
      .eq('id', id);

    if (!error) navigate('/summary'); // or refresh current page
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setCrewmate((prev) => ({ ...prev, [name]: value }));
  }

  if (!crewmate) return <p>Loading...</p>;

  return (
    <form onSubmit={handleUpdate} className="edit-form">
      <h2>Edit Crewmate</h2>
      <input
        type="text"
        name="name"
        value={crewmate.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="role"
        value={crewmate.role}
        onChange={handleChange}
        placeholder="Role"
      />
      <input
        type="text"
        name="color"
        value={crewmate.color}
        onChange={handleChange}
        placeholder="Color"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
}
