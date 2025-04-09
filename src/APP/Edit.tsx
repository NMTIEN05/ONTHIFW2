import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
    const {id} = useParams()
    const [form] = Form.useForm();
    const us = useQueryClient();
   useQuery({
    queryKey:["products",id],
    enabled: !!id,
    queryFn: async ()=>{
        const {data} = await axios.get(`http://localhost:3000/products/${id}`);
        console.log(data);
        
          form.setFieldsValue(data)
        return data;
    },
});
    const nav = useNavigate()
    const {mutate} = useMutation({
        mutationFn:async(value)=>{
            await axios.put(`http://localhost:3000/products/${id}`,value)
            alert("thêm tc")
            nav("/")
        }
    })
const onFinish= (values:any)=>{
    mutate(values)
}
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      {/* Name */}
      <Form.Item label="Name" name="name" rules={[{required:true,message:"vuilòng nhập tên sp "}]}>
        <Input />
      </Form.Item>

      {/* Price */}
      <Form.Item label="Price" name="price" rules={[{required:true,message:"vuilòng nhập tên sp "}]}  >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      {/* Image */}
      <Form.Item label="Image URL" name="imageUrl" rules={[{required:true,message:"vuilòng nhập tên sp "}]}>
        <Input />
      </Form.Item>

      {/* Description */}
      <Form.Item label="Description" name="description" rules={[{required:true,message:"vuilòng nhập tên sp "}]}>
        <TextArea rows={4} />
      </Form.Item>

      {/* Submit */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}