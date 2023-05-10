function InputNumber({ label, onChange, onUpArrow, onDownArrow, ...rest }) {
  return (
    <div className="custom-number-input h-10 w-32">
      <label htmlFor="custom-input-number" className="w-full text-gray-700 font-semibold">
        {label}
      </label>
      <div className={`w-fit`}>
        <div className="flex flex-row relative form__input-number">
          <button
            onClick={onDownArrow}
            data-action="decrement"
            className=" bg-gray-300 w-1 h-1 text-gray-600 hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto  font-thin">−</span>
          </button>
          <input
            type="number"
            className="outline-none w-3 focus:outline-none text-center bg-gray-300 font-semibold  hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            {...rest}
            onChange={(e) => onChange(e.target.value)}
          ></input>
          <button
            onClick={onUpArrow}
            data-action="increment"
            className="bg-gray-300 border-gray-400 w-1 h-1 text-gray-600 hover:text-gray-700 hover:bg-gray-400 rounded-r cursor-pointer"
          >
            <span className="m-auto font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default InputNumber;
