function TodoItem({todoName,todoDate}){

    {/*let todoName = "Buy milk";
let todoDate = "4/07/2023";*/ }  
    return(  
    <>
        <div class="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
        <button type="button" className="btn btn-danger kg-button ">Delete</button>
        </div>
        </div>
        </>
    )
}
export default TodoItem;