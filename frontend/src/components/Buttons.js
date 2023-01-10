export default function Buttons(props) {
  return (
    <div
      className="flex flex-row w-full justify-center text-white p-1"
      style={props.style}
    >
      <div className="w-full text-center">
        <button
          onClick={() => props.setFunc(2)}
          className="bg-blue-900 rounded-l border-white border-2 py-2 px-3 w-full"
        >
          Add New {props.title}
        </button>
      </div>
      <div className="w-full text-center">
        <button
          onClick={() => props.setFunc(1)}
          className="bg-blue-900 py-2 px-3 w-full border-white border-y-2"
        >
          Update/Delete {props.title}
        </button>
      </div>
      <div className="w-full text-center">
        <button
          onClick={() => props.setFunc(0)}
          className="bg-blue-900 rounded-r border-white border-2 py-2 px-3 w-full"
        >
          View {props.title}
        </button>
      </div>
    </div>
  );
}
