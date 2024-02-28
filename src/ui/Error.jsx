import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const { error, status, statusText, message } = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <h3>{message ? message : `${status} - ${statusText}`}</h3>
      <p>{error?.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
