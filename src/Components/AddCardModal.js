import { Modal, Input, Form } from "antd";

export default function AddCardModal(props) {
  const [form] = Form.useForm();
  const { visible, onCreate, onCancel, nameRef, descriptionRef } = props;
  return (
    <>
      <Modal
        title="Create a new Card"
        okText="Create"
        visible={visible}
        onOk={onCreate}
        onCancel={onCancel}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 18 }}
          form={form}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="Card front content"
            name="Card front content"
            rules={[
              { required: true, message: "Please input Card's front content" },
            ]}
          >
            <Input placeholder="Enter Word" allowClear={true} ref={nameRef} />
          </Form.Item>
          <Form.Item
            label="Card back content"
            name="Card back content"
            rules={[
              { required: true, message: "Please input Card's back content" },
            ]}
          >
            <Input
              placeholder="Enter Description"
              allowClear={true}
              ref={descriptionRef}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
