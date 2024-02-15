import { useEffect, useRef, useState } from "react";

function JazzRadio() {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(new Audio("https://jking.cdnstream1.com/b22139_128mp3"));

  function togglePlay() {
    setPlaying(!playing);
  }

  useEffect(() => {
    // Play or pause from playing state
    if (playing) {
      setTimeout(() => {
        let promise = audio.current.play();

        // Audio play promise
        if (promise !== null) {
          promise
            .then((_) => {
              // Reinititialze if the stream is not read after a lap of time
              setTimeout(() => {
                if (audio.current.currentTime === 0) {
                  // SetState
                  console.log("error in playing");

                  // Reload page
                  setTimeout(() => {
                    window.location.reload();
                  }, 3000);
                }
              }, 10000);

              // Set play state
              setPlaying(playing);
            })
            .catch((err) => {
              // SetState
              console.log(err);

              // Display message during 5s
              setTimeout(() => {
                // Reload page
                window.location.reload();
              }, 5000);
            });
        }
      }, 500);
    } else {
      audio.current.pause();
    }
  }, [audio, playing]);

  return (
    <button
      className="rounded-full bg-yellow-100 px-2 py-1 text-xl transition-all hover:bg-yellow-200"
      onClick={togglePlay}
    >
      {playing ? "🎷 ⏹️" : "🎷 ⏯️"}
    </button>
  );
}

export default JazzRadio;
