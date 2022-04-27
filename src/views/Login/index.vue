<template>
  <div class="pg-login d-flex justify-center align-center">
    <div class="container">
      <v-row>
        <v-col cols="12" md="5" offset-md="1" class="logo-side d-flex justify-center align-center">
          <h1 style="color: #fff">Vue Store</h1>
        </v-col>
        <v-col cols="12" md="5" class="form-side d-flex justify-center align-center">
          <v-form v-model="valid" ref="form">
            <v-text-field v-model="login" :rules="loginRules" label="İstifadəçi adı" outlined required></v-text-field>
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              label="Şifrə"
              class="input-group--focused"
              @click:append="show = !show"
              v-model="password"
              outlined
              required
            ></v-text-field>
            <v-btn block color="#6200ea" class="white--text" @click="submit" type="submit" :disabled="loginInProgress">Daxil ol</v-btn>
          </v-form>
        </v-col>
        <v-alert v-show="showAlert" type="error">İstifadəçi adı vəya şifrə səhfdir</v-alert>;
      </v-row>
    </div>
  </div>
</template>

<script>
import { authenticateUser } from "../../db";
import { mapMutations } from "vuex";
export default {
  data: () => ({
    valid: false,
    login: "",
    password: "",
    show: false,
    loginRules: [
      (v) => !!v || "İstifadəçi adı boş buraxıla bilməz",
      (v) => v.length <= 10 || "İstifadəçi adı 10 simvoldan çox ola bilməz",
      (v) => v.length >= 5 || "İstifadəçi adı 5 simvoldan az ola bilməz",
    ],
    passwordRules: [(v) => !!v || "Şifrə daxil edin"],
    showAlert: false,
    buttonIsDisabled: false,
  }),
  methods: {
    ...mapMutations({
      setUser: "setUser",
    }),
    submit() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        this.buttonIsDisabled = true;
        authenticateUser(this.login, this.password)
          .then((user) => {
            this.setUser("setUser", user);
            this.$router.push("/home");
          })
          .catch(() => {
            this.showAlert = true;
            this.buttonIsDisabled = false;

            setTimeout(() => {
              this.showAlert = false;
            }, 1500);
          });
      }
    },
  },
  computed: {
    loginInProgress() {
      return this.buttonIsDisabled;
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
  background-color: #6200ea;
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

<style scoped>
.v-alert {
  position: absolute;
  top: 60px;
  opacity: 0.5;
  right: -300px;
  transition: 0.3s cubic-bezier(0, 0, 0.34, 1.21);
  animation: show 1.5s;
  animation-fill-mode: backwards;
}

@keyframes show {
  from {
    opacity: 0.5;
    right: -300px;
  }
  to {
    opacity: 1;
    right: 20px;
  }
}
</style>