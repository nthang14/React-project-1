function ShowCountDown({ days, hours, minutes, seconds }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1 h-1 bg-black text-white flex items-center justify-center pr-px">
        {days.toString().padStart(2, '0')}
      </div>
      <div className="px-px mr-px w-0.5">D</div>
      <div className="w-1 h-1 bg-black text-white flex items-center justify-center ml-px">
        {hours.toString().padStart(2, '0')}
      </div>
      <span className="mx-px px-px">:</span>
      <div className="w-1 h-1 bg-black text-white flex items-center justify-center ml-px">
        {minutes.toString().padStart(2, '0')}
      </div>
      <span className="mx-px px-px">:</span>
      <div className="w-1 h-1 bg-black text-white flex items-center justify-center ml-px">
        {seconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
}
export default ShowCountDown;
