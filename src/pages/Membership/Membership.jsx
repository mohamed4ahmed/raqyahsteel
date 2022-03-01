import React, { useEffect } from "react";
import MembershipContainer from "../../containers/Membership/Membership";
const Membership = () => {
  useEffect(() => {
    document.title = "Member - RAQYAH - For Metal";
  }, []);
  return <MembershipContainer />;
};

export default Membership;
