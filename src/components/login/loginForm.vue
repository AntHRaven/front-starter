<template>
  <div>
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Логин" prop="login">
        <el-input v-model="loginForm.login"></el-input>
      </el-form-item>

      <el-form-item label="Пароль" prop="password">
        <el-input show-password v-model="loginForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  data() {
    return {
      loginForm: {
        login: "",
        password: "",
      },
      rules: {
        login: [
          { required: true, message: "Обязательное поле", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Обязательное поле", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
