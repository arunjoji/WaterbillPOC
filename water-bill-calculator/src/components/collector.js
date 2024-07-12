const Collector = () => {
    return (
        <div className="card-body">
            <div class="form-group">
                <label for="input1">Previous Reading</label>
                <input type="number" className="form-control" id="input1" placeholder="" />
            </div>
            <div class="form-group">
                <label for="input2">Current Reading</label>
                <input type="number" className="form-control" id="input2" placeholder="" />
            </div>
            <div class="form-group">
                <label for="input2">Previous Balance:</label>
                <input type="number" className="form-control" id="input2" placeholder="Optional" />
            </div>
            <div className='pt-3'>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Collector;
