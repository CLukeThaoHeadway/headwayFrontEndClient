import { React, useState } from "react";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  return (
    <div className="row">
      <div className="col-6 offset-4 text-center mt-4">
        <form className="row">
          <input
            className="col-4 me-2"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.event)}
            placeholder="Enter Url"
          />

          <input
            className="col-4 me-2"
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.event)}
            placeholder="Custom Slug"
          />

          <button className="col-2 btn btn-primary">Get Url</button>
        </form>
      </div>
    </div>
  );
};

export default UrlForm;
