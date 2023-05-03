let name1 = "Phuong"; // tu dong doan type = string
// name 1 = 10;

// khai báo object
//C1
// let employee: object;
// employee = {
//   firtName: "Phương",
//   lastName: "Lê",
//   age: 21,
//   jobTitle: "Web Developer",
// };

// employee = 10

//C2
// let employee: {
//   firtName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };

// // -gan gia tri
// employee = {
//   firtName: "Phương",
//   lastName: "Lê",
//   age: 21,
//   jobTitle: "Web Developer",
// };

//C3

// let employee: {
//   firtName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// } = {
//   firtName: "Phương",
//   lastName: "Lê",
//   age: 21,
//   jobTitle: "Web Developer",
// };

//3 cách trên không khuyến khích khi dùng vs React-TS
// type TEmployee = {
//   firtName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };

// let employee: TEmployee = {
//   firtName: "Phương",
//   lastName: "Lê",
//   age: 21,
//   jobTitle: "Web Developer",
// };

interface IEmplyee {
  firtName: string;
  lastName: string;
  age: number;
  jobTitle: string;
}

let employee: IEmplyee = {
  firtName: "Phương",
  lastName: "Lê",
  age: 21,
  jobTitle: "Web Developer",
};
