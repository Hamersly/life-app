import {FC} from "react";
import {Settings} from "./components/settings.tsx";
import {
  get_blue_blue,
  get_blue_green, get_blue_quantity,
  get_blue_red,
  get_blue_yellow,
  get_green_blue,
  get_green_green,
  get_green_quantity,
  get_green_red,
  get_green_yellow,
  get_red_blue,
  get_red_green,
  get_red_quantity,
  get_red_red,
  get_red_yellow,
  get_yellow_blue,
  get_yellow_green, get_yellow_quantity,
  get_yellow_red,
  get_yellow_yellow,
  getSpeedLevel
} from "../store/selectors.ts";
import {useSelector} from "react-redux";

export const App: FC = () => {
  const canvas = document.getElementById("life") as HTMLCanvasElement
  const m: CanvasRenderingContext2D | null = canvas.getContext("2d");

  const speed: number = useSelector(getSpeedLevel);

  const green_green: number = useSelector(get_green_green);
  const green_red: number = useSelector(get_green_red);
  const green_yellow: number = useSelector(get_green_yellow);
  const green_blue: number = useSelector(get_green_blue);

  const red_green: number = useSelector(get_red_green);
  const red_red: number = useSelector(get_red_red);
  const red_yellow: number = useSelector(get_red_yellow);
  const red_blue: number = useSelector(get_red_blue);

  const yellow_green: number = useSelector(get_yellow_green);
  const yellow_red: number = useSelector(get_yellow_red);
  const yellow_yellow: number = useSelector(get_yellow_yellow);
  const yellow_blue: number = useSelector(get_yellow_blue);

  const blue_green: number = useSelector(get_blue_green);
  const blue_red: number = useSelector(get_blue_red);
  const blue_yellow: number = useSelector(get_blue_yellow);
  const blue_blue: number = useSelector(get_blue_blue);

  const green_quantity: number = useSelector(get_green_quantity);
  const red_quantity: number = useSelector(get_red_quantity);
  const yellow_quantity: number = useSelector(get_yellow_quantity);
  const blue_quantity: number = useSelector(get_blue_quantity);

  const xSize: number = 1024;
  const ySize: number = 768;


  const draw = (x: number, y: number, color: string, s1: number, s2: number): void => {
    // @ts-ignore
    m.fillStyle = color;
    // @ts-ignore
    m.fillRect(x, y, s1, s2);
  };

  const atoms: any[] = [];

  const atom = (x: number, y: number, c: string) => {
    return {x: x, y: y, vx: 0, vy: 0, color: c};
  };

  const random = () => {
    return Math.random() * 600;
  };

  const create = (number: number, color: string) => {
    const group: {}[] = [];
    for (let i: number = 0; i < number; i++) {
      group.push(atom(random(), random(), color));
      atoms.push(group[i]);
    }
    return group;
  };

  const rule = (atoms1: any[], atoms2: any[], g: number): void => {
    for (let i: number = 0; i < atoms1.length; i++) {
      let fx: number = 0;
      let fy: number = 0;
      for (let j: number = 0; j < atoms2.length; j++) {
        var a = atoms1[i];
        var b = atoms2[j];
        const dx: number = a.x - b.x;
        const dy: number = a.y - b.y;
        const d: number = Math.sqrt(dx * dx + dy * dy);
        if (d > 0 && d < 80) {
          const F: number = (-g * speed) / d;
          fx += F * dx;
          fy += F * dy;
        }
      }
      a.vx = (a.vx + fx) * 0.5;
      a.vy = (a.vy + fy) * 0.5;
      a.x += a.vx;
      a.y += a.vy;
      if (a.x <= 0 || a.x >= xSize) {
        a.vx *= -10;
      }
      if (a.y <= 0 || a.y >= ySize) {
        a.vy *= -10;
      }
    }
  };

  const yellow: {}[] = create(yellow_quantity, "yellow");
  const red: {}[] = create(red_quantity, "red");
  const green: {}[] = create(green_quantity, "green");
  const blue: {}[] = create(blue_quantity, "blue");

  const update = (): void => {
    rule(green, green, green_green);
    rule(green, red, green_red);
    rule(green, yellow, green_yellow);
    rule(green, blue, green_blue);

    rule(red, red, red_red);
    rule(red, green, red_green);
    rule(red, yellow, red_yellow);
    rule(red, blue, red_blue);

    rule(yellow, yellow, yellow_yellow);
    rule(yellow, green, yellow_green);
    rule(yellow, red, yellow_red);
    rule(yellow, blue, yellow_blue);

    rule(blue, yellow, blue_yellow);
    rule(blue, green, blue_green);
    rule(blue, red, blue_red);
    rule(blue, blue, blue_blue);

    // @ts-ignore
    m.clearRect(0, 0, xSize, ySize);
    draw(0, 0, "black", xSize, ySize);
    for (let i: number = 0; i < atoms.length; i++) {
      draw(atoms[i].x, atoms[i].y, atoms[i].color, 5, 5);
    }
    requestAnimationFrame(update);

  };

  update();
  return (
    <Settings/>
  );
}

