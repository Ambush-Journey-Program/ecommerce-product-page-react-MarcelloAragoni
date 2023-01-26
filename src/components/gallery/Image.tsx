type ImageProps = {
  sourceImage?: string;
  description?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function Image({ sourceImage, description, ...props }: ImageProps) {
  return <img src={sourceImage} alt={description} {...props} />;
}
