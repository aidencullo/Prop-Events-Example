import { useState } from "react";

function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={"button " + className}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayClick() {
    setIsPlaying(!isPlaying);
  }

  return (
    <Button onClick={handlePlayClick} className={isPlaying && "playing"}>
      {isPlaying ? "Stop Playing" : "Play"} "{movieName}"
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="The Breakfast Club" />
      <br />
      <PlayButton movieName="Gone with the Wind" />
      <br />
      <PlayButton movieName="Footloose" />
      <br />
      <PlayButton movieName="The Count of Monte Cristo" />
      <br />
    </div>
  );
}
