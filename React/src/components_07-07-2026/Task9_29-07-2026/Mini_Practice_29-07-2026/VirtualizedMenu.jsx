import { FixedSizeList } from "react-window";

// Single row component
function MenuRow({ index, style, data }) {
  const item = data[index];

  return (
    <div
      style={style}
      className="flex items-center justify-between border-b p-4 bg-white"
    >
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-500">${item.price}</p>
      </div>

      <button className="bg-red-500 text-white px-3 py-1 rounded">
        Add
      </button>
    </div>
  );
}

function VirtualizedMenu({ items }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <FixedSizeList
        height={400}      // Visible container height
        width="100%"
        itemCount={items.length}
        itemSize={80}     // Height of each row
        itemData={items}
      >
        {MenuRow}
      </FixedSizeList>
    </div>
  );
}

export default VirtualizedMenu;