import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const { error, status, statusText, message } = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <h3>{message ? message : `${status} - ${statusText}`}</h3>
      <p>{error?.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
