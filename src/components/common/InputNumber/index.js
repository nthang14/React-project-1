function InputNumber({ label, onUpArrow, onDownArrow, ...rest }) {
  return (
    <div className="custom-number-input">
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
          <div className="w-2 h-1 text-center input-number">{rest.value}</div>
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
