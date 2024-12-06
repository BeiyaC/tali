import rock from '../assets/rock.png'

const Shifumi = () => {
    return (
        <section className="">
            <div className="result_field">
                <div className="result_images">
          <span className="user_result animated-rock-user">
            <img src={rock} alt=""/>
          </span>
                    <span className="cpu_result animated-rock-cpu">
            <img src={rock} alt=""/>
          </span>
                </div>
                <div className="result">Let's Play!!</div>
            </div>
        </section>

    )
}

export default Shifumi