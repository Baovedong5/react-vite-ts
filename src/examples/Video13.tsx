interface IProps {
  name?: string;
  age?: number;
  address?: string;
}

const Video13 = (props: IProps) => {
  //props la javascript object
  const { name, age, address } = props;

  //   const person = {
  //     name: "Phuong",
  //     age: 21,
  //     address: "Ha Noi",
  //   };

  return <div>Example in video 13 - hello word with {name}</div>;
};

export default Video13;
