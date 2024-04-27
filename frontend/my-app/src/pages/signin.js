import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="Email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Username"}
          />
          <InputBox
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3001/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("Fromuser", response.data.userId);
                localStorage.setItem("Nameofuser", username);
                console.log("response", response);
                navigate("/dashboard");
              }}
              label={"Sign In"}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
