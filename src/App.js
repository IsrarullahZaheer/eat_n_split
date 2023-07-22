import { Children } from "react"

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
]

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
      </div>
    </div>
  )
}

function FriendList() {
  const friends = initialFriends

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  )
}

function Friend({ friend }) {
  const owe = (
    <p className="red">
      You Owe {friend.name} {Math.abs(friend.balance)}$
    </p>
  )
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}
      <Button>Select</Button>
    </li>
  )
}

function Button({ Children }) {
  return <button className="button">{Children}</button>
}
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👫Friend Name</label>
      <input type="text" />
      <label>🖼️Image URL</label>
      <Button>Add</Button>
    </form>
  )
}
