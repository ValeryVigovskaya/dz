interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: [Object];
  ip: string;
  address: [Object];
  macAddress: string;
  university: string;
  bank: [Object];
  company: [Object];
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: [Object];
  role: string;
}

interface IResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

enum Status {
  success = 200,
  error = 404,
}

const getUsers = async (): Promise<User[]> => {
  const url = "https://dummyjson.com/users";
  const req: IResponse = await fetch(url)
    .then((res) => {
      if (res.status == Status.success) {
        return res.json();
      }
    })
    .catch((e) => {
      throw new Error(e);
    });
  if (req?.users) {
    return req.users;
  } else {
    throw new Error("Некорректный запрос");
  }
};

const response = async () => {
  const res = await getUsers();
  console.log(res);
};
response();
