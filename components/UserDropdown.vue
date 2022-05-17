<template>
  <CustomDropdown
    :main-class="'user-dropdown'"
    :button-class="'user-menu-btn'"
  >
    <template #button-content>
      <b-avatar v-if="user != {}" :src="user.profileImgSrc" :text="avatarText" size="40px" />
      <BaseIcon
        class="user-dropdown__arrow ml-1"
        icon-name=""
        width="16"
        height="16"
      >
        <ChevronDownIcon />
      </BaseIcon>
    </template>
    <template #dropdown-content>
      <div class="user-intro">
        <b-avatar :src="user.profileImgSrc" :text="avatarText" size="60px" />
        <div class="info">
          <p>{{ user.fullname }}</p>
          <small>{{ user.email }}</small>
        </div>
      </div>
      <hr role="separator" aria-orientation="horizontal" class="dropdown-divider my-2">
      <ul>
        <li class="dropdown-option">
          <a>
            <BaseIcon
              class="mr-3"
              icon-name="cart-icon"
              width="16"
              height="16"
            >
              <BookOpenIcon />
            </BaseIcon>
            Mis cursos
            <b-badge v-if="updateProfilePending" class="ml-4">Actualiza tus datos!</b-badge>
          </a>
        </li>
        <li class="dropdown-option">
          <nuxt-link :to="{name: 'my-certificates'}">
            <BaseIcon
              class="mr-3"
              icon-name="cart-icon"
              width="16"
              height="16"
            >
              <ParchmentIcon />
            </BaseIcon>
            Diplomas y certificaciones
            <b-badge v-if="updateProfilePending" class="ml-4">
              Actualiza tus datos!
            </b-badge>
          </nuxt-link>
        </li>
        <hr role="separator" aria-orientation="horizontal" class="dropdown-divider my-2">
        <li class="dropdown-option">
          <a>
            <BaseIcon
              class="mr-3"
              icon-name="cart-icon"
              width="16"
              height="16"
            >
              <CircleQuestionIcon />
            </BaseIcon>
            Ayuda
            <b-badge v-if="updateProfilePending" class="ml-4">Actualiza tus datos!</b-badge>
          </a>
        </li>
        <li class="dropdown-option">
          <a @click="logout()">
            <BaseIcon
              class="mr-3"
              icon-name="cart-icon"
              width="16"
              height="16"
            >
              <CloseCircleIcon />
            </BaseIcon>
            CerrarSesión
            <b-badge v-if="updateProfilePending" class="ml-4">Actualiza tus datos!</b-badge>
          </a>
        </li>
      </ul>
    </template>
  </CustomDropdown>
</template>

<script>
import CustomDropdown from '@/components/CustomDropdown.vue'
import CloseCircleIcon from '@/components/icons/CloseCircleIcon.vue'
import ParchmentIcon from '@/components/icons/ParchmentIcon.vue'
import ChevronDownIcon from '@/components/icons/ChevronDownIcon'
import BookOpenIcon from '@/components/icons/BookOpenIcon'
import CircleQuestionIcon from '@/components/icons/CircleQuestionIcon'

export default {
  components: {
    CustomDropdown,
    ParchmentIcon,
    CloseCircleIcon,
    ChevronDownIcon,
    BookOpenIcon,
    CircleQuestionIcon
  },
  computed: {
    user () {
      return this.$store.state.user.user
    },
    avatarText () {
      let userName = this.$store.state.user.user.fullname
      if (userName == null) {
        userName = this.$store.state.user.user.email
      }
      const matches = userName.match(/\b(\w)/g)
      const str = matches.join('')
      return str.substring(0, 2)
    },
    updateProfilePending () {
      const userName = this.$store.state.user.user.fullname
      if (userName == null) {
        return true
      }
      return false
    }
  },
  methods: {
    // showUserProfileModal () {
    //   this.$root.$emit('bv::show::modal', 'user-profile-modal')
    // },
    logout () {
      return this.$store.dispatch('user/logout').then(() => {
        if (this.$route.name !== 'index') { this.$router.push({ name: 'index' }) }
      })
    }
  }
}
</script>

<style>

.user-dropdown__arrow{
  color: var(--light-blue-1);
}

.user-dropdown > .user-menu-btn{
  border: none;
  background: none;
}
.b-avatar .b-avatar-text{
  color: var(--light-blue-1) !important;
}
.user-menu-btn > .b-avatar,
.user-intro > .b-avatar{
  background-color: transparent;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
}
.user-menu-btn:focus{
  outline: none;
}
.user-menu-btn{
  height: 40px;
}
.user-dropdown .user-intro{
  display: flex;
  align-items: center;
  padding: 20px 22px 10px 22px;
}
.user-dropdown .user-intro > .b-avatar{
  margin-right: 1rem;
}
.user-dropdown .user-intro .info > p{
  margin-bottom: 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 0.86;
  text-align: left;
  color: var(--dark-gray-1);
}
.user-dropdown .user-intro .info > small{
  font-size: 12px;
  line-height: 1;
  text-align: left;
  color: var(--light-blue-1);
}
</style>
