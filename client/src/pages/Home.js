import { useWinSizeContext } from "../contexts/width-height";

function Home() {
    const { winWidth, winHeight } = useWinSizeContext();

    return (
        <div className="Ultimate Parent">
            <p>Win width: {winWidth} </p>
            <p>Win height: {winHeight} </p>
        </div>
    );
}

export default Home;