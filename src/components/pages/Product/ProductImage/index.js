function ProductImage({ product, ...rest }) {
  return (
    <div className="flex items-center justify-center">
      <img className="w-10" src={product.image} alt={product.title} loading="lazy" />
    </div>
  );
}
export default ProductImage;
