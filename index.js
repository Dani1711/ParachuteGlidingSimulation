// 创建滑翔伞对象
const parachute = {
  height: 0,
  velocity: 0,
  acceleration: 0.1, // 加速度
  gravity: 0.2, // 重力
  deploy: function() {
    this.height = 0;
    this.velocity = 0;
  },
  update: function() {
    // 更新高度和速度
    this.height += this.velocity;
    this.velocity += this.acceleration;
    
    // 检查是否触地
    if (this.height >= 100) {
      this.velocity = -this.velocity * 0.9; // 弹跳效果
      this.height = 100;
    }
    
    // 应用重力
    this.velocity += this.gravity;
  }
};

// 更新滑翔伞状态并渲染到屏幕上
function updateAndRender() {
  parachute.update();
  render();
  requestAnimationFrame(updateAndRender);
}

// 在屏幕上渲染滑翔伞
function render() {
  const parachuteElement = document.getElementById('parachute');
  parachuteElement.style.top = `${parachute.height}px`;
}

// 初始化
parachute.deploy();
updateAndRender();
