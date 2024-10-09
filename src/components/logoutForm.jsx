import { logout } from "@/actions";

const LogoutForm = () => {
  return (
    <form action={logout} onSubmit={e => { e.preventDefault(); logout(); }}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default LogoutForm;
