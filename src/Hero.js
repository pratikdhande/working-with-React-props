
const Hero = ({imgUrl}) => {
    return(
        <section className="">
            <div className=" w-full mx-auto lg:block">
                <div className=" container mx-auto flex items-center">
                    <img src={imgUrl} alt=""/>
                </div>
            </div>
        </section>
    )
}
export default Hero