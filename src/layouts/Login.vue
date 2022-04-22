<template>
  <div class="pg-login d-flex justify-center align-center">
    <div class="container">
      <v-row>
        <v-col cols="12" md="5" offset-md="1" class="logo-side d-flex justify-center align-center">
          <img src="../assets/logo-light.svg" alt="logo" />
        </v-col>
        <v-col cols="12" md="5" class="form-side d-flex justify-center align-center">
          <v-form v-model="valid">
            <v-text-field v-model="login" :rules="loginRules" label="İstifadəçi adı" outlined required></v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" label="Şifrə" outlined required></v-text-field>
            <v-btn block color="#5758bb" class="white--text">Daxil ol</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    login: "",
    password: "",
    loginRules: [(v) => !!v || "Name is required", (v) => v.length <= 10 || "Name must be less than 10 characters"],
    passwordRules: [(v) => !!v || "parol is required", (v) => v.length <= 10 || "Name must be less than 10 characters"],
  }),
};
</script>

<style scoped>
.pg-login {
  height: 100vh;
  background-color: gray;
}
.logo-side {
  background-color: #5758bb;
  height: 12rem;
}

.form-side {
  background-color: #fff;
}
.form-side form {
  width: 75%;
}
/* .v-text-field--outlined >>> fieldset {
  border-color: rgba(192, 0, 250, 0.986);
} */
.text-field-outlined-fieldset-border{
  color: teal;
}

@media (min-width: 576px) {
  .logo-side {
    height: 16rem;
  }
}
@media (min-width: 768px) {
  .logo-side {
    height: 18rem;
  }
}
@media (min-width: 992px) {
  .logo-side {
    height: 20rem;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
  }
  .form-side {
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
}
@media (min-width: 1200px) {
  .logo-side {
    height: 24rem;
  }
}
</style>