export default function FilterBar({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <div
          key={filter}
          className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}
