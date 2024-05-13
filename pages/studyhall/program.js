import Head from "next/head";
import { Link } from "../../components/Link";
import { Image } from "../../components/Image";

export default function StudyHallProgram() {
  return (
    <section className="study-hall">
      <Head>
        <title>Emily Hansel | Study Hall | Program</title>
      </Head>

      <Link href="/studyhall/program">
        <Image
          src="/assets/img/studyhalls/program_title.png"
          alt="Study Hall"
          width={1261}
          height={600}
          style={{ margin: "0 0 1rem" }}
        />
      </Link>

      <ul className="hero">
        <li>May 16–18, 2024</li>
        <li>iMPACt Center for Art & Dance</li>
        <li>San Francisco, CA</li>
      </ul>
      <ul className="hero">
        <li>Thursday, May 16 at 7:30pm</li>
        <li>Friday, May 17 at 7:30pm</li>
        <li>Saturday, May 18 at 3:00pm & 7:30pm</li>
      </ul>

      <Image
        src="/assets/img/studyhalls/program_credits.png"
        alt="Credits"
        width={1453}
        height={346}
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      />

      <p>
        Choreographed and directed by
        <br />
        <b>Emily Hansel</b>
      </p>

      <p>
        Co-created and performed by
        <br />
        <b>Rebecca Fitton</b>
        <br />
        <b>gizeh muñiz vengel</b>
        <br />
        <b>Jocelyn Reyes</b>
        <br />
        <b>Erin Yen</b>
        <br />
      </p>

      <p>
        Original music by
        <br />
        <b>Sophia Cotraccia</b>
      </p>

      {/* <p>
        Additional music:
        <br />
        “Baby, I’m a Star” by Prince
      </p> */}

      <p>
        Lighting design by
        <br />
        <b>Thomas Bowersox</b>
      </p>

      <p>
        <i>Study Hall</i> is made possible by support from the San Francisco
        Arts Commission, Steppin’ Out Dance Studio, and a multitude of generous
        individual donors.
      </p>
      <p>
        Live Audio Description on May 18th by Europa Grace of Gravity Access
        Services is generously supported by the Ford Foundation.
      </p>
      <p>ASL interpretation on May 17th is provided by Pilar Marsh.</p>
      <p>
        Thank you to the dozens of local dancers and choreographers who attended
        our Community Study Halls and whose ideas were used as source material
        for both movement generation and sound design in this performance.
      </p>

      <Image
        src="/assets/img/fourbyfour/program_artists.png"
        alt="Artists"
        width={765}
        height={96}
        style={{ marginTop: "4rem", marginBottom: "3rem" }}
      />

      <div style={{ textAlign: "justify" }}>
        <Image
          src="/assets/img/studyhalls/program_emily.png"
          alt="Portrait of Emily Hansel"
          width={765}
          height={510}
          style={{ marginBottom: "2rem" }}
        />
        <p>
          <b className="name">Emily Hansel</b> is a San Francisco-based dancer,
          choreographer, dance teacher, arts administrator, and artist advocate.
          Originally from Rochester, Minnesota, Emily received their BFA in
          Dance from the University of South Florida. Emily currently dances for
          SFDanceworks, Post:ballet, Christy Funsch, and Mark Foehringer Dance
          Project. Emily has also performed Cunningham repertory in “
          <i>
            Signals from the West: Bay Area Artists In Conversation with Merce
            Cunningham at 100
          </i>
          ” and danced with Rebecca Fitton Projects, Robert Moses’ KIN,
          Garrett-Moulton Productions, David Herrera Performance Company,
          Jennifer Perfilio, FACT/SF, and ZiRu Dance, among others.
        </p>
        <p>
          Emily’s choreographic work, which is centered around dismantling
          systems of oppression in the concert dance field, has been
          commissioned by a variety of companies and presented at numerous
          venues throughout the Bay Area and across the country. Emily recently
          received an San Francisco Artist award from the San Francisco Arts
          Commission, an ODC Theater RDI Award, and was named an Individual
          Artist Fellow by the California Arts Council.
        </p>
        <p>
          Through their choreography, writing, speaking engagements, and other
          creative work, Emily advocates for equitable, ethical, and healthy
          working conditions for dancers. Emily is a proud member of the
          Leadership Committee at Dance Artists' National Collective, where they
          head up DANC's development of a{" "}
          <Link href="https://danceartistsnationalcollective.org/guide-for-building-a-dancers-contract/">
            contract-building tool for dancers
          </Link>
          . Emily is a passionate arts administrator and has worked in
          administrative roles for a number of artists/companies in addition to
          producing their own work.
        </p>
        <p>
          Emily occasionally teaches open classes and workshops for professional
          dancers and has taught ballet and contemporary to students ages 3
          through 18 for seven years at Berkeley Ballet Theater, the ODC School,
          Steppin' Out Dance Studio, and other schools.
        </p>
        <Image
          src="/assets/img/studyhalls/program_rebecca.png"
          alt="TODO: Rebecca Fitton"
          width={765}
          height={510}
          style={{ marginBottom: "2rem" }}
        />
        <p>
          <b className="name">Rebecca Fitton</b> is from many places and
          peoples. She nurtures community through movement, conversation, and
          food, and strives to equally prioritize her multiple roles in the
          field as an artist, administrator, and advocate. Fitton works as
          Co-Director/Director of Operations and Development for Bridge Live
          Arts and as Director of Studio Rawls for artist Will Rawls. She has
          been an artist-in-residence at Center, LEIMAY/CAVE, EMERGENYC, and The
          Croft. Their writing has been published by Triskelion Arts,{" "}
          <i>Emergency Index</i>,{" "}
          <Link href="https://dancersgroup.org/2022/01/making-public-our-private-exhaustion-gossip-and-unfinished-sentences/">
            <i>In Dance</i>
          </Link>
          ,{" "}
          <Link href="https://dancercitizen.org/issue-13/rebecca-fitton/">
            <i>The Dancer-Citizen</i>
          </Link>
          ,{" "}
          <Link href="http://www.etudesonline.com/dec2022fitton.html">
            <i>Etudes</i>
          </Link>
          ,{" "}
          <Link href="https://movementresearch.org/publications/critical-correspondence/finding-eros-by-rebecca-fitton-with-nora-alami/">
            <i>Critical Correspondence</i>
          </Link>
          , and{" "}
          <Link href="https://www.cambridge.org/core/journals/dance-research-journal/article/abs/funding-bodies-five-decades-of-dance-making-at-the-national-endowment-for-the-arts-by-sarah-wilbur-2021-middletown-ct-wesleyan-university-press-296-pp-18-photos-2695-paper-isbn-9780819580528-9500-hardcover-isbn-9780819580511/C6FB8CFBFABB6BC59D6EA498F3423BF6">
            <i>Dance Research Journal</i>
          </Link>
          . As an access practitioner, she narrates audio description for
          experimental dance and performance artists. They hold a BFA in Dance
          from Florida State University and an MA in Performance as Public
          Practice from the University of Texas at Austin.
        </p>
        <Image
          src="/assets/img/studyhalls/program_gizeh.png"
          alt="TODO: gizeh muñiz vengel"
          width={765}
          height={510}
          style={{ marginBottom: "2rem" }}
        />
        <p>
          <b className="name">gizeh muñiz vengel</b> is a Movement, Teaching and
          Performing artist. Mexicana, currently co-existing in Ohlone
          territory. They are dedicated to the study of being a body, through
          movement and stillness. Her choreographic work responds to processes
          of grief and joy, with an arduous commitment to transformation and
          presence. Her choreographic and teaching work has been shared in the
          United States, Mexico and Europe in festivals such as{" "}
          <Link href="https://improspekcije.com/en/">
            Improspeckje in Croatia
          </Link>
          ,{" "}
          <Link href="https://joegoode.org/see-us/gush/">
            GUSH in San Francisco
          </Link>{" "}
          and{" "}
          <Link href="https://en.luxboreal.org/4x4tjnight">4x4 in Tijuana</Link>
          , to mention some. gizeh is currently an artist in residency at{" "}
          <Link href="https://counterpulse.org/edge2024/">CounterPulse</Link>,{" "}
          <Link href="https://www.pushdance.org/baseresidency/">PUSH</Link>,{" "}
          <Link href="https://www.bandaloop.org/">BANDALOOP</Link> and in{" "}
          <Link href="https://www.bridgelivearts.org/">
            The Community Engagement Residency with Bridge Live Arts
          </Link>
          , and the{" "}
          <Link href="https://rawdance.org/radiate-2023-2025/">2023-25</Link>{" "}
          Radiate fellow of RAWdance. gizeh is curator and producer of{" "}
          <Link href="https://www.freshfestival.org/">KH FRESH Festival</Link>,{" "}
          <Link href="https://performanceprimers.com/">
            Performance Primers
          </Link>{" "}
          and{" "}
          <Link href="https://www.instagram.com/gatheringsinthebay/">
            Gatherings class series
          </Link>{" "}
          in the Bay Area.
        </p>
        <Image
          src="/assets/img/studyhalls/program_jocelyn.png"
          alt="TODO: Jocelyn Reyes"
          width={765}
          height={510}
          style={{ marginBottom: "2rem" }}
          className="dancer"
        />
        <p>
          <b className="name">Jocelyn Reyes</b> (she/her) is a Latin American
          contemporary choreographer, self-producer and dancer based in San
          Francisco. A first generation LA native, Reyes holds a B.S. in
          Cognitive Science and a B.A. in Dance from UCLA, and is the artistic
          director of REYES Dance. Reyes’ movement practice includes
          contemporary dance, improvisation and Latin social dances. Her
          choreographic work blends everyday gestures, athleticism, humor,
          abstraction and storytelling to question toxic behavioral patterns,
          heal and reimagine healthier ways of relating to ourselves and others.
          Reyes has produced three evening length works, presented choreography
          in many festivals/curated events, and received support from the
          California Arts Council, San Francisco Arts Commision, Kenneth Rainin
          Foundation, CASH Dance, the Berkeley Ballet Theater Residency and the
          Paul Dresher Ensemble Residency Program, among others. Reyes recently
          performed with Zaccho Dance Theater and is excited to share a new
          evening length dance work next fall at ODC Theater.
        </p>
        <Image
          src="/assets/img/studyhalls/program_erin.png"
          alt="TODO: Erin Yen"
          width={765}
          height={510}
          style={{ marginBottom: "2rem" }}
          className="dancer"
        />
        <p>
          <b className="name">Erin Yen</b> is a mixed-race professional dancer
          and choreographer currently residing in San Mateo, CA. Erin holds a
          BFA in Dance from the Ohio State University. She is fluent in Laban
          Movement Analysis, and she was the first to Labanotate work from
          acclaimed choreographer Doug Varone. Erin has performed works by
          artists such as Johannes Wieland and Bebe Miller, and she has danced
          with Alvin Ailey and BalletMet. Erin is the founder of{" "}
          <Link href="https://www.dragonsdance.com/">Dragons Dance</Link> 501c3,
          a contemporary dance company which empowers artists to create
          impactful artwork.
        </p>

        <p>
          <br />
        </p>

        <p>
          <b className="name">Sophia Cotraccia</b>, (she/they) is a drummer and
          composer based in Philadelphia. They are a recent graduate of Oberlin
          College and Conservatory, where they studied the religious roots of
          the Caribbean steelband. <i>Study Hall</i> is Sophia's second
          collaboration with Emily after <i>Four by Four</i> in May 2022.
        </p>

        <p>
          <br />
        </p>

        <p>
          <b className="name">Thomas Bowersox</b> is a lighting designer,
          production manager, and technical director, based in San Francisco. He
          graduated from the University of Southern Florida with a BA in
          Lighting Design. Select companies Thomas has worked with include
          ODC/Dance, 32 Sounds, The Independent, ACT, Deborah Slater Dance
          Theater, Club Fugazi, Capital Repertory Theater, and New York Live
          Arts
        </p>
        <p>
          <br />
        </p>
        <p>
          <i>Dancer photos by Natalia Perez. Emily’s photo by Robbie Sweeny.</i>
        </p>
        <h2>Community Study Halls</h2>
        <p>
          <i>Study Hall</i> is inspired by a series of public workshops that
          brought Bay Area dancers and choreographers/directors together in
          discussion about cultivating healthy, equitable workplaces in our
          contemporary dance field. <i>Study Hall</i>’s four cast members
          participated in these conversations alongside members of the community
          and brought their takeaways into the studio for the development of
          this performance. Our conversations covered topics including:
        </p>

        <ul>
          <li>Dreaming up a dancer’s utopia</li>
          <li>The emotional labor of writing about our work</li>
          <li>Ownership and credit in collaborative processes</li>
          <li>Building budgets that prioritize dancer pay</li>
          <li>How can we hold decision-makers accountable?</li>
          <li>Ideas for resource sharing</li>
        </ul>

        <p>
          These discussion topics were collectively determined in a community
          meeting where we utilized adrienne maree brown’s method for
          Emergent/Collective Agenda Development.
        </p>
        <p>
          Many Community Study Hall (CSH) participants and other community
          members have expressed a hunger for this kind of programming to
          continue into the future, and Emily is currently applying for funding
          to launch a continuation of the CSH series. If you have ideas for the
          future of this series or are interested in becoming a conversation
          facilitator, please reach out to Emily. If you’re interested in
          staying in the loop about future events, you can{" "}
          <Link href="">subscribe to Emily’s mailing list</Link> and/or{" "}
          <Link href="https://www.instagram.com/communitystudyhalls?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            follow Community Study Halls on Instagram
          </Link>
          .
        </p>
        <h2>Read about the creative process</h2>
        <p>
          In order to document, process, and share the lengthy creative process
          behind this production, the <i>Study Hall</i> artists wrote a diverse
          collection of pieces that are available on our{" "}
          <Link href="https://studyhallshow.substack.com/">Substack</Link>.
        </p>
        <h2>Film and audio description</h2>
        <p>
          A film of the <i>Study Hall</i> live performance (by Jacob Marks
          Productions), as well as an audio description of the film (by our very
          own Rebecca Fitton), will be available on-demand in August 2024.
        </p>
        <p>
          If you’d like to revisit the work or share <i>Study Hall</i> with
          folks who didn’t attend, you can{" "}
          <Link href="/studyhall/film">order the film + AD now</Link>.
        </p>
        <Image
          src="/assets/img/fourbyfour/program_connect.png"
          alt="Connect"
          width={765}
          height={96}
          style={{ marginTop: "3rem", marginBottom: "1rem" }}
        />
        <p>
          To keep in touch,{" "}
          <Link href="https://www.instagram.com/em_hansel/">
            follow Emily on Instagram
          </Link>{" "}
          and <Link href="">join Emily’s mailing list</Link>
        </p>
        <p>
          You’re invited to check out the{" "}
          <Link href="https://docs.google.com/spreadsheets/d/1NbUUDr8DPLEY-q6RJdGyzKl4dYkDJD75hT-7CTHLWTs/edit?usp=sharing">
            project budget
          </Link>{" "}
          to learn more about the expenses involved in producing{" "}
          <i>Study Hall</i>. If you’re interested in making a donation to
          support Emily and this work, you send a gift directly to Emily via{" "}
          <Link href="https://venmo.com/u/EmilyHansel">Venmo</Link> and{" "}
          <Link href="https://www.paypal.com/paypalme/emhansel">Paypal</Link>.
          Or make a tax-deductible donation via FACT/SF, Emily’s fiscal sponsor:
        </p>
        <p>
          <Link href="/donate" className="btn-old">
            Donate
          </Link>
        </p>
        <p>
          Please take a moment to fill out this brief, anonymous, demographic
          survey. (This information is important for Emily to have when applying
          to get funding for future projects.)
        </p>
        <p>
          <Link href="TODO:" className="btn-old">
            Demographic survey
          </Link>
        </p>
        <h2>In the community</h2>
        <p>TODO: Melissa’s show</p>
      </div>

      <style jsx>
        {`
          section {
            font-family: "Lato", sans-serif;
            margin: 0 auto 8rem;
            width: 100%;
            text-align: left;
          }

          section :global(img) {
            max-width: 100%;
            width: 100%;
            height: auto;
            border-radius: 2px;
          }

          p,
          ul {
            font-size: 18px;
            line-height: 26px;
            text-align: left;
            margin-bottom: 2rem;
            padding: 0 1.5rem;
          }

          p,
          ul,
          h2,
          section :global(.dancer) {
            padding: 0 1.5rem;
          }

          b {
            font-weight: 700;
          }

          ul.hero {
            margin: 2rem 0;
            list-style: none;
          }

          ul.hero li {
            padding-left: 0;
            margin-bottom: 0;
          }

          .name {
            font-size: 22px;
          }

          section :global(.btn-old) {
            display: inline-block;
            font-weight: normal;
            margin: 0.5rem 0;
            appearance: none;
            cursor: pointer;
            text-transform: uppercase;
            background: #fff;
            border-radius: 4px;
            border: none;
            padding: 6px 8px;
            font-size: 16px;
            color: black;
            white-space: nowrap;
          }

          section :global(.btn-old:hover) {
            text-decoration: none;
          }

          @media screen and (min-width: 1000px) {
            section {
              width: 60%;
            }
          }
        `}
      </style>
    </section>
  );
}
