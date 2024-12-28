export default function BackgroundVideo({ sourceVid }) {
    return (
        <video id="background-video" autoPlay loop muted>
            <source src={require(`../images/${sourceVid}.mp4`)} type="video/mp4" />
        </video>
    );
}