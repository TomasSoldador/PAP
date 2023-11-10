const DataInput = ({ label, value, onChange, options }) => (
   <>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
         {options.map(option => (
            <option key={option.value} value={option.value}>
               {option.label}
            </option>
         ))}
      </select>
   </>
   
);

export default DataInput;