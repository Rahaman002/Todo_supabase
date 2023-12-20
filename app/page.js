"use client";
import Image from "next/image";
import Todo from "./components/todo";
import { useTheme } from "./theme";

export default function Home() {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const { settheme, theme } = useTheme();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-base-100 p-24">
      <div className="dropdown absolute right-0 top-2">
        <div tabIndex={0} role="button" className="btn">
          Click to change theme
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {themes.map((ele, id) => (
            <li key={id} onClick={() => settheme(themes[id])}>
              <a data-theme={theme}>{ele}</a>
            </li>
          ))}
        </ul>
      </div>
      <Todo />
    </main>
  );
}
