import clsx from "clsx";
import { useEffect, useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";

const notificationContainer = document.getElementById("notification");
export const notificationTypes = {
  SUCCESS: "success",
  INFO: "info",
};
const typeClassMap = {
  success: "bg-green-500",
  info: "bg-blue-500",
};

const initialClasses =
  "text-white font-semibold fixed bottom-3 right-3 p-3 z-50 shadow animate-slide-in cursor-pointer";

function Notification({ text, type, hangTimeInMs = 3000 }) {
  const [timeoutId, setTimeoutId] = useState();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      unmountComponentAtNode(notificationContainer);
    }, hangTimeInMs);

    setTimeoutId(setTimeoutId);
  }, []); //eslint-disable-line

  function handleClick() {
    clearTimeout(timeoutId);
    unmountComponentAtNode(notificationContainer);
  }

  return (
    <div
      className={clsx(initialClasses, typeClassMap[type])}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}

export function renderNotification(props) {}

export const notification = {
  success: (props) =>
    render(
      <Notification {...props} type={notificationTypes.SUCCESS} />,
      notificationContainer
    ),
  info: (props) =>
    render(
      <Notification {...props} type={notificationTypes.INFO} />,
      notificationContainer
    ),
};
