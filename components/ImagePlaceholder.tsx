export function ImagePlaceholder({ label, ratio = "16 / 9" }: { label: string; ratio?: string }) {
  return (
    <div className="image-placeholder" style={{ aspectRatio: ratio }}>
      <span>IMAGE PLACEHOLDER</span>
      <strong>{label}</strong>
      <small>Replace this block with your own project image</small>
    </div>
  );
}
