import { useState } from "react";

const Video9 = () => {
  //Kiểu bình thường hay làm => có thiên hướng JS hơn TS
  //   const [name, setName] = useState("Phuong");
  let [name, setName] = useState<string>("Phuong");

  return <div>hello + {name}</div>;
};

export default Video9;
