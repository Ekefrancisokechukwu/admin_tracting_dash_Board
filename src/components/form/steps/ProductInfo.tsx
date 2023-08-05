import React, { useState } from "react";
import { useGlobalContext } from "../../../context/globalContext";

const ProductInfo = () => {
  const [age, setAge] = useState();
  const { values, handleChange } = useGlobalContext();

  return (
    <div>
      <h1 className="head">product information</h1>

      <div className="input-container">
        <div className="box">
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              type="text"
              name="name"
              placeholder="eg: offwhite"
              id="name"
              value={values.name}
              className="form-input"
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="category" className="form-label">
              category
            </label>
            <select
              value={values.category}
              name="category"
              id="category"
              className="form-input"
              onChange={handleChange}
            >
              <option value="clothing">clothing</option>
              <option value="sheo">sheo</option>
              <option value="furniture">furniture</option>
              <option value="electronics">electronics</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <textarea
              className="form-textarea"
              name="description"
              value={values.description}
              id="description"
              cols={30}
              rows={8}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
