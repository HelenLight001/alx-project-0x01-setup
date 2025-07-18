import React, {useState} from "react";
import {GetStaticProps} from "next";
import {UserData} from "../../interfaces";
import UserCard from "../../components/common/UserCard";
import UserModal from "../../components/common/UserModal";

interface UsersPageProps {
  posts: UserData[];
}

const Users: React.FC<UsersPageProps> = ({posts}) => {
  const [users, setUsers] = useState<UserData[]>(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers([newUser, ...users]);
  };

  return (
    <div style={{padding: "20px"}}>
      <h1>Users List</h1>
      <button onClick={() => setIsModalOpen(true)}>Add User</button>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
      />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserData[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default Users;
