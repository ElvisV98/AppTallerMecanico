import { Component, OnInit, ElementRef, ViewChildren  } from '@angular/core';
import { AnimationController, GestureController, IonCard} from '@ionic/angular';
import type { Animation, Gesture, GestureDetail} from '@ionic/angular';
import type { QueryList } from '@angular/core';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit{
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;
  
  private animation!: Animation;
  
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const cardA = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(0)!.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0) ' },
      ]);

    const cardB = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(1)!.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    const cardC = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(2)!.nativeElement)
      .duration(5000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.5)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);

    this.animation = this.animationCtrl
      .create()
      .duration(2000)
      .iterations(Infinity)
      .addAnimation([cardA, cardB, cardC]);
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }

}
