function Datepicker() {
  return (
    <div className="text-center mt-20">
    <lable className="text-lg font-semibold">Choose Date</lable> <br />
    <input id="datepicker" className="border-2 border-gray-300 rounded px-3 py-2 w-56" type="text"
        placeholder="Select a date" />
</div>
  )
}

export default Datepicker;