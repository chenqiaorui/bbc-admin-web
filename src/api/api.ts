import instance from "./request";
 
// get请求，有参数，(如果你不会写类型也可以使用any,不过不建议,因为用了之后 和没写TS一样)
export const userList = (params:any): any => 
    instance.get("/api/user", { params });