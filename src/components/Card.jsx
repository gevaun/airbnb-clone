export default function Card(props) {
    console.log(props)
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "Sold Out"
    } else if (props.item.location === "Online") {
        badgeText = "Online"
    }

    return (
        <div className="card pt-6 pb-6 flex-none">
            <div className="relative">
            {badgeText && <div className="absolute top-3 left-3/4 bg-gray-100 text-gray-700 text-xs font-medium mr-2 px-1.5 rounded-lg py-1">{badgeText}</div>}
            <img src={`/src/assets/images/${props.item.coverImg}`} className="h-96 rounded-2xl static" />
            </div>
            <div>
                <div className="flex pt-2 pb-2 space-x-1">
                    <img src="/src/assets/star.png" className="" />
                    <span className="opacity-70">{props.item.stats.rating}</span>
                    <span className="opacity-70">({props.item.stats.reviewCount}) • </span>
                    <span className="opacity-70">{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><span className="font-medium">From ${props.item.price}</span> / person</p>
            </div>
        </div>
    )
}

