import spinnerStyles from "@/styles/Spinner.module.css";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const Loader = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setShowSpinner(false);
      }, 500);
    }
  }, [showSpinner]);

  return (
    <>
      {showSpinner ? (
        <div className={`${spinnerStyles.spinner}`}>
          <div className="position-absolute top-50 start-50 translate-middle">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : ""}
    </>
  );
};

export default Loader;
