import { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthState = () => {
  const [logedIn, setLoggedIn] = useState(false);
  const [checkState, setCheckState] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckState(false);
    });
  });
  return { logedIn, checkState };
};

export default useAuthState;
