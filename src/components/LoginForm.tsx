// frontend/src/components/LoginForm.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // handle form submit...
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  }
  return (
    <form className="space-y-4">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Mật khẩu" />
      <Button type="submit" className="w-full" onClick={handleClick}>Đăng nhập</Button>
    </form>
  );
}
