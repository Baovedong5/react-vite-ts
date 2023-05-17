import about1 from "@/assets/img/about/1.jpg";
import myCV from "@/assets/v6.0 Backend Zero Restful APIs (1).pdf";
import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import logo550 from "@/assets/img/about/550x640.jpg";

const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });

      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, []);

  return (
    <>
      <div
        className="arlo_tm_section relative"
        id="about"
        style={{ paddingTop: 100 }}
      >
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Về tác giả</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    ref={sceneEl}
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src={logo550} alt="550x640" />
                      <div
                        className="inner"
                        data-img-url={about1}
                        style={{ backgroundImage: `url(${about1})` }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src={logo550} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm a Phương&nbsp;
                      <TypeAnimation
                        sequence={[
                          "Freelancer",
                          2000, // Waits 2s
                          "UI/UX Designer",
                          2000, // Waits 2s
                          "Web Develooper",
                          2000, // Waits 2s
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        //   style={{ fontSize: "2em", display: "inline-block" }}
                      />
                      <span className="arlo_tm_animation_text_word"></span>
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Xin chào, mình là <strong>Phương</strong>. Mình là lập
                      trình viên Website.
                      <br />
                      Mình hiện tại đang là sinh viên năm 3 của trường Đại học
                      Công Nghiệp Hà Nội. Chuyên ngành mình đang theo là Kỹ
                      Thuật Phần Mềm.
                      <br />
                      Và hiện tại mình đang sống tại Hà Nội.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Ngày sinh:</label> 14.02.2002
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Giới tính:</label> Nam
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Tốt nghiệp:</label> Chưa
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Chuyên ngành:</label> Kỹ Thuật Phần Mềm
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Website:</label>{" "}
                          <a href="#">www.mywebsite.com</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Phone:</label>{" "}
                          <a href="#">+77 022 177 05 05</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Sở thích:</label> Game, Nghe nhạc
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Twitter:</label>{" "}
                          <a href="#">&#64;myusername</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={myCV} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
