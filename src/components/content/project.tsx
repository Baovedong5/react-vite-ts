import { Modal } from "antd";
import { useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";

interface IProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  detail: {
    description: string;
    technology: string;
    member: string;
    role: string;
    github: string;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };

  const dataProjects: IProject[] = [
    {
      image: <IoLogoReact size={50} color={"#2bebfd"} />,
      title: "Tiki Clone",
      shortDescription: " Web design is a similar process of creation",
      detail: {
        description:
          "Xây dựng trang thương mại điện tử hỗ trợ và quản lý mua bán sách", //Mieu ta du an lam gi
        technology: "React, Redux Toolkit, Ant Design", //Cong nghe su dung
        member: "1", //bao nhieu members
        role: "Developer", //vai tro trong du an
        github: "https://github.com/Baovedong5/Ecommerce-basic-reactjs",
      },
    },
    {
      image: <DiNodejsSmall size={50} color={"#00a80c"} />,
      title: "Booking Clone",
      shortDescription:
        "Website hỗ trợ đặt lịch khám bệnh dành cho bệnh viện và các phòng khám",
      detail: {
        description: "Xây dựng website đặt lịch khám bệnh", //Mieu ta du an lam gi
        technology: "React, Redux Toolkit, Ant Design", //Cong nghe su dung
        member: "1", //bao nhieu members
        role: "Developer", //vai tro trong du an
        github: "https://github.com/Baovedong5/quizz-reactjs",
      },
    },
    {
      image: <AiFillFacebook size={50} color={"#4096ff"} />,
      title: "Facebook Clone",
      shortDescription:
        "Website mạng xã hội giúp kết nối mọi người có chung sở thích",
      detail: {
        description:
          "Website mạng xã hội giúp kết nối mọi người có chung sở thích", //Mieu ta du an lam gi
        technology: "VueJS, Redux, NodeJS", //Cong nghe su dung
        member: "2", //bao nhieu members
        role: "Developer", //vai tro trong du an
        github: "https://github.com/Baovedong5/react-vite-ts",
      },
    },
  ];

  return (
    <>
      <Modal
        title={
          dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""
        }
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Miêu tả: {dataDetail.detail.description} </li>
            <li>Công nghệ: {dataDetail.detail.technology}</li>
            <li>Số lượng thành viên:{dataDetail.detail.member} </li>
            <li>Vai trò: {dataDetail.detail.role}</li>
            <li>
              Demo:
              <a href={dataDetail.detail.github} target="_blank">
                {dataDetail.detail.github}
              </a>
            </li>
          </ul>
        )}
      </Modal>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>Các dự án đã hoàn thiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                  return (
                    <li key={`key ${index}`}>
                      <div
                        className="inner"
                        title="Xem Chi Tiết"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(item);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div
                          className="view_detail"
                          style={{ padding: "5px 0" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp; Xem Chi Tiết
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
