import Head from "next/head";
import { Link } from "../../components/Link";
import { Image } from "../../components/Image";

export default function FourByFourProgram() {
  return (
    <section>
      <Head>
        <title>Emily Hansel | Four by Four | Program</title>
      </Head>

      <Link href="/fourbyfour">
        <Image
          src="/assets/img/fourbyfour/program_title.png"
          alt="Four by Four"
          width={725}
          height={496}
          style={{ marginTop: "4rem", marginBottom: "1rem" }}
        />
      </Link>

      <ul>
        <li>May 26-28, 2022</li>
        <li>ODC Theater</li>
        <li>San Francisco, CA</li>
      </ul>
      <ul>
        <li>Thursday, May 26 at 7:00 pm</li>
        <li>Friday, May 27 at 7:00 pm</li>
        <li>Saturday, May 28 at 4:00 pm</li>
      </ul>

      <Image
        src="/assets/img/fourbyfour/program_program.png"
        alt="Program"
        width={765}
        height={96}
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      />

      <h3>PART ONE</h3>
      <i className="thin">pause</i>
      <h3>PART TWO</h3>
      <i className="thin">pause</i>
      <h3>PART THREE</h3>

      <Image
        src="/assets/img/fourbyfour/program_credits.png"
        alt="Credits"
        width={765}
        height={96}
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
        <b>Alex Carrington</b>
        <br />
        <b>Mia J. Chong</b>
        <br />
        <b>Shareen DeRyan</b>
        <br />
        <b>Chelsea Reichert</b>
        <br />
      </p>

      <p>
        Original music by
        <br />
        <b>Sophia Cotraccia</b>
        <br />
        <b>Ben Juodvalkis</b>
      </p>

      <p>
        Additional music:
        <br />
        “Romance” by Dmitri Shostakovich, arranged by Béla Detrekoy, performed
        by Sophia Cotraccia
      </p>

      <p>
        Lighting and scenic design by
        <br />
        <b>Thomas Bowersox</b>
      </p>

      <p>
        Production management by
        <br />
        <b>Thomas Bowersox</b>
      </p>

      <p>
        <i>Four by Four</i> is made possible by contributions from the
        California Arts Council, ODC Theater’s Rental Discount Initiative,
        Steppin’ Out Dance Studio, RoundAntennae, and a multitude of generous
        individual donors.
      </p>

      <Image
        src="/assets/img/fourbyfour/program_note.png"
        alt="A note from Emily"
        width={765}
        height={162}
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      />

      <div style={{ textAlign: "justify" }}>
        <p>What’s the show about?</p>

        <p>
          I don’t know. But I can tell you there’s a reason why it’s a dance
          performance and not a monologue. It’s hard for me to talk about my
          choreographic work; dance doesn’t function in the same way that
          language does. But I know that when I go to performances, I always
          crave the language, too. So here’s what I can tell you:
        </p>

        <p>
          Our performance is the result of a process that was centered around a
          few goals:
        </p>

        <ul className="dashed">
          <li>Creating a safe and equitable work environment</li>
          <li>Being adaptable and flexible</li>
          <li>Taking our time</li>
          <li>Practicing ongoing consent</li>
          <li>Embracing messiness and not knowing</li>
          <li>Opposing our capitalist tendencies toward productivity</li>
        </ul>

        <p>
          There are several ironies at play here. Our not knowing led us to know
          new things. We took all the time we wanted until we got to theater
          week and only had three days to get the show up. In order to create
          any semblance of refusing capitalism, we spent lots of time
          considering various economic factors, like contracts, fundraising, and
          artist pay. And, evidently, our laid back, anti-capitalist studio time
          delivered a literal product that I’m inviting people to pay to attend.
        </p>

        <p>
          In this product, you’ll witness some fairly abstract stuff—stuff that
          both means a lot and means nothing at all. Everything has really
          specific meaning, and everything has whatever meaning you decide it
          has. There’s plenty to get, nothing to get, you get what you get.
        </p>

        <p>
          <i>Four by Four</i> is for, about, and by the four performers on the
          stage. And I guess it’s also a little bit for, about, and by me.
        </p>

        <p>—Emily</p>
      </div>

      <Image
        src="/assets/img/fourbyfour/program_artists.png"
        alt="Artists"
        width={765}
        height={96}
        style={{ marginTop: "4rem", marginBottom: "3rem" }}
      />

      <div style={{ textAlign: "justify" }}>
        <Image
          src="/assets/img/fourbyfour/program_emily.jpeg"
          alt="Portrait of Emily Hansel"
          width={765}
          height={510}
          style={{ marginBottom: "1rem" }}
        />

        <p>
          <b>Emily Hansel, Choreographer and Director</b>, (she/they) is a San
          Francisco-based dancer, choreographer, dance teacher, arts
          administrator, and artist advocate. Originally from Rochester,
          Minnesota, Emily received her BFA in Dance from the University of
          South Florida. Emily currently dances for Post:ballet, Robert Moses’
          KIN, Christy Funsch, and Mark Foehringer Dance Project. Emily has also
          performed Cunningham repertory in
          <i>
            Signals from the West: Bay Area Artists In Conversation with Merce
            Cunningham at 100
          </i>{" "}
          and danced with Garrett + Moulton Productions, FACT/SF, ZiRu Dance,
          The Anata Project, Talli Jackson, Marika Brussel, Alma Esperanza
          Cunningham, and SOULSKIN Dance, among others
        </p>

        <p>
          Emily’s choreographic work centers the dancer’s experience. Most
          recently, Emily was commissioned to create a new work for the Berkeley
          Ballet Theater Studio Company, which premiered in March 2022 at
          BAMPFA. <i>Four by Four</i> is Emily’s first self-produced,
          evening-length choreographic work. Emily is a RoundAntennae
          choreographer, under the mentorship of KT Nelson.
        </p>

        <p>
          Emily advocates for equitable and ethical working conditions for
          dancers, and she has written numerous articles on this topic for the
          “Life as a Modern Dancer” blog. Emily is a proud member of the
          Leadership Committee at Dance Artists’ National Collective.
        </p>

        <p>
          When she isn’t performing or choreographing, Emily teaches ballet and
          contemporary to students ages 3-18 and works in administrative roles
          for a number of artists/companies in addition to producing her own
          work.
        </p>

        <Image
          src="/assets/img/fourbyfour/program_alex.jpeg"
          alt="Alex Carrington, wearing red, curls and twists her arms and legs."
          width={765}
          height={510}
          style={{ marginTop: "2rem", marginBottom: "1rem" }}
        />

        <p>
          <b>Alex Carrington, Dancer and Co-creator</b>, (she/they) received the
          majority of her training at the University of North Carolina School of
          the Arts and the LINES Ballet Training Program. She has danced for
          Margaret Jenkins Dance Company, tinypistol, detour dance, Kristin
          Damrow & Company, little seismic dance company, and in addition has
          performed works by Crystal Pite, Yin Yue, Katie Wong, Andrea Peña, and
          Nick Korkos.
        </p>

        <Image
          src="/assets/img/fourbyfour/program_mia.jpeg"
          alt="Mia J. Chong, wearing shades of blue, bands over straight legs and reaches one arm straight to the side."
          width={765}
          height={510}
          style={{ marginTop: "2rem", marginBottom: "1rem" }}
        />

        <p>
          <b>Mia J. Chong, Dancer and Co-creator</b>, (she/they) is from San
          Francisco, California. She received her training from the Kirov
          Academy of Ballet, San Francisco Ballet School, the Ailey School,
          Alonzo King LINES Ballet, Hubbard Street Dance Chicago, the School at
          Jacob’s Pillow’s Contemporary Program, and ODC School. Mia has danced
          with Post:ballet, Robert Moses’ Kin, Dance Theatre of San Francisco,
          and San Francisco Symphony. She has received a Princess Grace Award,
          Chris Hellman Dance Honor, Aninstantia Foundation Grant, LINES Ballet
          Homer Avila Award, Jacob’s Pillow Ann & Weston Hicks Choreography
          Fellowship, and Isadora Duncan Dance Awards and nominations. Mia
          currently studies Organizational Behavior and Change at New York
          University and dances with ODC/Dance, where she joined as an
          apprentice in 2016 and became a company dancer in 2018. She currently
          choreographs dance works throughout the San Francisco Bay Area. Please
          visit{" "}
          <Link href="http://miajchong.com" target="_blank">
            miajchong.com
          </Link>{" "}
          to learn more.
        </p>

        <Image
          src="/assets/img/fourbyfour/program_shareen.jpeg"
          alt="Shareen DeRyan, wearing turquoise and maroon, places her hands in the air with specificity."
          width={765}
          height={510}
          style={{ marginTop: "2rem", marginBottom: "1rem" }}
        />

        <p>
          <b>Shareen DeRyan, Dancer and Co-creator</b>, (she/her) received her
          initial training at Ballet Arts Academy in Spokane, Washington and
          trained at Lines Ballet in San Francisco. In Portland Oregon she
          danced for a contemporary ballet company, Bouand Dance. In the Bay
          Area she has danced for Kinetech Arts for three years and performed in
          works by Sidra Bell, Jon Kinzel, Christian Burns, Robert Moses, Amy
          Foley, Karla Quintero, Mark Foehringer, Amelia Eisen and Christy
          Funsch. She has danced for companies in the Bay Area including:
          Fullstop Dance, Mud Water Theatre, ZiruDance, and Bellwether Dance
          Project. Currently Shareen is in her fifth year of dancing for Kristin
          Damrow & Company and Jennifer Perfilio Movement Works.
        </p>

        <Image
          src="/assets/img/fourbyfour/program_chelsea.jpeg"
          alt="Chelsea Reichert, wearing purple, twists her arms and torso while her braid swings out to the opposite side."
          width={765}
          height={510}
          style={{ marginTop: "2rem", marginBottom: "1rem" }}
        />

        <p>
          <b>Chelsea Reichert, Dancer and Co-creator</b>, (she/her) is a
          freelance dance artist originally from Kansas, and currently based in
          the Bay Area. She received a BFA in dance from Marymount Manhattan
          College, and also studied at the San Francisco Conservatory of Dance.
          She’s grateful for the friends and teachers inside and outside of
          these structures that have influenced her work deeply. Since living in
          the Bay Area, she’s had the pleasure of creating and performing with
          Maurya Kerr/tinypistol, Sharp&Fine, kickbal, Courtney Mazeika,
          Kinetech Arts, Nicole von Arx, Larry Arrington, Risa Jaroslow, and
          Emily Hansel. She’s stoked to be working with Emily, Shareen, Mia, and
          Alex on this project.
        </p>

        <p>
          <br />
        </p>

        <p>
          <b>Sophia Cotraccia, Composer and Musician</b>, (she/they) is a senior
          at Oberlin College and Conservatory, where they study musical and
          religious traditions from South Asia. Sophia plays the violin, the
          drumset, and the steelpan, and enjoys writing and recording music in
          her free time. They hail originally from Ithaca, NY and look forward
          to returning to the East Coast upon graduating.
        </p>

        <p>
          <br />
        </p>

        <p>
          <b>Ben Juodvalkis, Composer and Musician</b>, (he/him) composes
          original music for dance, film, theater, corporate events, and museum
          installations. He has created scores for over 50 organizations and has
          had his music performed on four continents. Ben works from his studio
          in San Francisco as well as on location with his mobile custom built
          electronic instruments.
        </p>

        <p>
          <br />
        </p>

        <p>
          <b>
            Thomas Bowersox, Lighting and Scenic Designer and Production Manager
          </b>
          , (he/him) is a lighting designer, production manager, and technical
          director, based in San Francisco. He graduated from the University of
          Southern Florida with a BA in Lighting Design. Select companies Thomas
          has worked with include ODC/Dance, 32 Sounds, The Independent, ACT,
          Deborah Slater Dance Theater, Club Fugazi, Capital Repertory Theater,
          and New York Live Arts.
        </p>

        <p>
          <br />
        </p>

        <p>
          <i>
            Dancer photos by Steve Disenhof. Emily’s photo by Robbie Sweeny.
          </i>
        </p>

        <Image
          src="/assets/img/fourbyfour/program_connect.png"
          alt="Connect"
          width={765}
          height={96}
          style={{ marginTop: "3rem", marginBottom: "1rem" }}
        />

        <p>
          Please take a moment to fill out this brief, anonymous, demographic
          survey. (This information is important for Emily to have when applying
          to get funding for future projects.)
        </p>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSf5rjziTMGGLXBav_yak8t62o0iqyEnpGYg5VBKOed3IgpQbQ/viewform?usp=sf_link"
          className="btn-old"
        >
          Demographic survey
        </Link>

        <p>
          You’re invited to write a note to the artists, or to share any
          feelings or responses you have about today’s show, either anonymously
          or with your name attached.
        </p>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSd-HMX6v9WYP5ykwJZG2fT78-QDQMO6cz96zwQkcGHeUz8Oyg/viewform?usp=sf_link"
          target="_blank"
          className="btn-old"
        >
          Share a response
        </Link>

        <p>
          If you want to stay in touch, you can email Emily at{" "}
          <Link href="mailto:emily@emilyhansel.me">emily@emilyhansel.me</Link>{" "}
          or subscribe to her email newsletters to stay in the loop.
        </p>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScB-Vb7sSYFlD8ob0Lc_rr00DsfiYI31Um1NMOlfp72rIpiOw/viewform?usp=sf_link"
          target="_blank"
          className="btn-old"
        >
          Subscribe
        </Link>

        <p>
          You’re invited to check out the{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/17Y3JT9glywDPLDD9cYtv2FwYSViGZLAsBNb8fDeneYM/edit?usp=sharing"
            target="_blank"
          >
            project budget
          </Link>{" "}
          to learn more about the expenses involved in producing{" "}
          <i>Four by Four</i>. If you’re interested in making a donation to
          support the work, you can do so via Venmo (@EmilyHansel) or Paypal (
          <Link href="http://paypal.me/emhansel" target="_blank">
            paypal.me/emhansel
          </Link>
          ).
        </p>
      </div>

      <Image
        src="/assets/img/fourbyfour/kids/tiles.png"
        alt=""
        width={240}
        height={50}
        style={{
          margin: "3rem auto 1rem",
          width: 240,
        }}
      />

      <br />

      <Link href="/assets/ABOUT_ODC_THEATER.pdf?v=1">
        Learn more about ODC Theater
      </Link>

      <style jsx>
        {`
          section {
            font-family: "Lato", sans-serif;
            --theme: #829af1;
            margin: 0 auto 8rem;
            width: 60%;
            text-align: center;
          }

          section :global(img) {
            max-width: 100%;
            width: auto;
            height: auto;
          }

          p {
            font-size: 18px;
            line-height: 26px;
            text-align: inherit;
          }

          b {
            font-weight: 700;
          }

          ul {
            margin: 2rem 0;
          }

          ul.dashed {
            margin-left: 1rem;
            list-style-type: none;
          }
          ul.dashed > li {
            text-indent: -1.5rem;
            font-weight: 300;
          }
          ul.dashed > li:before {
            content: "- ";
          }

          h2 {
            color: #fff;
            font-size: 32px;
            font-weight: 100;
            text-transform: uppercase;
            margin: 3rem auto 2rem;
          }

          h3 {
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 16px;
            text-transform: uppercase;
            color: #fff;
            margin: 1rem auto;
          }

          .thin {
            font-weight: 300;
            opacity: 0.8;
          }

          section :global(.btn-old) {
            font-weight: normal;
            display: block;
            width: fit-content;
            appearance: none;
            cursor: pointer;
            text-transform: uppercase;
            background: #fff;
            border-radius: 4px;
            border: none;
            padding: 6px 8px;
            font-size: 16px;
            color: black;
            margin: 2rem auto;
          }

          section :global(.btn-old:hover) {
            text-decoration: none;
          }

          .image-bar {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            margin: 2rem 0 3rem;
          }

          .image-bar :global(img) {
            border-radius: 4px;
          }
        `}
      </style>
    </section>
  );
}
