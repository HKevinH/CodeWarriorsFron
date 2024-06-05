import React from "react";
import { getAllProblems } from "../api/handlersCompetitive";

const useCompetitiveProblems = () => {
  const [problems, setProblems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProblems = async () => {
      const response = await getAllProblems();
      setProblems(response);
      setLoading(false);
    };
    fetchProblems();
  }, []);

  return { problems, loading };
};

export default useCompetitiveProblems;
