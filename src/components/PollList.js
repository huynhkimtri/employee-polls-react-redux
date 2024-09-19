import { Card, List } from "antd";
import { useState } from "react";

const PollList = () => {
  const [polls, setPolls] = useState([]);

  return (
    <List
      className="poll-list"
      grid={{ gutter: 16, column: 1 }}
      dataSource={polls}
      renderItem={(poll) => (
        <List.Item>
          <Card title={poll.question}>
            <p>
              {poll.optionA} vs {poll.optionB}
            </p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PollList;
