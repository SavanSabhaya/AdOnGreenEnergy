import Image, { ImageProps } from "next/image";

interface ImagePlaceholderProps extends ImageProps {
  isPlaceholder?: boolean;
}

export default function ImagePlaceholder({ isPlaceholder = true, ...props }: ImagePlaceholderProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image {...props} />
      {isPlaceholder && (
        <div className="absolute top-2 right-2 bg-black/75 text-white text-[0.6rem] font-bold px-2 py-1 rounded-sm uppercase tracking-wider z-10 border border-white/20 backdrop-blur-sm pointer-events-none shadow-sm">
          PLACEHOLDER — Real photo coming soon
        </div>
      )}
    </div>
  );
}
