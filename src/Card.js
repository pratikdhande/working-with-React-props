
const Card = ({img, desc, figure}) => {
    return(
        <section className ="">
                <div className ="flex flex-col gap-2 items-center justify-around">
                    <img src={img} alt="icon" className ="pb-3 w-40"/>
                    <h2 className ="text-[#233c7b] text-3xl xl:text-4xl font-semibold"><span>{figure}</span>+</h2>
                    <p className ="text-Gray-200 text-2xl xl:text-3xl font-semibold">{desc}</p>
                </div>
        </section>
    )
}

export default Card
