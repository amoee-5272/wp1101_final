import {Modal, Input, Form} from 'antd';

export default function AddModal(props) {
    const [form] = Form.useForm();
    const {visible, onCreate, onCancel, nameRef, colorRef} = props
    return (
        <Modal
            title="Create a new Cardbook"
            okText="Create"
            visible={visible}
            onOk={onCreate}
            onCancel={onCancel}
        >
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                form={form}
                layout="vertical"
                autoComplete="off"
            >
                <Form.Item
                    label="CardBook's name"
                    name="CardBook's name"
                    rules={[{ required: true, message: "Please input CardBook's name" }]}
                >
                    <Input placeholder="Name" allowClear={true} ref={nameRef}/>
                </Form.Item>

                <Form.Item
                    label="CardBook's color"
                    name="CardBook's color"
                    rules={[{ required: true, message: "Please select CardBook's color" }]}
                >
                    <Input
                        type="Color"
                        style={{
                            width: 30,
                            padding:3,
                        }}
                        ref={colorRef}
                    />
                </Form.Item>
            </Form>
        </Modal>

        // <Modal
        //     title="Enter the person you want to talk to:"
        //     visible={visible}
        //     onOk={onCreate}
        //     onCancel={onCancel}
        //     okText="Create"
        // >
        //     <Input placeholder="Name" ref={nameRef}/>
        //     <Input placeholder="Color" ref={colorRef}/>
            
        // </Modal>
    )
}
