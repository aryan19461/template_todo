function AddTodo() {
    return <div class="row kg-row">
    <div class="col-6">
      <input type="text" placeholder="Enter text "/>
    </div>
    <div class="col-4">
      <input type="date" placeholder="enter date"/>
    </div>
    <div class="col-2">
     <button type="button" class="btn btn-success btn-lg kg-button">ADD</button>
    </div>
    </div>
}
export default AddTodo;