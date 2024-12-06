import rock from '../assets/rock.png'

const Shifumi = () => {
    return (
        <section className="">
            <div className="result_field">
                <div className="result_images flex justify-center">
                    <div className="user_result animated-rock-user">
                        <img src={rock} alt=""/>
                    </div>
                    <div className="cpu_result animated-rock-cpu">
                        <img src={rock} alt=""/>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <span className="m-4 rye-regular result block text-lg sm:text-xl md:text-2xl lg:text-3xl">Choose someone and play in real life.</span>
                    <span className="m-4 rye-regular result block text-lg sm:text-xl md:text-2xl lg:text-3xl">The first player to win 3 points will get a bonus card.</span>
                </div>
            </div>
        </section>

    )
}

export default Shifumi