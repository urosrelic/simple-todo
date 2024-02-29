export const TaskDetails = ({ dateValue, handleDelete }) => {
  return (
    <div className='task-details'>
      <div className='due-date'>
        Due: {dateValue === null ? 'Date not selected' : dateValue}
      </div>
      <div className='note-section'>
        <textarea className='note' placeholder='Add a note...'></textarea>
      </div>
    </div>
  );
};
