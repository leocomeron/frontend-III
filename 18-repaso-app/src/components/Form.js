const Form = ({ onSubmit, onNameChange, name }) => {
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="name" value={name} onChange={onNameChange}></input>
      <button>Log in</button>
    </form>
  );
};

export default Form;
