
function CardTotal({total, modelName, className}) {

    return (
        <div className={` flex-shrink-0 ml-4 ${className}`}>
            <div className="bg-adminCardColor p-4 rounded-lg min-h-[140px] flex flex-col justify-between relative overflow-hidden">
                <span className="text-adminTextGrayColor">Total {modelName}</span>
                <span className="self-end z-20 text-white">{total}</span>
                <div className="absolute w-32 h-32 bg-primaryColor rounded-full -right-8 -bottom-8" />
            </div>  
        </div>
    )

}

export default CardTotal