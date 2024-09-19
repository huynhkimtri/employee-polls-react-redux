import { Card, Col, List, Row } from "antd";
import Leaderboard from "../components/Leaderboard";
import PollList from "../components/PollList";

const answeredPolls = [
  {
    id: 1,
    question: "Would you rather work from home or the office?",
    optionA: "Work from home",
    optionB: "Work from office",
    votesA: 10,
    votesB: 5,
  },
  {
    id: 2,
    question: "Would you rather have coffee or tea?",
    optionA: "Coffee",
    optionB: "Tea",
    votesA: 8,
    votesB: 12,
  },
];

const Home = () => {
  <Row gutter={16}>
    <Col span={16}>
      <Card title="Answered Polls">
        <List
          itemLayout="horizontal"
          dataSource={answeredPolls}
          renderItem={(poll) => (
            <List.Item>
              <List.Item.Meta
                title={poll.question}
                description={`Option A: ${poll.optionA} votes, Option B: ${poll.optionB} votes`}
              />
            </List.Item>
          )}
        />
      </Card>
    </Col>
    <Col span={8}>
      <Leaderboard />
    </Col>
  </Row>;
};

export default Home;
