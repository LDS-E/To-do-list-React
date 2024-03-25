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
    <div className="flex m-auto p-2" >
      <input type="text" className="editInput  bg-slate-300 p-2 inputItem rounded-lg" value={newName} onChange={handleInputChange} />
      <button className="px-4 py-2 mx-4 bg-amber-500 hover:bg-amber-600 rounded-lg  shadow-emerald-50" onClick={handleSave}>Edit</button>
      <button className="px-4 py-2 mx-4 bg-amber-500 hover:bg-amber-600 rounded-lg  shadow-emerald-50" onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditTaskContainer;