<template>
  <div class="container pt-5">
    <h1 class="mb-5">
      Contacto
    </h1>
    <b-alert
      :variant="form.alert.type"
      :show="dismissCountDown"
      dismissible
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      {{ form.alert.message }}
    </b-alert>
    <b-form @submit.prevent="sendEmail()">
      <b-row>
        <!-- name -->
        <b-col cols="12" md="6" class="mt-md-4">
          <b-form-group label="Nombre*" label-for="input-name">
            <b-form-input
              id="input-name"
              v-model="form.name"
              class="form__input"
            />
          </b-form-group>
        </b-col>
        <!-- email -->
        <b-col cols="12" md="6" class="mt-4">
          <b-form-group label="Email*" label-for="input-email">
            <b-form-input
              id="input-email"
              v-model="form.email"
              class="form__input"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <!-- message -->
        <b-col cols="12" class="mt-4">
          <b-form-group label="Mensaje*" label-for="input-message">
            <b-form-textarea
              id="input-message"
              v-model="form.message"

              class="form__input form__input--text-area"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group>
        <b-row>
          <!-- submit -->
          <b-col cols="12" class="mt-4">
            <b-button
              size="lg"
              variant="primary"
              class="form__button mx-auto"
              type="submit"
              block
              squared
            >
              Enviar
            </b-button>
          </b-col>
        </b-row>
      </b-form-group>
    </b-form>
    <!-- social media -->
    <div class="mt-5 flex-nowrap d-flex justify-content-center">
      <!-- facebook -->
      <a
        class="social-media__link"
        href="https://www.facebook.com/"
        target="_blank"
      >
        <BaseIcon width="24" height="24">
          <IconFacebook />
        </BaseIcon>
      </a>
      <!-- twitter -->
      <a
        class="social-media__link ml-5"
        href="https://twitter.com/"
        target="_blank"
      >
        <BaseIcon width="24" height="24">
          <IconTwitter />
        </BaseIcon>
      </a>
      <!-- youtube -->
      <a
        class="social-media__link ml-5"
        href="https://www.youtube.com/"
        target="_blank"
      >
        <BaseIcon width="24" height="24">
          <IconYoutube />
        </BaseIcon>
      </a>
      <!-- github -->
      <a
        class="social-media__link ml-5"
        href="https://github.com/"
        target="_blank"
      >
        <BaseIcon width="24" height="24">
          <IconGithub />
        </BaseIcon>
      </a>
    </div>
  </div>
</template>

<script>
import IconFacebook from '@/components/icons/FacebookIcon.vue'
import IconTwitter from '@/components/icons/TwitterIcon.vue'
import IconYoutube from '@/components/icons/YoutubeIcon.vue'
import IconGithub from '@/components/icons/GithubIcon.vue'
export default {
  name: 'ContactPage',
  components: {
    IconFacebook,
    IconTwitter,
    IconYoutube,
    IconGithub
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        alert: {
          type: '',
          message: ''
        }
      },
      dismissSecs: 10,
      dismissCountDown: 0
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    async sendEmail () {
      if (this.isValidForm()) {
        const req = {
          email: 'noemileon.dev@gmail.com',
          subject: `Learn Dojo ${this.from} Contact Form | ${this.form.name}`,
          message: `From: ${this.form.name.trim()} \b
            Email: ${this.form.email.trim()} \b
            Message: ${this.form.message.trim()}`
        }
        const res = await this.$email.sendEmail(req)
        if (res.data.status === 'Ok') {
          // console.log("Email sent");
          this.form.alert.type = 'success'
          this.form.alert.message = 'Gracias por escribirnos. Pronto nos pondremos en contacto.'
        } else {
          this.form.alert.type = 'danger'
          this.form.alert.message = 'Oops! Ocurrió un error. Por favor intenta nuevamente.'
        }
      } else {
        this.form.alert.type = 'danger'
        this.form.alert.message = 'Por favor completa los campos correctamente. Todos son obligatorios.'
      }
      this.showAlert()
    },
    isValidForm () {
      if (this.form.name.trim() === '' ||
          this.form.message.trim() === '' ||
          !this.validEmail()) {
        return false
      }
      return true
    },
    validEmail () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.form.email)
    }
  }
}
</script>

<style scoped>
.form__input {
  /*border: solid 2px var(--dark-gray-1) !important;
  background: transparent !important;*/
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  border-radius: 100px;
  border: 1px solid transparent;
}

.form__input--text-area {
  resize: none;
  overflow-y: auto;
  height: 160px;
}

.form__button {
  width: 240px;
  background-color: var(--light-blue-1);
  border: none;
}

.form__button:active {
  background-color: var(--light-blue-1) !important;
}

.social-media__link {
  border-radius: 50%;
  border: 1px solid;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  color: var(--light-blue-1);
}

.social-media__link:hover {
  color: var(--light-gray-1);
  background: var(--light-blue-1);
  border: 1px solid var(--light-blue-1);
}
</style>
