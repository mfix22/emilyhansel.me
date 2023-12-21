import React from "react";
import Image from "next/image";

export default function Donate() {
  return (
    <main>
      <article>
        <div className="panel">
          <h1>Donate</h1>
          <p>
            Emily Hansel is fiscally sponsored by FACT/SF. You can make a
            tax-deductible donation to Emily Hansel via FACT/SF using the PayPal
            button below.
          </p>

          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="9RLJC3VFF44Z2"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>

          <p>
            If you prefer, you can also make a tax-deductible donation to Emily
            Hansel via FACT/SF by sending a check to:
          </p>
          <p className="indent">
            FACT/SF
            <br />
            Attn: Emily Hansel Donation <br />
            80 Turk St <br />
            San Francisco, CA 94102
            <br />
          </p>
          <p>
            Please make sure the check's memo line reads "Emily Hansel donation"
            and that your address and/or email address is included so you can
            receive a receipt.
          </p>
        </div>
        <div className="panel">
          <Image
            src="/assets/img/dancing/13.png"
            width={960 * 0.55}
            height={1200 * 0.55}
            alt="Photo of Emily Hansel dancing."
          />
        </div>
      </article>
      <style jsx>{`
        main {
          max-width: 80%;
        }
        article {
          display: flex;
          gap: 6rem;
        }
        .indent {
          margin-left: 2rem;
        }
        form {
          margin-bottom: 1rem;
        }
        h1 {
          margin-top: 4rem;
        }
        @media screen and (max-width: 1000px) {
          article {
            flex-direction: column;
          }
          :global(img) {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
