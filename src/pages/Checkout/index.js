import Information from '~/components/pages/Checkout/Information';
function Checkout() {
  return (
    <div className={` grid grid-cols-9`}>
      <div className={`col-span-5 py-2 pl-16 checkout-page__information h-screen`}>
        <Information />
      </div>
      <div className={`col-span-4 py-0.5 pr-16 checkout-page__list h-screen`}>list product</div>
    </div>
  );
}
export default Checkout;
