// frontend/src/components/AuthTabs.tsx
/// component dung de chuyen huong cac tab
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthTabs() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // nếu route là /register thì tab value = "register", ngược lại mặc định "login"
  const currentTab: "login" | "register" = pathname === "/register" ? "register" : "login";

  return (
    <div className="max-w-md mx-auto mt-20">
      <Tabs
        value={currentTab}
        onValueChange={(val) => {
          // khi user click tab, điều hướng route tương ứng
          navigate(val === "login" ? "/login" : "/register");
        }}
      >
        <TabsList>
          <TabsTrigger value="login">Đăng nhập</TabsTrigger>
          <TabsTrigger value="register">Đăng ký</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
