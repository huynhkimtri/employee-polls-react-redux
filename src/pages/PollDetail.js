import { Button, Card, message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PollDetail = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPoll = async () => {};
    getPoll();
  }, [id]);

  const handleVote = (option) => {
    setLoading(true);
    message.success("Vote submitted successfully!");
    setLoading(false);
  };

  if (!poll) {
    return <p>Loading...</p>;
  }

  return (
    <Card title={poll.question}>
      <Button
        type="primary"
        onClick={() => handleVote("optionA")}
        loading={loading}
        disabled={loading}
      >
        {poll.optionA}
      </Button>
      <Button
        type="primary"
        onClick={() => handleVote("optionB")}
        loading={loading}
        disabled={loading}
        style={{ marginLeft: "10px" }}
      >
        {poll.optionB}
      </Button>
    </Card>
  );
};
export default PollDetail;
