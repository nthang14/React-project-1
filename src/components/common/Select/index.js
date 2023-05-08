function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest} onChange={(e) => rest.onChange(e.target.value)}>
      {options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
