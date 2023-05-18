import useCountDown from '~/hooks/useCountDown';
import ShowCountDown from './ShowCountDown';
function FlashDeal({ data }) {
  const [days, hours, minutes, seconds] = useCountDown(data?.data?.dateEnd);
  return (
    <div>
      <div className="font-bold text-center home-title pb-0.5">{data?.title}</div>
      <div className={`grid  grid-cols-7 gap-1 flex`}>
        <div className="relative">
          <img alt={data?.data?.image} src={data?.data?.image} />
          <div className="absolute flash-deal__time">
            <div>
              <ShowCountDown days={days} hours={hours} minutes={minutes} seconds={seconds} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlashDeal;
