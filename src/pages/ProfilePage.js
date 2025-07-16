import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const params = useParams();

  return (
    <div>
      <h1>Profile</h1>
      <p>User: {params.profileId}</p>
    </div>
  );
}
