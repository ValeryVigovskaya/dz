var Status;
(function (Status) {
    Status[Status["success"] = 200] = "success";
    Status[Status["error"] = 404] = "error";
})(Status || (Status = {}));
const getUsers = async () => {
    const url = "https://dummyjson.com/users";
    const req = await fetch(url)
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
    }
    else {
        throw new Error("Некорректный запрос");
    }
};
const response = async () => {
    const res = await getUsers();
    console.log(res);
};
response();
