import EmailForm from './ui/EmailForm'
import EyebrowPill from './ui/EyebrowPill'

export default function Home() {
  return (
    <header className="hero">
      <div className="page-padding">
        <div className="container">
          <div className="home-hero-header">
            <EyebrowPill 
              text="Heyo! We launched our Alpha!" 
              link="#"
            />
            <h1 className="home-hero-heading">
              World's First Spiritual Network
            </h1>
            <div className="home-hero-subheading">
              <p className="subheading">
                Connect, learn, and share your experiences with spiritual seekers from around the world.
              </p>
            </div>
            
            <EmailForm />
          </div>

          <div className="home-hero-img-wrap homehero">
            <img
              src="/images/colorback.webp"
              alt="Decorative background"
              className="home-hero-portal"
            />
            <div className="home-hero-mockup cc-1">
              <img
                src="/images/k4m2a-app-1.webp"
                alt="App preview 1"
                className="u-auto-img"
              />
            </div>
            <div className="home-hero-mockup cc-2">
              <img
                src="/images/k4m2a-app-2.webp"
                alt="App preview 2"
                className="u-auto-img"
              />
            </div>
          </div>

          {/* Hero Highlights */}
          <div className="hero-highlights-wrap">
            <div className="hero-highlight-cell">
              <div className="icon-wrap">
                <div className="icon-inner">
                  <img src="/images/hicon_3.png" alt="Icon" className="icon-img" />
                </div>
                <div className="icon-bg u-rainbow u-blur-perf"></div>
              </div>
              <h3 className="heading-m">Judgment-free space to express</h3>
            </div>
            <div className="hero-highlight-cell">
              <div className="icon-wrap">
                <div className="icon-inner">
                  <img src="/images/hicon_2.png" alt="Icon" className="icon-img" />
                </div>
                <div className="icon-bg u-rainbow u-blur-perf"></div>
              </div>
              <h3 className="heading-m">Dwell on the topics that resonate</h3>
            </div>
            <div className="hero-highlight-cell">
              <div className="icon-wrap">
                <div className="icon-inner">
                  <img src="/images/hicon_1.png" alt="Icon" className="icon-img" />
                </div>
                <div className="icon-bg u-rainbow u-blur-perf"></div>
              </div>
              <h3 className="heading-m">Escape material algorithms</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

