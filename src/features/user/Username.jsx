import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="mt-1.5 hidden text-sm font-semibold md:block">
      {username}
    </div>
  );
}

export default Username;
