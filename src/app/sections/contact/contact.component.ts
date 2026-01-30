import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  fb = inject(FormBuilder);

  form_contact!: FormGroup;

  sending = false;
  sentOk = false;
  sendError = '';
  copied = false;

  private readonly FORM_ENDPOINT = 'https://formspree.io/f/xnjvwpeb';

  ngOnInit(): void {
    this.form_contact = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1200)]],

      // ✅ Honeypot anti-bots (tiene que quedar vacío)
      company: [''],
    });
  }

  copyEmail() {
    const user = 'cortezf.juanpablo';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;

    navigator.clipboard.writeText(email).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 1400);
    });
  }

  invalid(control: string) {
    if (!this.form_contact) return false;
    const c = this.form_contact.get(control);
    return !!(c && c.invalid && c.touched);
  }

  async onSubmit() {
    this.sentOk = false;
    this.sendError = '';

    this.form_contact.markAllAsTouched();
    if (this.form_contact.invalid) return;

    // ✅ Honeypot: si viene lleno, casi seguro es bot
    if (this.form_contact.value.company) return;

    this.sending = true;

    try {
      const payload = {
        name: this.form_contact.value.name,
        email: this.form_contact.value.email,
        message: this.form_contact.value.message,
        // opcional: metadata
        source: 'portfolio-contact',
      };

      const res = await fetch(this.FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Request failed');

      this.sentOk = true;
      this.form_contact.reset();
      // mantener honeypot limpio
      this.form_contact.get('company')?.setValue('');
    } catch (e) {
      this.sendError = 'No se pudo enviar el mensaje. Probá de nuevo en unos segundos.';
    } finally {
      this.sending = false;
    }
  }
}
