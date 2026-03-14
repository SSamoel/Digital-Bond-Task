import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  // هنا بجيب الهوية هل انا عند المستخدم في المتصفح ولا علي السيرفر
  private platformId = inject(PLATFORM_ID);

  isScrolled = signal(false);
  isMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // بسأل هل انا عند المستخدم في المتصفح
    if (isPlatformBrowser(this.platformId)) {
      // لو اه فانا كدة هقدر ا ستخدم window , بقوله هاتلي الرقم اللي هو ععدد البكسلات اللي اتعملها scroll
      const scrollOffset = window.pageYOffset
      // بسال ال document element نفسه أنت نازل تحت قد اية
      || document.documentElement.scrollTop;
      this.isScrolled.set(scrollOffset > 50);
    }
  }

  toggleMenu(){
    this.isMenuOpen.update(value => !value);
  }
}
