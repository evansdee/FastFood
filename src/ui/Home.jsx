import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {

  const user = useSelector(state=>state.user.username)
  console.log(user)
  return (
    <div className="my-10 text-center sm:my-16 px-4">
      <h1 className="mb-8 text-xl text-center md:text-3xl font-semibold">
        The best pizza.
        <br /> 
        <span className="text-yellow-500">

        Straight out of the oven, straight to you.
        </span>
      </h1>
      {!user ? <CreateUser/> : <Button type="primary"  to={'/menu'}>Contine ordering, {user}</Button>}
    </div>
  );
}

export default Home;
