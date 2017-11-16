// 手机号验证
var phone = (rule, value, callback) => {
  let regFormat = /^[1][3578][0-9]{9}$/; //正确手机号
  if (!value) {
    return callback(new Error('不能为空'));
  }
    if (!(regFormat.test(value))) {
      callback(new Error('请输入正确手机号'));
    } else {
      if (value < 18) {
        callback(new Error('必须大于18岁'));
      }else {
        callback();
      }
    }
};
//数字验证
var number = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('不能为空'));
  }
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字值'));
    } else {
      if (value < 18) {
        callback(new Error('必须大于18岁'));
      }else if(value >55){
        callback(new Error('必须小于55岁'));
      } else {
        callback();
      }
    }
};
//text不能为空
var text = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('不能为空'));
  }else{
    callback();
  }
};
//desc不能为空
var desc = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('不能为空'));
  }else{
    callback();
  }
};
//邮箱
var email = (rule, value, callback) => {
  let mal = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!value) {
    return callback(new Error('不能为空'));
  }
  if(!(mal.test(value))) {
    callback(new Error('请输入正确邮箱'));
  }else{
    callback();
  }
};
//开始时间
var startTime = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请选择开始日期'));
  }else{
    callback();
  }
};
//开始时间
var endTime = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请选择结束日期'));
  }else{
    callback();
  }
};
//时间
var time = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请选择日期'));
  }else{
    callback();
  }
};
//多选框
var checkbox = (rule, value, callback) => {
  if (value.length<1) {
    return callback(new Error('请选择一个'));
  }else{
    callback();
  }
};
//单选框
var radio = (rule, value, callback) => {
  if (value.length<1) {
    return callback(new Error('请选择一个'));
  }else{
    callback();
  }
};
//下拉框
var select = (rule, value, callback) => {
  if (value.length<1) {
    return callback(new Error('请选择一个'));
  }else{
    callback();
  }
};
//上传图片
var imageUrl = (rule, value, callback) => {
  console.log(value)
  if (!value) {
    callback(new Error('请上传图片'));
  }else{
    callback();
  }
};
