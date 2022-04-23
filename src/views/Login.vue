<template>
  <div class="pg-login d-flex justify-center align-center">
    <div class="container">
      <v-row>
        <v-col cols="12" md="5" offset-md="1" class="logo-side d-flex justify-center align-center">
          <img src="../assets/logo-light.svg" alt="logo" />
        </v-col>
        <v-col cols="12" md="5" class="form-side d-flex justify-center align-center">
          <v-form v-model="valid" ref="form">
            <v-text-field v-model="login" :rules="loginRules" label="İstifadəçi adı" outlined required></v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" label="Şifrə" outlined required></v-text-field>
            <v-btn block color="#5758bb" class="white--text" @click="submit">Daxil ol</v-btn>
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
    loginRules: [
      (v) => !!v || "İstifadəçi adı boş buraxıla bilməz",
      (v) => v.length <= 10 || "İstifadəçi adı 10 simvoldan çox ola bilməz",
      (v) => v.length >= 5 || "İstifadəçi adı 5 simvoldan az ola bilməz",
    ],
    passwordRules: [(v) => !!v || "Şifrə daxil edin"],
  }),
  methods: {
    submit() {
      let isValid = this.$refs.form.validate();
      console.log(this.$store.getters.getUser);
      if (isValid) {
        this.$router.push("/home");
        this.$store.commit("handleUser", { name: this.login });
      }
    },
  },
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
.text-field-outlined-fieldset-border {
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