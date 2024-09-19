import { Avatar, List } from "antd";
import { useState } from "react";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={(user) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={user.avatar} />}
            title={user.name}
            description={`Polls created: ${user.pollsCreated}, Polls answered: ${user.pollsAnswered}`}
          />
        </List.Item>
      )}
    />
  );
};

export default Leaderboard;
