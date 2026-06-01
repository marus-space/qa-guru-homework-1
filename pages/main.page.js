export class MainPage {
  constructor({ page }) {
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
  }

  async goToRegister() {
    await this.signUpLink.click();
  }
}
