import styles from './styles.module.scss';
import { useEffect } from 'react';

export const Background = () => {
  useEffect(() => {
    //////////////////////// Mouse follow for Gradients ///////////////////////////////////////
    //Initial vars for mouse movement
    var lFollowX = 0,
      lFollowY = 0,
      x = 0,
      y = 0,
      friction = 1 / 10;

    //Vars for elements affected
    var topGradient = document.querySelector(
      `.${styles['site__background__gradient--top']}`,
    ) as HTMLElement;
    var bottomGradient = document.querySelector(
      `.${styles['site__background__gradient--bottom']}`,
    ) as HTMLElement;

    //Vars for window size
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    function moveElements() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;

      //Vars for gradients movement
      var moveTop = 'translate(-' + x * 10 + 'rem, -' + y * 10 + 'rem)';
      var moveBottom = 'translate(' + x * 10 + 'rem, ' + y * 10 + 'rem)';

      if (windowWidth > 820) {
        //Gradients movement
        topGradient.style.transform = moveTop;
        bottomGradient.style.transform = moveBottom;
      }
      window.requestAnimationFrame(moveElements);
    }

    window.addEventListener('mousemove', (event) => {
      var lMouseX = Math.max(
        -100,
        Math.min(100, windowWidth / 2 - event.clientX),
      );
      var lMouseY = Math.max(
        -100,
        Math.min(100, windowHeight / 2 - event.clientY),
      );
      lFollowX = lMouseX / 100; // 100 : 12 = lMouxeX : lFollow
      lFollowY = lMouseY / 100;
    });
    moveElements();
  }, []);

  return (
    <div className={styles.site__background}>
      <div className={styles['site__background__gradient--top']}>
        <div className={styles['blur__gradient--top']}></div>
      </div>
      <div className={styles['site__background__gradient--bottom']}>
        <div className={styles['blur__gradient--bottom']}></div>
      </div>
    </div>
  );
};
