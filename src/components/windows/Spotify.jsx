import React from "react";
import MacWin from "./MacWin";

const Spotify = ({ setWindowState }) => {
  return (
    <MacWin setWindowState={setWindowState} windowKey="spotify" title="Spotify">
      <div className="h-full w-full pb-10">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWin>
  );
};

export default Spotify;
