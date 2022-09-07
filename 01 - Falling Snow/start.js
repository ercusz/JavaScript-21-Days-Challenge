(() => {
  // เริ่มเขียนโค้ด
  setup = () => {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
      canvas,
      ctx: canvas.getContext ? canvas.getContext("2d") : null,
      numberOfSnowBalls: 250,
    };
  };

  random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  generateSnowballArray = (canvas, numberOfSnowBalls) => {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.25, 1),
        speedX: random(-5, 5),
        speedY: random(1, 5),
        radius: random(2, 5),
      };
    });
  };

  createSnowBallDrawer = (ctx) => {
    if (ctx === null) return;

    return (snowBall) => {
      ctx.beginPath();
      ctx.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${snowBall.opacity})`;
      ctx.fill();
    };
  };

  createSnowBallMover = (canvas) => {
    return (snowBall) => {
      snowBall.x += snowBall.speedX;
      snowBall.y += snowBall.speedY;

      if (snowBall.x > canvas.width) {
        snowBall.x = 0;
      } else if (snowBall.x < 0) {
        snowBall.x = canvas.width;
      }

      if (snowBall.y > canvas.height) {
        snowBall.y = 0;
      }
    };
  };

  run = () => {
    const { canvas, ctx, numberOfSnowBalls } = setup();
    const snowBalls = generateSnowballArray(canvas, numberOfSnowBalls);
    const snowBallDrawer = createSnowBallDrawer(ctx);
    const snowBallMover = createSnowBallMover(canvas);

    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous snowballs before draw at new positions
      snowBalls.forEach(snowBallDrawer);
      snowBalls.forEach(snowBallMover);
    }, 50);
  };

  run();
})();
