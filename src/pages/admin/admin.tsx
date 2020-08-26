import React, {useState} from "react";
import "./admin.css"
import "../home/home.css"
import {Button, List, Modal, Table, Tabs} from "antd";
import Search from "antd/es/input/Search";

const {TabPane} = Tabs;
const Admin = () => {


    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            render: (text: string) => <a style={{fontSize: "120%"}}>{text}</a>
        },
        {
            title: 'uploadTime',
            dataIndex: 'uploadTime',
        },
        {
            title: 'views',
            dataIndex: 'views',

        },
        {
            title: 'likes',
            dataIndex: 'likes',

        },
        {
            title: 'opt',
            dataIndex: 'opt',
            render: (text: string) => <Button type="primary">{text}</Button>
        }

    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: '1',
            title: '[ES]ElasticSearch基础',
            uploadTime: 98,
            views: 60,
            likes: 70,
            "opt": "删除"
        })
    }

    let [page,setPage] = useState(1);

    let categories = ['java','python','kafka','docker'];
    let [category,setCategory] = useState('all');
    let [visible,setVisible] = useState(false);
    const changeCategory = (category:string)=>{
        setVisible(false);
        setCategory(category);
    };
    return (
        <>



<div style={{marginLeft:"100px"}}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="文章" key="1">
                    <div className="content-body">
                        <Modal
                            style={{top:10}}
                            visible={visible}
                            footer={[]}
                            onCancel={()=>{setVisible(false)}}
                        >
                            {
                                categories.map((category)=>{
                                    return (
                                        <Button onClick={()=>{changeCategory(category)}} id={category}  className="category" color="green">{category}</Button>
                                    )
                                })
                            }
                        </Modal>


                        <Button type="primary" onClick={()=>setVisible(true)}>{category}(16)</Button>
                        <Search
                            placeholder="标题搜索"
                            onSearch={value => console.log(value)}
                            style={{ width: 300,marginLeft:"10px" }}
                        />
                        <Button  style={{marginLeft:"10px"}}  danger>上传</Button>
                        <Table size="small"
                               scroll={{y: 600}}
                               columns={columns}
                               dataSource={data}
                               pagination={
                                   {
                                       onChange: (page)=>{setPage(page)},
                                       defaultCurrent: page,
                                       total: 100,
                                       pageSize: 30
                                   }
                               }
                        />

                    </div>
                </TabPane>
                <TabPane tab="相册" key="2">
                    相册管理
                </TabPane>
            </Tabs>
</div>
        </>
    )
};

export default Admin;