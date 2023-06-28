interface blogblock {
    title: string;
    img_link: string;
}

export default function BlogBlock (props: blogblock) {
    return (
        <div className="flex flex-col justify-center items-center w-1/4">
            <p className="text-2xl text-center">{props.title}</p>
            <div className="flex flex-col jusifty-center bg-[#9F825B] border-[#82614A] border-2 rounded-lg">
                <img src={props.img_link} className="w-64 h-64 object-contain" />
            </div>
        </div>
    );
}