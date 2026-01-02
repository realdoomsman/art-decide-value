import './WhitepaperPage.css'

function WhitepaperPage() {
  return (
    <div className="whitepaper-page">
      <div className="whitepaper-container">
        <h1>Whitepaper</h1>

        <section>
          <h2>What is this?</h2>
          <p>
            A place where you draw stuff and people decide if it's worth anything.
          </p>
          <p>
            No fancy tools. No AI. Just you and a canvas. Make something, post it, 
            and see what happens.
          </p>
        </section>

        <section>
          <h2>How it works</h2>
          <p>1. Draw something on the canvas</p>
          <p>2. Give it a title and publish</p>
          <p>3. People like it (or don't)</p>
          <p>4. Top 100 most-liked drawings become an NFT collection</p>
        </section>

        <section>
          <h2>The NFT thing</h2>
          <p>
            The 100 drawings with the most likes get minted as NFTs on Solana. 
            That's it. No complicated selection process. Just likes.
          </p>
          <p>
            Your scribble could end up on-chain forever. Or it could get zero likes. 
            The internet decides.
          </p>
        </section>

        <section>
          <h2>$VALUE token</h2>
          <div className="token-info">
            <p><strong>CA:</strong></p>
            <p className="ca">TBA</p>
          </div>
        </section>

        <section>
          <h2>Roadmap</h2>
          <p>Phase 1: Launch the site, launch the token</p>
          <p>Phase 2: Get people drawing and voting</p>
          <p>Phase 3: Mint the top 100 as NFTs</p>
          <p>Phase 4: See what happens next</p>
        </section>

        <section>
          <h2>Why?</h2>
          <p>
            Because a banana taped to a wall sold for $6.2 million and we thought 
            that was funny.
          </p>
          <p>
            Value is made up. Always has been. We're just being honest about it.
          </p>
        </section>

      </div>
    </div>
  )
}

export default WhitepaperPage
