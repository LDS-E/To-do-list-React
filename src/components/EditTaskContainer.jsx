

import { useState } from 'react';

const EditTaskContainer = ({ initialName, onSave, onCancel }) => {
  const [newName, setNewName] = useState(initialName);

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSave = () => {
    onSave(newName);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="editContainer" style={{ display: "flex" }}>
      <input type="text" className="editInput" value={newName} onChange={handleInputChange} />
      <button className="editButton" onClick={handleSave}>Edit</button>
      <button className="cancelButton" onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditTaskContainer;