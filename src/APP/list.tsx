import { MutedFilled } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Table,Image  } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
    const nav = useNavigate()
const us = useQueryClient();
const {data: dataSource}= useQuery({
    queryKey:["products"],
    queryFn: async ()=>{
        const {data} = await axios.get("http://localhost:3000/products")
        console.log(data);
        
        return data;
    },
});
const {mutate} =  useMutation({
    mutationFn:async(id)=>{
        if(confirm("ban muon xoa k ")){
            await axios.delete(`http://localhost:3000/products/${id}`)
            alert("xoa tc")
            us.invalidateQueries({
                queryKey:["products"]
            })
        }
    }
})
 const  columns=[
    { title: "id", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Price", dataIndex: "price" },
    {
      title: "Image",
      dataIndex: "imageUrl",
      render: (src: string) => <Image width={120} src={src} />,
    },
    { title: "Desc", dataIndex: "description" },
    {
      title: "Actions",
      render: (products:any) => 
      <>
      <Button onClick={()=>mutate(products.id)}>Xoá</Button>,
      <Button onClick={()=>nav(`edit/${products.id}`)}>EDIT</Button>
      
      
      </>
      
      
      

    },
  ];


return <Table dataSource={dataSource} columns={columns} />;
}