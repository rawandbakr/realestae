import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../actions/projects";
import FileBase from "react-file-base64";

function Post() {
  const [postData, setPostData] = useState({
    title: "",
    adress: "",
    meter: "",
    bathroom: "",
    discription: "",
    price: "",
    cardphoto: "",
    virtualtour: "",
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const clearForm = () => {
    setPostData({
      title: "",
      adress: "",
      meter: "",
      bathroom: "",
      discription: "",
      price: "",
      cardphoto: "",
      virtualtour: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(createProject(postData));
      window.alert("posted succesfully ");
    } catch (e) {
      setError(e);
    }
    clearForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary p-6 rounded-lg flex flex-col">
      <label className="formLabel">
        title:
        <input
          className="formInput"
          type="text"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
      </label>

      <label className="formLabel">
        adress:
        <input
          className="formInput"
          type="text"
          value={postData.adress}
          onChange={(e) => setPostData({ ...postData, adress: e.target.value })}
        />
      </label>
      <label className="formLabel">
        meter:
        <input
          className="formInput"
          type="number"
          value={postData.meter}
          onChange={(e) => setPostData({ ...postData, meter: e.target.value })}
        />
      </label>
      <label className="formLabel">
        livingroom:
        <input
          className="formInput"
          type="text"
          value={postData.livingroom}
          onChange={(e) =>
            setPostData({ ...postData, livingroom: e.target.value })
          }
        />
      </label>
      <label className="formLabel">
        bathroom:
        <input
          className="formInput"
          type="text"
          value={postData.bathroom}
          onChange={(e) =>
            setPostData({ ...postData, bathroom: e.target.value })
          }
        />
      </label>
      <label className="formLabel">
        discription:
        <input
          className="formInput"
          type="text"
          value={postData.discription}
          onChange={(e) =>
            setPostData({ ...postData, discription: e.target.value })
          }
        />
      </label>
      <label className="formLabel">
        price:
        <input
          className="formInput"
          type="Number"
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
        />
      </label>
      <label className="formLabel">
        virtualtour:
        <input
          className="formInput"
          type="text"
          value={postData.virtualtour}
          onChange={(e) =>
            setPostData({ ...postData, virtualtour: e.target.value })
          }
        />
      </label>
      <label className="formLabel">
        Cardphoto:
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, Cardphoto: base64 })
          }
        />
      </label>
      <br />
      <button
        type="submit"
        className="  bg-neutral-400 flex justify-center w-24 rounded-md">
        Add Project
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default Post;
