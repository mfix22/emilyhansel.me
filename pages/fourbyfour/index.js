import Head from "next/head";
import { Link } from "../../components/Link";
import { Image } from "../../components/Image";

export default function FourByFour() {
  return (
    <section>
      <Head>
        <title>Emily Hansel | Four by Four</title>
      </Head>

      <Link href="/fourbyfour">
        <Image
          src="/assets/img/fourbyfour/title.png"
          alt="Four by Four"
          width={772}
          height={76}
          style={{ marginTop: "4rem", marginBottom: "1.5rem" }}
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
        <li>
          Saturday, May 28 at 4:00 pm<super>*</super>
        </li>
      </ul>

      <Link href="https://odc.dance/fourbyfour" className="btn-old">
        Buy tickets
      </Link>

      <div className="image-bar">
        <Image
          src="/assets/img/fourbyfour/shareen.jpg"
          alt="Shareen DeRyan, wearing turquoise and maroon, places her hands in the air with specificity."
          tabindex="0"
          width={180}
          height={180}
        />
        <Image
          src="/assets/img/fourbyfour/mia.jpg"
          alt="Mia J. Chong, wearing shades of blue, bands over straight legs and reaches one arm straight to the side."
          tabindex="0"
          width={180}
          height={180}
        />
        <Image
          src="/assets/img/fourbyfour/chelsea.jpg"
          alt="Chelsea Reichert, wearing purple, twists her arms and torso while her braid swings out to the opposite side."
          tabindex="0"
          width={180}
          height={180}
        />
        <Image
          src="/assets/img/fourbyfour/alex.jpg"
          alt="Alex Carrington, wearing red, curls and twists her arms and legs."
          tabindex="0"
          width={180}
          height={180}
        />
      </div>

      <p>
        Choreographed by Emily Hansel and co-created by dancers Alex Carrington,
        Mia J. Chong, Shareen DeRyan, and Chelsea Reichert, <i>Four by Four</i>{" "}
        is a messy attempt at refusing productivity. Since beginning work in
        November 2021, the artists have been practicing the radical act of not
        knowing. They’ve been fighting their capitalist tendencies, taking their
        time, embracing messiness, and prioritizing adaptability.{" "}
        <i>Four by Four</i>, featuring original music composed by Sophia
        Cotraccia and Bed Juodvalkis and lighting design by Thomas Bowersox, is
        a contemporary dance that is simultaneously light-hearted, serious,
        ordinary, and one-of-a-kind.
      </p>

      <p>
        <i>Four by Four</i> is made possible by contributions from the
        California Arts Council, ODC Theater’s Rental Discount Initiative,
        Steppin’ Out Dance Studio, and RoundAntennae.
      </p>

      <p>
        Tickets are available at a variety of price points and no one will be
        turned away for lack of funds. Ticket buyers are encouraged to consider
        their economic status when deciding which tickets to purchase. If price
        is a barrier for you, please email{" "}
        <Link href="mailto:emily@emilyhansel.me" target="_blank">
          emily@emilyhansel.me
        </Link>{" "}
        to receive a complimentary ticket. Please note that ODC Theater requires
        all patrons to show proof of up to date COVID-19 vaccination status,
        which includes boosters for those eligible. Unfortunately, this means
        that children under age 5, who are not eligible for vaccines at this
        time, are not invited into ODC's buildings. Learn more at{" "}
        <Link href="https://odc.dance/reopening" target="_blank">
          ODC.dance/reopening
        </Link>
        .
      </p>

      <p>
        <super>*</super>Saturday's performance will include a free, pre-show
        event for kids ages 5-12.{" "}
        <Link href="/fourbyfour/kids">Learn more and RSVP</Link>.
      </p>

      <h2>Accessibility</h2>

      <p>
        <strong>Attend the in-person performance</strong>
        <br />
        The performance is just over an hour long and will include audience
        breaks/intermissions every 15-20 minutes. ODC Theater is an ADA
        accessible building and includes ADA accessible all-gender bathrooms.
        All audience members will be required to wear a mask throughout the
        duration of their visit to ODC Theater.
      </p>

      <Link href="https://odc.dance/fourbyfour" className="btn-old">
        Get tickets
      </Link>

      <p>
        <strong>Watch the performance online</strong> <br />A film version of{" "}
        <i>Four by Four</i> will be available on-demand July 1-31, 2022. This
        video will include open captions in English. You will be emailed
        instructions for accessing the film on or before July 1, 2022.
      </p>

      <Link href="/fourbyfour/video" className="btn-old">
        Get the film
      </Link>

      <p>
        <strong>Listen to an audio description online</strong>
        <br />
        An English audio description of the <i>Four by Four</i> film will be
        available on-demand July 1-31, 2022. You will be emailed instructions
        for accessing the audio description on or before July 1, 2022.
      </p>

      <Link href="/fourbyfour/audio" className="btn-old">
        Get the audio description
      </Link>

      <p>
        Patrons are invited to correspond with Emily (
        <Link href="mailto:emily@emilyhansel.me" target="_blank">
          emily@emilyhansel.me
        </Link>
        ) about specific accessibility concerns or questions.
      </p>

      <h2>
        More About <i>Four by Four</i>
      </h2>

      <p>
        <i>Four by Four</i> is Emily Hansel’s first self-produced,
        evening-length choreographic work. This project also marks the first
        time she’s formed a business, hired dancers as employees, and managed
        such a substantial project budget.{" "}
        <Link href="/fourbyfour/ask">
          Learn more about this process, check out the project budget, and
          consider making a donation
        </Link>
        .
      </p>

      <style jsx>
        {`
          section {
            --theme: #829af1;
            margin: 0 auto 8rem;
            max-width: 60%;
            text-align: center;
          }

          ul {
            margin: 2rem 0;
          }

          h2 {
            font-family: "Lato", sans-serif;
            color: #fff;
            font-size: 32px;
            font-weight: 100;
            text-transform: uppercase;
            margin: 3rem auto 2rem;
          }

          section :global(.btn-old) {
            font-weight: normal;
            display: inline-block;
            appearance: none;
            cursor: pointer;
            text-transform: uppercase;
            background: #fff;
            border-radius: 4px;
            border: none;
            padding: 6px 8px;
            font-size: 16px;
            color: black;
            margin: 2rem 0;
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
