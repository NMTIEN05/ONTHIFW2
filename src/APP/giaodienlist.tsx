import { MutedFilled } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Table,Image  } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Listgiaodien() {
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
      {/* <Button onClick={()=>mutate(products.id)}>Xoá</Button>,
      <Button onClick={()=>nav(`edit/${products.id}`)}>EDIT</Button> */}
      
      
      </>
      
      
      

    },
  ];


return <Table columns={columns} />;
}