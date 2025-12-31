import './WhitepaperPage.css'

function WhitepaperPage() {
  return (
    <div className="whitepaper-page">
      <div className="whitepaper-container">
        <h1>Whitepaper</h1>
        <p className="subtitle">The Vision Behind Decide The Value</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Art has always been subjective. A canvas with a single dot sells for millions while 
            talented artists struggle to get noticed. We believe the value of art should be 
            decided by the people, not by galleries, critics, or algorithms.
          </p>
          <p>
            Decide The Value is a social experiment and art platform where anyone can create, 
            publish, and let the community decide what has worth.
          </p>
        </section>

        <section>
          <h2>The Problem</h2>
          <p>
            The traditional art world is gatekept. Success depends on connections, geography, 
            and luck. Digital art platforms are flooded with AI-generated content, making it 
            harder for human creativity to stand out.
          </p>
          <p>
            We wanted to strip it all back. No fancy tools. No AI. Just raw human expression 
            and collective judgment.
          </p>
        </section>

        <section>
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h3>Create</h3>
              <p>Use our simple canvas to draw anything. Scribbles, doodles, abstract art — whatever you want.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>Publish</h3>
              <p>Give your creation a title and share it with the world. No approval process, no gatekeepers.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>Community Decides</h3>
              <p>People browse, like, and comment. The art that resonates rises to the top.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h3>Hall of Fame</h3>
              <p>The most-liked artworks earn a spot in the Hall of Fame.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>The NFT Collection</h2>
          <p>
            The top 30 most-liked artworks will be minted into an official NFT collection. 
            This isn't about hype or speculation — it's about immortalizing the art that 
            the community collectively decided has value.
          </p>
          <p>
            Artists whose work makes it into the collection will be credited and celebrated. 
            The collection serves as a permanent record of what people chose to value.
          </p>
        </section>

        <section>
          <h2>The Token</h2>
          <p>
            The $VALUE token powers the ecosystem. It represents the community's collective 
            belief in the project and enables holders to participate in the platform's future.
          </p>
          <div className="token-info">
            <p><strong>Contract Address (CA):</strong></p>
            <p className="ca">TBA - Coming Soon</p>
          </div>
        </section>

        <section>
          <h2>Roadmap</h2>
          <div className="roadmap">
            <div className="phase">
              <h3>Phase 1: Launch</h3>
              <ul>
                <li>Platform launch</li>
                <li>Community building</li>
                <li>Token launch</li>
              </ul>
            </div>
            <div className="phase">
              <h3>Phase 2: Growth</h3>
              <ul>
                <li>Marketing push</li>
                <li>Artist spotlights</li>
                <li>Community events</li>
              </ul>
            </div>
            <div className="phase">
              <h3>Phase 3: NFT Collection</h3>
              <ul>
                <li>Top 30 selection</li>
                <li>NFT minting</li>
                <li>Collection reveal</li>
              </ul>
            </div>
            <div className="phase">
              <h3>Phase 4: Beyond</h3>
              <ul>
                <li>Platform expansion</li>
                <li>New features</li>
                <li>Community governance</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Why "Worthless" Art?</h2>
          <p>
            The name is intentional. Society tells us some art is worthless — scribbles, 
            doodles, amateur work. But value is subjective. A child's drawing might mean 
            more to someone than a masterpiece in a museum.
          </p>
          <p>
            We're proving that anything can have value if enough people decide it does. 
            That's the whole point.
          </p>
        </section>

        <section className="final-section">
          <h2>Join Us</h2>
          <p>
            This is more than a platform. It's a statement about art, value, and community. 
            Create something. Share it. Let the world decide.
          </p>
        </section>
      </div>
    </div>
  )
}

export default WhitepaperPage
