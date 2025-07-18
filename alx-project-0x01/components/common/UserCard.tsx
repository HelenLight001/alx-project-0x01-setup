// components/common/UserCard.tsx

import React from "react";
import {UserProps} from "../../interfaces"; // ✅ required import

const UserCard: React.FC<{user: UserProps}> = ({user}) => {
  // ✅ <UserProps> usage here
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h2>
        {user.name} (@{user.username})
      </h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserCard;
