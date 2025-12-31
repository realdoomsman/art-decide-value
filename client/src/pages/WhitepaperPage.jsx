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
            publish, and let the community decide what has worth. It's a statement about how 
            value is assigned in our world — not by experts, but by collective agreement.
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
            and collective judgment. Anyone can participate, and the community decides what rises.
          </p>
        </section>

        <section>
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h3>Create</h3>
              <p>Use our simple canvas to draw anything. Scribbles, doodles, abstract art — whatever you want. No skills required.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>Publish</h3>
              <p>Give your creation a title and share it with the world. No approval process, no gatekeepers, no waiting.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>Community Decides</h3>
              <p>People browse, like, and comment. The art that resonates with people rises to the top organically.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h3>Hall of Fame</h3>
              <p>The most-liked artworks earn a spot in the Hall of Fame and become candidates for the NFT collection.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Technical Architecture</h2>
          <p>
            Decide The Value is built with modern, scalable technology designed for speed and reliability.
          </p>
          <div className="tech-stack">
            <div className="tech-item">
              <h3>Frontend</h3>
              <p>React + Vite for a fast, responsive user experience. Deployed on Vercel for global edge delivery.</p>
            </div>
            <div className="tech-item">
              <h3>Database</h3>
              <p>Supabase (PostgreSQL) handles all data storage — artworks, likes, comments, and user data. Real-time subscriptions enable instant updates.</p>
            </div>
            <div className="tech-item">
              <h3>Authentication</h3>
              <p>Supabase Auth provides secure email-based authentication. Your account, your art, your identity.</p>
            </div>
            <div className="tech-item">
              <h3>Storage</h3>
              <p>Artwork images are stored as base64 data URLs directly in the database, ensuring permanence and simplicity.</p>
            </div>
          </div>
          <p>
            The entire platform is open and transparent. No hidden algorithms deciding what you see. 
            Sorting is simple: newest, most liked, or random. The community's choices are the only filter.
          </p>
        </section>

        <section>
          <h2>The NFT Collection</h2>
          <p>
            The top 100 most-liked artworks will be minted into an official NFT collection on Solana. 
            This isn't about hype or speculation — it's about immortalizing the art that 
            the community collectively decided has value.
          </p>
          <p>
            Artists whose work makes it into the collection will be credited and celebrated. 
            The collection serves as a permanent, on-chain record of what people chose to value.
          </p>
          <p>
            Selection criteria is simple and transparent: the 100 artworks with the most likes 
            at the snapshot date will be included. No curation, no bias, just pure community choice.
          </p>
        </section>

        <section>
          <h2>The $VALUE Token</h2>
          <p>
            The $VALUE token is the native token of the Decide The Value ecosystem. It represents 
            the community's collective belief in the project and aligns incentives between 
            creators, collectors, and participants.
          </p>
          <div className="token-info">
            <p><strong>Contract Address (CA):</strong></p>
            <p className="ca">TBA - Coming Soon</p>
          </div>
          <p>
            Token utility and governance features will be announced as the project evolves. 
            The focus remains on building a genuine community around the core concept: 
            letting people decide what has value.
          </p>
        </section>

        <section>
          <h2>Roadmap</h2>
          <div className="roadmap">
            <div className="phase">
              <h3>Phase 1: Launch</h3>
              <ul>
                <li>Platform launch</li>
                <li>Community building</li>
                <li>Token launch on Solana</li>
                <li>Social media presence</li>
              </ul>
            </div>
            <div className="phase">
              <h3>Phase 2: Growth</h3>
              <ul>
                <li>Marketing campaigns</li>
                <li>Artist spotlights</li>
                <li>Community events</li>
                <li>Platform improvements</li>
              </ul>
            </div>
            <div className="phase">
              <h3>Phase 3: NFT Collection</h3>
              <ul>
                <li>Snapshot of top 100</li>
                <li>NFT minting on Solana</li>
                <li>Collection reveal</li>
                <li>Artist recognition</li>
              </ul>
            </div>
            <div className="phase">
              <h3>Phase 4: Evolution</h3>
              <ul>
                <li>New features based on feedback</li>
                <li>Expanded token utility</li>
                <li>Community governance</li>
                <li>Future collections</li>
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
            That's the whole point. The "worthless" scribble you make today could be 
            immortalized in an NFT collection tomorrow — if the community decides it's worth something.
          </p>
          <p>
            This is a social experiment as much as it is a platform. We're testing the hypothesis 
            that value is nothing more than collective agreement.
          </p>
        </section>

        <section>
          <h2>Transparency</h2>
          <p>
            Everything about Decide The Value is designed to be transparent:
          </p>
          <ul className="transparency-list">
            <li>Like counts are public and unmanipulated</li>
            <li>No hidden algorithms or boosted content</li>
            <li>NFT selection is purely based on like count</li>
            <li>All artworks are permanently stored</li>
            <li>The platform code is straightforward and auditable</li>
          </ul>
          <p>
            We believe trust is built through transparency. What you see is what you get.
          </p>
        </section>

        <section className="final-section">
          <h2>Join Us</h2>
          <p>
            This is more than a platform. It's a statement about art, value, and community. 
            Create something. Share it. Let the world decide.
          </p>
          <p>
            The next piece of "worthless" art that becomes valuable could be yours.
          </p>
        </section>
      </div>
    </div>
  )
}

export default WhitepaperPage
