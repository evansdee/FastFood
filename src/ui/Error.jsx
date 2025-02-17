import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const err = useRouteError()

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{err.data || err.message}</p>

      <LinkButton>
      &larr; Go back
      </LinkButton>
    </div>
  );
}

export default NotFound;
