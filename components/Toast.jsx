import { useState, useEffect } from "react";

const Toast = ({type, dispatch, msg}) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth(prev => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({ type: 'NOTIFY', payload: {} })
    }, 400)
  };

  useEffect(() => {
      if (width === 100) {
        // Close notification
        handleCloseNotification()
      }
    
    return () => {
      if (width === 100) {
        // Close notification
        handleCloseNotification()
      }
    }
  }, [width])


  useEffect(() => {
    handleStartTimer()
    return handleStartTimer
  }, []);

  return (
    <div className="notification-wrapper">
        <div
        onMouseEnter={handlePauseTimer}
        onMouseLeave={handleStartTimer}
        className={`notification-item ${
            type === "SUCCESS" ? "success" : "error"
        } ${exit ? "exit" : ""}`}
        >
        <div onClick={handleCloseNotification} className='close-toast'>x</div>
        <p>{msg.msg}</p>
        <div className='bar' style={{ width: `${width}%` }} />
        </div>
    </div>
  );
};

export default Toast;