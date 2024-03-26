export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <div>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        placeholder="Search..."
      />
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
      />
      inStockOnly
    </div>
  );
}
