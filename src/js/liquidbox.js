  let pointsA = [],
    pointsB = [],
    $canvas = [],
    canvas = [],
    context = null,
    lets = null,
    points = 8,
    viscosity = 20,
    mouseDist = 70,
    damping = 0.05,
    showIndicators = false;
  (mouseX = 0),
    (mouseY = 0),
    (relMouseX = 0),
    (relMouseY = 0),
    (mouseLastX = 0),
    (mouseLastY = 0),
    (mouseDirectionX = 0),
    (mouseDirectionY = 0),
    (mouseSpeedX = 0),
    (mouseSpeedY = 0);

  /**
   * Get mouse direction
   */
  function mouseDirection(e) {
    if (mouseX < e.pageX) mouseDirectionX = 1;
    else if (mouseX > e.pageX) mouseDirectionX = -1;
    else mouseDirectionX = 0;

    if (mouseY < e.pageY) mouseDirectionY = 1;
    else if (mouseY > e.pageY) mouseDirectionY = -1;
    else mouseDirectionY = 0;

    mouseX = e.pageX;
    mouseY = e.pageY;

    relMouseX = mouseX - $canvas.offset().left;
    relMouseY = mouseY - $canvas.offset().top;
  }
  $(document).on("mousemove", mouseDirection);

  /**
   * Get mouse speed
   */
  function mouseSpeed() {
    mouseSpeedX = mouseX - mouseLastX;
    mouseSpeedY = mouseY - mouseLastY;

    mouseLastX = mouseX;
    mouseLastY = mouseY;

    setTimeout(mouseSpeed, 50);
  }
  mouseSpeed();

  /**
   * Init button
   */
  function initButton() {
    // Get button
    let div = $("div.p18");
    //div.p18이 여러개여서 객체로 들어옴
    console.log(typeof div);
    console.dir(div);
    //객체로 들어온 요소들 중 하나에만 적용
    let divWidth = div.outerWidth();
    let divHeight = div.outerHeight();
    // Create canvas
    $canvas = $("<canvas></canvas>");
    div.append($canvas);

    canvas = $canvas.get(0);
    canvas.width = divWidth + 100;
    canvas.height = divHeight + 100;
    context = canvas.getContext("2d");

    // Add points

    let x = divHeight / 2;
    for (let j = 1; j < points; j++) {
      addPoints(x + ((divWidth - divHeight) / points) * j, 0);
    }
    addPoints(divWidth - divHeight / 5, 0);
    addPoints(divWidth + divHeight / 10, divHeight / 2);
    addPoints(divWidth - divHeight / 5, divHeight);
    for (let j = points - 1; j > 0; j--) {
      addPoints(x + ((divWidth - divHeight) / points) * j, divHeight);
    }
    addPoints(divHeight / 5, divHeight);

    addPoints(-divHeight / 10, divHeight / 2);
    addPoints(divHeight / 5, 0);
    addPoints(x, 0);
    addPoints(0, divHeight/2);

    addPoints(0, divHeight/2);
    addPoints(divHeight/4, 0);

    // Start render
    renderCanvas();
  }

  /**
   * Add points
   */
  function addPoints(x, y) {
    pointsA.push(new Point(x, y, 1));
    pointsB.push(new Point(x, y, 2));
  }

  /**
   * Point
   */
  function Point(x, y, level) {
    this.x = this.ix = 50 + x;
    this.y = this.iy = 50 + y;
    this.vx = 0;
    this.vy = 0;
    this.cx1 = 0;
    this.cy1 = 0;
    this.cx2 = 0;
    this.cy2 = 0;
    this.level = level;
  }

  Point.prototype.move = function () {
    this.vx += (this.ix - this.x) / (viscosity * this.level);
    this.vy += (this.iy - this.y) / (viscosity * this.level);

    let dx = this.ix - relMouseX,
      dy = this.iy - relMouseY;
    let relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

    // Move x
    if (
      (mouseDirectionX > 0 && relMouseX > this.x) ||
      (mouseDirectionX < 0 && relMouseX < this.x)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vx = (mouseSpeedX / 4) * relDist;
      }
    }
    this.vx *= 1 - damping;
    this.x += this.vx;

    // Move y
    if (
      (mouseDirectionY > 0 && relMouseY > this.y) ||
      (mouseDirectionY < 0 && relMouseY < this.y)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vy = (mouseSpeedY / 4) * relDist;
      }
    }
    this.vy *= 1 - damping;
    this.y += this.vy;
  };

  /**
   * Render canvas
   */
  function renderCanvas() {
    // rAF
    rafID = requestAnimationFrame(renderCanvas);

    // Clear scene
    context.clearRect(0, 0, $canvas.width(), $canvas.height());
    context.fillStyle = "#fff";
    context.fillRect(0, 0, $canvas.width(), $canvas.height());

    // Move points
    for (let i = 0; i <= pointsA.length - 1; i++) {
      pointsA[i].move();
      pointsB[i].move();
    }

    // Create dynamic gradient
    let gradientX = Math.min(
      Math.max(mouseX - $canvas.offset().left, 0),
      $canvas.width()
    );
    let gradientY = Math.min(
      Math.max(mouseY - $canvas.offset().top, 0),
      $canvas.height()
    );
    let distance =
      Math.sqrt(
        Math.pow(gradientX - $canvas.width() / 2, 2) +
          Math.pow(gradientY - $canvas.height() / 2, 2)
      ) /
      Math.sqrt(
        Math.pow($canvas.width() / 2, 2) + Math.pow($canvas.height() / 2, 2)
      );

    let gradient = context.createRadialGradient(
      gradientX,
      gradientY,
      300 + 300 * distance,
      gradientX,
      gradientY,
      0
    );
    gradient.addColorStop(0, "#102ce5");
    gradient.addColorStop(1, "#E406D6");

    // Draw shapes
    let groups = [pointsA, pointsB];

    for (let j = 0; j <= 1; j++) {
      let points = groups[j];

      if (j == 0) {
        // Background style
        context.fillStyle = "#1CE2D8";
      } else {
        // Foreground style
        context.fillStyle = gradient;
      }

      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      for (let i = 0; i < points.length; i++) {
        let p = points[i];
        let nextP = points[i + 1];
        let val = 30 * 0.552284749831;

        if (nextP != undefined) {
          if (nextP.ix > p.ix && nextP.iy < p.iy) {
           p.cx1 = p.x;
           p.cy1 = p.y-val;
           p.cx2 = nextP.x-val;
           p.cy2 = nextP.y;
          } else if (nextP.ix > p.ix && nextP.iy > p.iy) {
           p.cx1 = p.x+val;
           p.cy1 = p.y;
           p.cx2 = nextP.x;
           p.cy2 = nextP.y-val;
          }  else if (nextP.ix < p.ix && nextP.iy > p.iy) {
           p.cx1 = p.x;
           p.cy1 = p.y+val;
           p.cx2 = nextP.x+val;
           p.cy2 = nextP.y;
          } else if (nextP.ix < p.ix && nextP.iy < p.iy) {
           p.cx1 = p.x-val;
           p.cy1 = p.y;
           p.cx2 = nextP.x;
           p.cy2 = nextP.y+val;
          } else {

          p.cx1 = (p.x + nextP.x) / 2;
          p.cy1 = (p.y + nextP.y) / 2;
          p.cx2 = (p.x + nextP.x) / 2;
          p.cy2 = (p.y + nextP.y) / 2;

          context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
           continue;
          }

          context.bezierCurveTo(p.cx1, p.cy1, p.cx2, p.cy2, nextP.x, nextP.y);
        } else {
          nextP = points[0];
          p.cx1 = (p.x + nextP.x) / 2;
          p.cy1 = (p.y + nextP.y) / 2;

          context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
        }
      }

      context.closePath();
      context.fill();
    }

    if (showIndicators) {
      // Draw points
      context.fillStyle = "#000";
      context.beginPath();
      for (let i = 0; i < pointsA.length; i++) {
        let p = pointsA[i];

        context.rect(p.x - 1, p.y - 1, 2, 2);
      }
      context.fill();

      // Draw controls
      context.fillStyle = "#f00";
      context.beginPath();
      for (let i = 0; i < pointsA.length; i++) {
        let p = pointsA[i];

        context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
        context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
      }
      context.fill();
    }
  }

  // Init
  initButton();