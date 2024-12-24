import { Particle } from './particle';

export class FluidAnimation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[];
  private animationFrameId: number;
  private colors: string[];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');
    this.ctx = ctx;
    this.particles = [];
    this.animationFrameId = 0;
    this.colors = [
      'rgba(134, 239, 172, 0.6)', // green-300
      'rgba(74, 222, 128, 0.6)',  // green-400
      'rgba(34, 197, 94, 0.6)',   // green-500
      'rgba(22, 163, 74, 0.6)',   // green-600
      'rgba(110, 231, 183, 0.6)', // emerald-300
      'rgba(52, 211, 153, 0.6)',  // emerald-400
      'rgba(16, 185, 129, 0.6)',  // emerald-500
      'rgba(163, 230, 53, 0.6)',  // lime-400
    ];

    this.init();
    this.animate();
  }

  private init() {
    // Resize canvas to full screen
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Create particles
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.particles.push(new Particle(x, y, color));
    }
  }

  private resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      particle.update(this.canvas.width, this.canvas.height);
      particle.draw(this.ctx);
    });

    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  public destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', () => this.resize());
  }
}