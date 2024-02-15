import { useContext, useState } from "react";
import { FriendsContext } from "../context/FriendsContext";

function AddFriend() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const { friendsList, setFriendsList } = useContext(FriendsContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = { id: id, name: name, imgURL: `${image}?=${id}` };
    setFriendsList([...friendsList, newFriend]);
    setName("");
  }

  return (
    <div className="bg-green-300 p-2">
      <h2 className="m-2 font-semibold">Add Friend</h2>
      <form onSubmit={handleSubmit}>
        <div className="m-2 space-x-2">
          <label>👫 Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="m-2 space-x-2">
          <label>🌄 Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button className="m-2 rounded-full bg-blue-500 px-5 py-2 text-white transition-all hover:bg-blue-600">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddFriend;
