import Product from '~/components/pages/Category/Product';

function BestSeller({ data }) {
  console.log('data', data);
  return (
    <div>
      <div className="font-bold text-center home-title pb-0.5">{data?.title}</div>
      <div className={`pt-0.5 grid grid-cols-6 gap-1`}>
        {data?.products &&
          data.products.length &&
          data.products.map((item) => {
            return <Product key={item._id} product={item} />;
          })}
      </div>
    </div>
  );
}
export default BestSeller;
