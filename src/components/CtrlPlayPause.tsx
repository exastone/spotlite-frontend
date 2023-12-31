interface PlayPauseProps {
    isPlaying: boolean;
}

const CtrlPlayPause: React.FC<PlayPauseProps> = ({ isPlaying }) => {

    return (
        <div className="ctrl-play-pause">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon"
                className={`icon play-pause play ${isPlaying ? "" : "show"}`}>
                <path
                    d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon"
                className={`icon play-pause pause ${isPlaying ? "show" : ""}`}>
                <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
        </div>
    )
};

export default CtrlPlayPause;