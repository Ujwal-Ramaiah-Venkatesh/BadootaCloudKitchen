// Elegant placeholder for missing images
// Shows brand-consistent placeholder until real images are added

interface ImagePlaceholderProps {
  name: string;
  category?: string;
  className?: string;
}

export function ImagePlaceholder({ name, category, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-coal via-noir to-coal ${className}`}
    >
      <div className="text-center p-6">
        <div className="text-4xl mb-3">🍛</div>
        <p className="text-sm font-medium text-gold">{name}</p>
        {category && (
          <p className="text-xs text-bone-dim mt-1">{category}</p>
        )}
      </div>
    </div>
  );
}
