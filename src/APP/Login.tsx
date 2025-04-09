import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login (){
    const nav = useNavigate()
    const {mutate} = useMutation({
        mutationFn:async(value)=>{
            await axios.post(  `http://localhost:3000/login`,value)
            alert("thêm tc")
            nav("/login")
        }
    })
const onFinish= (values:any)=>{
    mutate(values)
}
    return(
        <div><Form onFinish={onFinish} layout="vertical">
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