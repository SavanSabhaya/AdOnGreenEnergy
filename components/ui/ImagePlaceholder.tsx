import Image, { ImageProps } from "next/image";

interface ImagePlaceholderProps extends ImageProps {
  isPlaceholder?: boolean;
}

export default function ImagePlaceholder({ isPlaceholder = true, ...props }: ImagePlaceholderProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image {...props} />
    </div>
  );
}
