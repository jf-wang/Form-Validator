// var checkAge = (rule, value, callback) => {//手机号验证
//   let regFormat = /^[1][3578][0-9]{9}$/; //正确手机号
//   if (!value) {
//     return callback(new Error('不能为空'));
//   }
//     if (!(regFormat.test(value))) {
//       callback(new Error('请输入正确手机号'));
//     } else {
//       if (value < 18) {
//         callback(new Error('必须大于18岁'));
//       }else {
//         callback();
//       }
//     }
// };
