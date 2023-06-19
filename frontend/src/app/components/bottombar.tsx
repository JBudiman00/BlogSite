export default function BottomBar () {
    return (
        <div className="h-48 bg-[#82614A] text-center">
            <div className="h-6"></div>
            <p>© 2023 Copyright</p>
            <div className="h-6"></div>
            <div className="flex flex-row justify-center">
                <div className="font-bold mx-3">Home</div>
                <div className="font-bold mx-3">Nathan</div>
                <div className="font-bold mx-3">Chloe</div>
                <div className="font-bold mx-3">Chloe+Nathan</div>
            </div>
            <div className="h-3"></div>
            <div className="flex flex-row h-14 justify-center">
                <img src="insta.png" className="m-2"/>
                <img src="github.png" className="m-2" />
                <img src="mail.png" className="m-2" />
            </div>
        </div>
    );
}