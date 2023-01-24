import { useEffect, useState } from "react";
import { Button } from "../atoms/Button";

export const About = ({ aboutContent, locale }) => {
  const { title, subtitle, image, description, cv, id } = aboutContent;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => {
      if (index + 1 === subtitle.length) {
        setIndex(0);
      } else {
        setIndex((i) => i + 1);
      }
    };
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, [index, locale, subtitle.length]);

  return (
    <section className="md:flex" id={id}>
      <div
        style={{
          backgroundImage: `url(${
            image?.url ?? "../../default-banner-image.jpeg"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="md:w-1/2 h-96 md:h-auto"
      ></div>
      <div className="md:w-1/2 bg-slate-900 p-10 flex justify-center text-white flex-col">
        <h2 className="uppercase font-bold text-xl">{title}</h2>
        <p className={"font-mono text-4xl text-gray-100 my-5 lg:pb-5"}>
          {subtitle[index]}
        </p>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        {cv?.url && (
          <div className="lg:py-10 transition-all duration-500">
            <Button
              text={cv?.text ?? "Download CV"}
              link={cv?.url}
              newTab={true}
              additionalClasses={"uppercase mt-5"}
            />
          </div>
        )}
      </div>
    </section>
  );
};
