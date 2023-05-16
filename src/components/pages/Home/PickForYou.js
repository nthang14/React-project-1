import { useNavigate } from 'react-router-dom';
function PickForYou({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="font-bold text-center home-title pb-0.5">{data?.title}</div>
      <div className="grid grid-cols-3 gap-1">
        {data?.content &&
          data.content.map((item, index) => {
            return (
              <div key={index} onClick={() => navigate(item.url)} className="cursor-pointer">
                <img alt={item.image} src={item.image} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default PickForYou;
