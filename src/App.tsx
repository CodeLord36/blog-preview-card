import style from "./styles/app.module.css";
import illustration from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";

function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <img
          className={style.illustration}
          src={illustration}
          alt="illustration"
        />
        <div className={style.content}>
          <div className={style.learn}>Learning</div>
          <div className={style.publish}>Published 21 Dec 2023</div>
          <div className={style.foundations}>HTML & CSS foundations</div>
          <div className={style.text}>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </div>
        </div>
        <div className={style.author}>
          <img className={style.avatar} src={avatar} alt="avatar" />
          <div className={style.authorText}>Greg Hooper</div>
        </div>
      </div>
      <div className={style.attribution}>
        Challenge by{" "}
        <a
          className={style.attriLink}
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className={style.attriLink} href="#">
          CodeLord36
        </a>
        .
      </div>
    </div>
  );
}

export default App;
