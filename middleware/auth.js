export default function ({ store, redirect }) {
  if (!store.state.user.isUserLoggedIn) {
    return redirect('/')
  }
}
