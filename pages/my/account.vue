<template>
  <b-container class="my-account mt-5 mx-auto">
    <div class="my-account__avatar-container position-relative mb-3">
      <b-img
        :src="`${user.profileImgSrc ? user.profileImgSrc : require('@/assets/images/test-perfil.png')}`"
        rounded="circle"
        thumbnail
        alt="avatar"
        class="my-account__avatar"
      />
      <div class="my-account__upload-container position-absolute rounded p-2">
        <BaseIcon>
          <UploadIcon />
        </BaseIcon>
      </div>
    </div>

    <b-alert
      :variant="form.alert.type"
      :show="dismissCountDown"
      dismissible
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      {{ form.alert.message }}
    </b-alert>

    <b-form ref="form" @submit.prevent="onSubmit">
      <!-- fullname -->
      <b-form-group>
        <div class="input-group custom-input-group mb-2">
          <div class="input-group-prepend">
            <span id="email-login" class="input-group-text">
              <BaseIcon
                class=""
                icon-name="email-icon"
                width="22"
                height="16.8"
              >
                <UserIcon />
              </BaseIcon>
            </span>
          </div>
          <b-form-input :value="user.fullname" name="fullname" class="custom-input" /></b-form-input>
        </div>
      </b-form-group>
      <!-- fullname -->

      <!-- email -->
      <b-form-group>
        <div class="input-group custom-input-group mb-2">
          <div class="input-group-prepend">
            <span id="email-login" class="input-group-text">
              <BaseIcon
                class=""
                icon-name="email-icon"
                width="22"
                height="16.8"
              >
                <EmailIcon />
              </BaseIcon>
            </span>
          </div>
          <b-form-input :value="user.email" name="email" class="custom-input" /></b-form-input>
        </div>
      </b-form-group>
      <!-- email -->

      <!-- website -->
      <b-form-group>
        <div class="input-group custom-input-group mb-2">
          <div class="input-group-prepend">
            <span id="email-login" class="input-group-text">
              <BaseIcon
                class=""
                icon-name="email-icon"
                width="22"
                height="16.8"
              >
                <GlobeIcon />
              </BaseIcon>
            </span>
          </div>
          <b-form-input :value="user.website" name="website" class="custom-input" /></b-form-input>
        </div>
      </b-form-group>
      <!-- website -->

      <!-- location -->
      <b-form-group>
        <div class="input-group custom-input-group mb-2">
          <div class="input-group-prepend">
            <span id="email-login" class="input-group-text">
              <BaseIcon
                class=""
                icon-name="email-icon"
                width="22"
                height="16.8"
              >
                <LocationDotIcon />
              </BaseIcon>
            </span>
          </div>
          <b-form-input :value="user.location" name="location" class="custom-input" /></b-form-input>
        </div>
      </b-form-group>
      <!-- location -->

      <!-- twitter -->
      <b-form-group>
        <div class="input-group custom-input-group mb-2">
          <div class="input-group-prepend">
            <span id="email-login" class="input-group-text">
              <BaseIcon
                class=""
                icon-name="email-icon"
                width="22"
                height="16.8"
              >
                <TwitterIcon />
              </BaseIcon>
            </span>
          </div>
          <b-form-input :value="user.twitter" name="twitter" class="custom-input" /></b-form-input>
        </div>
      </b-form-group>
      <!-- twitter -->

      <!-- facebook -->
      <b-form-group>
        <div class="input-group custom-input-group mb-2">
          <div class="input-group-prepend">
            <span id="email-login" class="input-group-text">
              <BaseIcon
                class=""
                icon-name="email-icon"
                width="22"
                height="16.8"
              >
                <FacebookIcon />
              </BaseIcon>
            </span>
          </div>
          <b-form-input :value="user.facebook" name="facebook" class="custom-input" /></b-form-input>
        </div>
      </b-form-group>
      <!-- facebook -->

      <!-- github -->
      <b-form-group>
        <div class="input-group custom-input-group mb-2">
          <div class="input-group-prepend">
            <span id="email-login" class="input-group-text">
              <BaseIcon
                class=""
                icon-name="email-icon"
                width="22"
                height="16.8"
              >
                <GithubIcon />
              </BaseIcon>
            </span>
          </div>
          <b-form-input :value="user.github" name="github" class="custom-input" /></b-form-input>
        </div>
      </b-form-group>
      <!-- github -->

      <!-- youtube -->
      <b-form-group>
        <div class="input-group custom-input-group mb-2">
          <div class="input-group-prepend">
            <span id="email-login" class="input-group-text">
              <BaseIcon
                class=""
                icon-name="email-icon"
                width="22"
                height="16.8"
              >
                <YoutubeIcon />
              </BaseIcon>
            </span>
          </div>
          <b-form-input :value="user.youtube" name="youtube" class="custom-input" /></b-form-input>
        </div>
      </b-form-group>
      <!-- youtube -->

      <!-- linkedin -->
      <b-form-group>
        <div class="input-group custom-input-group mb-2">
          <div class="input-group-prepend">
            <span id="email-login" class="input-group-text">
              <BaseIcon
                class=""
                icon-name="email-icon"
                width="22"
                height="16.8"
              >
                <LinkedinIcon />
              </BaseIcon>
            </span>
          </div>
          <b-form-input :value="user.linkedin" name="linkedin" class="custom-input" /></b-form-input>
        </div>
      </b-form-group>
      <!-- linkedin -->

      <b-button type="submit" pill class="text-nowrap primary-btn d-block nav-button ml-auto">
        Guardar
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
import UserIcon from '@/components/icons/UserIcon'
import EmailIcon from '@/components/icons/EmailIcon'
import GlobeIcon from '@/components/icons/GlobeIcon'
import TwitterIcon from '@/components/icons/TwitterIcon'
import LocationDotIcon from '@/components/icons/LocationDotIcon'
import FacebookIcon from '@/components/icons/FacebookIcon'
import GithubIcon from '@/components/icons/GithubIcon'
import YoutubeIcon from '@/components/icons/YoutubeIcon'
import LinkedinIcon from '@/components/icons/LinkedinIcon'
import UploadIcon from '@/components/icons/UploadIcon'

export default {
  name: 'MyAccountPage',
  components: {
    UserIcon,
    LocationDotIcon,
    EmailIcon,
    GlobeIcon,
    TwitterIcon,
    FacebookIcon,
    GithubIcon,
    YoutubeIcon,
    LinkedinIcon,
    UploadIcon
  },

  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      form: {
        alert: {
          type: '',
          message: ''
        }
      }
    }
  },

  computed: {
    user () {
      return this.$store.state.user.user
    }
  },

  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },

    onSubmit () {
      const formData = new FormData(this.$refs.form)
      const user = {
        id: this.user.id,
        fullname: formData.get('fullname'),
        email: formData.get('email'),
        website: formData.get('website'),
        location: formData.get('location'),
        twitter: formData.get('twitter'),
        facebook: formData.get('facebook'),
        github: formData.get('github'),
        youtube: formData.get('youtube'),
        linkedin: formData.get('linkedin')
      }

      if (!this.isValidForm(user)) {
        this.form.alert.type = 'danger'
        this.form.alert.message = 'Algo salió mal con el formulario, verifica que tu correo esté bien y que las urls estén bien escritas y completas'
        this.showAlert()
        return
      }

      this.$store.dispatch('user/update', user)
        .then(() => {
          this.form.alert.type = 'success'
          this.form.alert.message = 'Se han actualizado correctamente tus datos'
          this.showAlert()
        })
    },

    isValidForm (user) {
      if (
        !this.validEmail(user.email) ||
        !this.validURL(user.website) ||
        !this.validURL(user.twitter) ||
        !this.validURL(user.facebook) ||
        !this.validURL(user.github) ||
        !this.validURL(user.youtube) ||
        !this.validURL(user.linkedin)
      ) {
        return false
      }
      return true
    },

    validEmail (string) {
      if (string === '') { return true }
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(string)
    },

    // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
    validURL (string) {
      if (string === '') { return true }
      const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
      return !!pattern.test(string)
    }
  }
}
</script>

<style scoped>
.my-account {
  max-width: 540px;
}

.my-account__avatar-container {
  height: 200px;
  width: 200px;
  margin: 0 auto;
}

.my-account__avatar {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.my-account__upload-container {
  background-color: var(--light-gray-1);
  color: var(--light-blue-1);
  bottom: 0;
  right: 0;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
}

.form__input {
  border-radius: 100px;
  border: 1px solid transparent;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
}

.form-control:focus {
  box-shadow: none !important;
}
</style>
