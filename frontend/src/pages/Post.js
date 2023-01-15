import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createProject } from '../actions/projects';


function Post() {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [meter, setMeter] = useState("");
  const [livingroom, setLivingroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [cardphoto, setCardphoto] = useState("");
  const [virtualtour, setVirtualtour] = useState("");
  const [error, setError] = useState(null);
  const [project, setProject] = useState({
    title,
    adress,
    meter,
    livingroom,
    bathroom,
    discription,
    price,
    cardphoto,
    virtualtour,
  });
  const dispatch = useDispatch();

  const createPost =async (e) => {
    e.preventDefault();
     dispatch(createProject(project))
  } 

  return (
    <form
      onSubmit={createPost}
      className="bg-primary p-6 rounded-lg flex flex-col">
      <label className="formLabel">
        Title:
        <input
          className="formInput"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="formLabel">
        adress:
        <input
          className="formInput"
          type="text"
          onChange={(e) => setAdress(e.target.value)}
          value={adress}
        />
      </label>
      <label className="formLabel">
        meter:
        <input
          className="formInput"
          type="number"
          onChange={(e) => setMeter(e.target.value)}
          value={meter}
        />
      </label>
      <label className="formLabel">
        livingroom:
        <input
          className="formInput"
          type="text"
          onChange={(e) => setLivingroom(e.target.value)}
          value={livingroom}
        />
      </label>
      <label className="formLabel">
        bathroom:
        <input
          className="formInput"
          type="text"
          onChange={(e) => setBathroom(e.target.value)}
          value={bathroom}
        />
      </label>
      <label className="formLabel">
        discription:
        <input
          className="formInput"
          type="text"
          onChange={(e) => setDiscription(e.target.value)}
          value={discription}
        />
      </label>
      <label className="formLabel">
        price:
        <input
          className="formInput"
          type="Number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </label>
      <label className="formLabel">
        virtualtour:
        <input
          className="formInput"
          type="text"
          onChange={(e) => setVirtualtour(e.target.value)}
          value={virtualtour}
        />
      </label>
      <label className="formLabel">
        Cardphoto:
        <input
          className="formInput"
          type="text"
          onChange={(e) => setCardphoto(e.target.value)}
          value={cardphoto}
        />
      </label>
      <br/>
      <button type="submit"  className="  block bg-neutral-400 flex justify-center w-24 rounded-md">Add Project</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default Post;
