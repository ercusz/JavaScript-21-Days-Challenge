(() => {
  // เริ่มเขียนโค้ด

  getColor = (distance) => {
    const opacity = Math.min(0.5, 1 / distance);
    return `rgba(158, 255, 163, ${opacity})`
  }

  getSize = (distance) => {
    return (Math.random() / distance) * 40;
  }

  getDistance = (previousPoint, currentPoint) => {
    return Math.sqrt(
      (previousPoint.x - currentPoint.x) ** 2 + (previousPoint.y - currentPoint.y) ** 2
    )
  }

  setUpBrush = (ctx, previousPoint, currentPoint) => {
    const distance = getDistance(previousPoint, currentPoint);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = getSize(distance);
    ctx.strokeStyle = getColor(distance);
  };

  mouseEnterHandler = (previousPoint) => {
    return ({ pageX, pageY }) => {
      previousPoint.x = pageX;
      previousPoint.y = pageY;
    };
  };

  mouseMoveHandler = (ctx, previousPoint) => {
    return ({ offsetX, offsetY }) => {
      const currentPoint = { x: offsetX, y: offsetY };
      
      ctx.beginPath();
      setUpBrush(ctx, previousPoint, currentPoint);

      ctx.moveTo(previousPoint.x, previousPoint.y);
      ctx.lineTo(currentPoint.x, currentPoint.y);

      ctx.stroke();
      ctx.closePath();

      previousPoint = currentPoint;
    };
  };

  run = () => {
    const canvas = document.getElementById("painting");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext("2d");
    let previousPoint = {};
    canvas.addEventListener("mouseenter", mouseEnterHandler(previousPoint));
    canvas.addEventListener("mousemove", mouseMoveHandler(ctx, previousPoint));
  };

  run();
})();
