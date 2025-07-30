
import { useState } from 'react';
import supabase from '../supabase';

function Create() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    color: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { name, role, color } = formData;

    const { error } = await supabase
      .from('crewmates')
      .insert([{ name, role, color }]);

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Crewmate created!' });
      setFormData({ name: '', role: '', color: '' }); // reset form
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Create a Crewmate</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange} 
            required
          />
        </div>
        <div>
          <label>Role:</label><br />
          <input 
            type="text" 
            name="role" 
            value={formData.role}
            onChange={handleChange} 
            required
          />
        </div>
        <div>
          <label>Color:</label><br />
          <input 
            type="text" 
            name="color" 
            value={formData.color}
            onChange={handleChange} 
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Create'}
        </button>
      </form>

      {message && (
        <p style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.text}
        </p>
      )}
    </div>
  );
}

export default Create;
