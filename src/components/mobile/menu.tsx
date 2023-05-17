import logoMobile from "@/assets/img/logo/mobile_logo.png";
import { useState } from "react";

const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    overflow: "hidden",
    display: isOpen ? "block" : "none",
    transaction: "2s",
  };

  const handleClickTab = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setActiveTab(tab);
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.location.hash = tab;
      }, 1000);
    }
  };

  return (
    <>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="#">
              <img src={logoMobile} alt="mobile_logo" />
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div className="hamburger hamburger--collapse-r">
              <div className="hamburger-box">
                <div
                  className="hamburger-inner"
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap" style={style}>
          <div className="mob_menu">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  className={activeTab === "home" ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                    handleClickTab("home", event)
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeTab === "about" ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                    handleClickTab("about", event)
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeTab === "skills" ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                    handleClickTab("skills", event)
                  }
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeTab === "projects" ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                    handleClickTab("projects", event)
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeTab === "contact" ? "active" : ""}
                  onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                    handleClickTab("contact", event)
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
