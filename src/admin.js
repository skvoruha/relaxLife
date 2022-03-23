import {getData} from "./admin/getData";
import validate from "./admin/validate";
import login from "./admin/login";
import {cookieCheck} from "./admin/cookieCheck";
import tablePage from "./admin/tablePage";

validate()
login()
cookieCheck()
tablePage()

// Генерация пароля салт
// function gen_password(len){
//     if(len > 10) len = 10;
//     len = len * (-1);
//     return Math.random().toString(36).slice(len);
// }