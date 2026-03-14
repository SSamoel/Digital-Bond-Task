import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

  name = signal('');
  email = signal('');
  message = signal('');

  showModal = signal(false);
  nameTouched = signal(false);
  emailTouched = signal(false);
  messageTouched = signal(false);

  isNameError = computed(() => this.name().length < 3);
  isEmailError = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(this.email()) || this.email().length < 5;
  });
  isMessageError = computed(() => this.message().length < 10);

  isNameInvalid = computed(() => this.isNameError() && this.nameTouched());
  isEmailInvalid = computed(() => this.isEmailError() && this.emailTouched());
  isMessageInvalid = computed(() => this.isMessageError() && this.messageTouched());

  isFormInvalid = computed(() => {
    return this.isNameError() || this.isEmailError() || this.isMessageError();
  });

  onSubmit() {
    this.nameTouched.set(true);
    this.emailTouched.set(true);
    this.messageTouched.set(true);
    if (!this.isFormInvalid()) {
      this.showModal.set(true);
      const formData = {
        name: this.name(),
        email: this.email(),
        message: this.message()
      };
      this.name.set('');
      this.email.set('');
      this.message.set('');
      this.nameTouched.set(false);
      this.emailTouched.set(false);
      this.messageTouched.set(false);
      console.log('Form Submitted with Signals:', formData);
    }
  }

  closeModal() {
    this.showModal.set(false);
  }
}
