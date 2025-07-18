// pages/users/index.tsx

import React from "react";
import {UserProps} from "@/interfaces";
import UserCard from "@/components/common/UserCard";

const Users: React.FC<{posts: UserProps[]}> = ({posts}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">
        Users List
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
