// frontend/src/components/RegisterForm.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  // handle form submit...
  return (
    <form className="space-y-4">
      <Input type="text" placeholder="Họ và tên" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Mật khẩu" />
      <Button type="submit" className="w-full">Đăng ký</Button>
    </form>
  );
}
