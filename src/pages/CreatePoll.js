import { Button, Form, Input, message } from "antd";
import { useState } from "react";

const CreatePoll = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      message.success("Poll created successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Failed to create poll. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="question"
        label="Poll Question"
        rules={[{ required: true, message: "Please enter the poll question" }]}
      >
        <Input placeholder="Would you rather..." />
      </Form.Item>
      <Form.Item
        name="optionA"
        label="Option A"
        rules={[{ required: true, message: "Please enter option A" }]}
      >
        <Input placeholder="Option A" />
      </Form.Item>
      <Form.Item
        name="optionB"
        label="Option B"
        rules={[{ required: true, message: "Please enter option B" }]}
      >
        <Input placeholder="Option B" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Create Poll
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CreatePoll;
