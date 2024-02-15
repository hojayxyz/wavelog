import { useContext, useState } from "react";
import { FriendsContext } from "../context/FriendsContext";
import AddFriend from "../components/AddFriend";

function FriendsList() {
  const { friendsList } = useContext(FriendsContext);
  const [adding, setAdding] = useState(false);

  return (
    <div>
      <div className="mb-5 flex flex-col">
        {friendsList.map((friend) => (
          <div className="my-1 flex space-x-3" key={friend.id}>
            <img src={friend.imgURL} alt={friend.name} />
            <span>{friend.name}</span>
          </div>
        ))}
      </div>
      {adding ? <AddFriend /> : ""}
      <div className="mt-5 flex items-center justify-center">
        <button
          className="rounded-full bg-yellow-200 px-5 py-3 transition-all hover:bg-yellow-300"
          onClick={() => setAdding(!adding)}
        >
          {adding ? "Close" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default FriendsList;
