import { CourseService } from './services/course.service'
import { AuthService } from './services/auth.service'
import { EmailService } from './services/email.service'
import { UserService } from './services/user.service'

export default ({ app: { $axios, $fire, store } }, inject) => {
  // pass $axios as a dependency to the constructor
  const auth = new AuthService($axios, $fire)
  const course = new CourseService($axios, store)
  const email = new EmailService($axios, store)
  const user = new UserService($axios, store)

  // inject the service, making it available in the context, component, store, etc.
  inject('auth', auth)
  inject('course', course)
  inject('email', email)
  inject('user', user)
}
