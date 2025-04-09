import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registergiaodien (){
    return(
        <div><Form layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }, { min: 6 }]}
        >
          <Input.Password />
        </Form.Item>
  
  
        <Form.Item>
          <Button  type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form></div>
    )
}