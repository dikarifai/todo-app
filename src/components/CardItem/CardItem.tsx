const CardItem:React.FC = () => {
    return <div className="w-full flex flex-col h-28 rounded-md justify-center shadow-lg p-6">
        <h1>Title</h1>
        <h3>00.00.00 00:00</h3>
        <select name="status" id="status">
            <option value={"todo"}>To Do</option>
            <option value={"done"}>Done</option>
            <option value={"doing"}>Doing</option>
        </select>
    </div>
}

export default CardItem