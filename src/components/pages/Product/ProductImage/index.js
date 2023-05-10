function ProductImage({ product, ...rest }) {
  return (
    <div className="flex items-center justify-center">
      <img className="w-10" src={product.image} />
    </div>
  );
}
export default ProductImage;
