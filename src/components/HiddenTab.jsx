import './HiddenTab.css'

export default function HiddenTab() {
  return (
    <section id="hidden" className="section hidden-tab">
      <div className="container">

        <div className="ht__wrapper">

          <div className="ht__top">
            <span className="ht__label">— Hidden Tab —</span>
            <div className="ht__line"></div>
          </div>

          <h2 className="ht__heading">Curious who I am<br />beyond code?</h2>

          <p className="ht__subtext">
            Thoughts, stories, ideas, observations, Overthinking<br />
            and things I enjoy outside development.
          </p>

          <p className="ht__quote">"Sometimes I write instead of code."</p>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="ht__enter-btn"
          >
            [ Enter <span className="ht__arrow">→</span> ]
          </a>

        </div>

      </div>
    </section>
  )
}