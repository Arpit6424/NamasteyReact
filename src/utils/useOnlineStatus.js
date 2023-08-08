import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [useOnlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    console.log("useOnlineStatus useEffect");
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return useOnlineStatus;
};

export default useOnlineStatus;

console.log("useOnlineStatus useEffect");
window.addEventListener("offline", () => {
  setOnlineStatus(false);
});
