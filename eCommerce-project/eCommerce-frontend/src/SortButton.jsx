function SortButton(props) {
    return (
      <div className="mt-4 flex gap-4">
        <button onClick={() => props.onSort("ASC")} className="px-4 py-2 bg-blue-500 text-white rounded"> 
        Sort by price: Ascending</button>
        <button
          onClick={() => props.onSort("DESC")} className="px-4 py-2 bg-blue-500 text-white rounded">
        Sort by price: Descending
        </button>
      </div>
    );
  }
  
  export default SortButton;
  