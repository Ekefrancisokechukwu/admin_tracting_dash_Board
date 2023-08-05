import { useEffect, useState } from "react";

const Media = () => {
  const [src, setSrc] = useState(null);
  const handleChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h1 className="head">media</h1>

      <div className="input-container">
        <div className="form-row">
          <label htmlFor="image" className="form-label">
            product image
          </label>
          <label htmlFor="image">
            <div className="file-upload">
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
              />
              <img src={src} alt="product image" className="img" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Media;
