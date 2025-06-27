import { Image } from "antd";

const CustomImage = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
}

export default CustomImage;