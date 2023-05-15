import { imageResizeURL } from '~/utils/helpers/index';

function ProductImage({ product, ...rest }) {
  const { _source } = product;
  return (
    <div className="flex items-center justify-center border">
      <img className="w-full h-auto" src={imageResizeURL(_source.image, 400, 400)} alt={_source.name} loading="lazy" />
    </div>
  );
}
export default ProductImage;
