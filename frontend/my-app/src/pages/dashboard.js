import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/User";
import axios from "axios";

export const Dashboard = () => {
  const [balance, setBalance] = useState(null);
  const fromUserId = localStorage.getItem("Fromuser");

  useEffect(() => {
    console.log(fromUserId, "fromUserId");
    axios
      .get("http://localhost:3001/api/v1/account/balance", {
        params: {
          userId: fromUserId,
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
        // console.log(response.data); // Access response data
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, []);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        {balance !== null ? (
          <Balance value={balance} />
        ) : (
          <p>Loading balance...</p>
        )}
        <Users />
      </div>
    </div>
  );
};
