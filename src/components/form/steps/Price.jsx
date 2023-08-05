const Price = () => {
  return (
    <div>
      <div className="input-container">
        <div className="box">
          <div className="form-row">
            <label htmlFor="price" className="form-label">
              price
            </label>
            <input type="number" id="price" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="sku" className="form-label">
              sku
            </label>
            <input type="number" id="sku" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="status" className="form-label">
              status
            </label>
            <select name="status" id="status" className="form-input">
              <option value="instock">instock</option>
              <option value="outofstock">out of stock</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Price;
