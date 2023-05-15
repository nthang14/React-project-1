import Information from '~/components/pages/Checkout/Information';
import ListProduct from '~/components/pages/Checkout/ListProduct';
function Checkout() {
  return (
    <div className={` grid grid-cols-9`}>
      <div className={`col-span-5 py-2 pl-16 checkout-page__information h-screen`}>
        <Information />
      </div>
      <div className={`col-span-4 py-2 pr-16 checkout-page__list h-screen bg-gray-100 `}>
        <ListProduct />
      </div>
    </div>
  );
}
export default Checkout;
