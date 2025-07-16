import React from "react";
import { Link } from "react-router-dom";

const profiles = [1, 2, 3];

function ProfilesPage() {
  return (
    <div
      style={{
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {profiles.map((profile) => (
        <Link key={profile} to={`/profiles/${profile}`}>
          Profile {profile}
        </Link>
      ))}
    </div>
  );
}

export default ProfilesPage;
