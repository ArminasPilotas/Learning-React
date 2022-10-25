function FormControl({ htmlFor, label, children }) {
  return (
    <div className="p-2 flex flex-col">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}

export default FormControl;
