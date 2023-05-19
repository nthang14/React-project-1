const BASE_URL_IMAGE = (width, height) => `https://minio.lattehub.com/img/${width}/${height}/resize`;
export const imageResizeURL = (url, width, height) => {
  if (!width) width = 240;
  if (!height) height = 240;
  if (!url) return '';
  if (url.includes('http') || url.includes('https')) return url;

  url = BASE_URL_IMAGE(width, height) + url;
  return url;
};
