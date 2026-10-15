export default function SectionHeading({ number, label, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number} /</span> {label}
      </p>
      <h2>{children}</h2>
    </div>
  );
}
