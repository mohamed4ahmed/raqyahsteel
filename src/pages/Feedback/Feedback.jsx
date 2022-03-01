import React, { useEffect } from "react";
import FeedbackContainer from "../../containers/Feedback/Feedback";
const Feedback = () => {
  useEffect(() => {
    document.title = "Comment - RAQYAH - For Metal";
  }, []);
  return <FeedbackContainer />;
};

export default Feedback;
