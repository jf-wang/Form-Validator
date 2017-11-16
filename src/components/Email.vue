<template>
  <div class="text">
    <h2>邮箱√</h2>
    <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="email" label="邮箱" >
        <el-input  v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'text',
    data() {
      return {
        ruleForm: {
          email: ''
        },
        rules: {
          email: [{
            validator: email
          }]
        }
      }
    },
    methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text {
    width: 500px;
    margin: 0 auto;
  }

</style>
