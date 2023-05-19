import { imageResizeURL } from '~/utils/helpers/index';

function ProductImage({ product, ...rest }) {
  return (
    <div className="flex items-center justify-center border">
      <img
        className="w-full h-auto"
        src={imageResizeURL(product?.images[0]?.src, 400, 400)}
        alt={product.title}
        loading="lazy"
      />
    </div>
  );
}
export default ProductImage;
