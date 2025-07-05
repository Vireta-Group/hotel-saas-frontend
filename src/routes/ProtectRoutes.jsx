import { useNavigate } from "react-router";

function ProtectRoutes() {
  const isLogIn = true;
  const navigate = useNavigate();

  if (!isLogIn) {
    navigate("/login", { replace: true });
  }
}

export default ProtectRoutes;
