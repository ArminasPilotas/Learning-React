import clsx from "clsx";
import { useEffect, useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";

const unmountDelay = 200;
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
  "text-white font-semibold fixed bottom-3 right-3 p-3 z-50 shadow cursor-pointer";

function Notification({ text, type, hangTimeInMs = 3000 }) {
  const [timeoutId, setTimeoutId] = useState();
  const [isUnmounting, setIsUnmouting] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(unmount, hangTimeInMs);

    setTimeoutId(setTimeoutId);
  }, []); //eslint-disable-line

  function unmount() {
    setIsUnmouting(true);

    setTimeout(() => {
      unmountComponentAtNode(notificationContainer);
    }, unmountDelay);
  }

  function handleClick() {
    clearTimeout(timeoutId);
    unmount();
  }

  return (
    <div
      className={clsx(
        initialClasses,
        typeClassMap[type],
        isUnmounting ? "animate-slide-out" : "animate-slide-in"
      )}
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
