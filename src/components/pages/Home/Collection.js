import { useNavigate } from 'react-router-dom';
function Collection({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="font-bold text-center home-title pb-0.5">{data?.title}</div>
      <div className={`grid  grid-cols-8 gap-1 flex`}>
        {data?.collections?.length &&
          data.collections.map((item, index) => {
            return (
              <div key={index} onClick={() => navigate(item.url)}>
                <img alt={item.image} src={item.image} className="cursor-pointer" />
                <div className="text-center pt-0.5 hover:underline cursor-pointer">{item.title}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Collection;
