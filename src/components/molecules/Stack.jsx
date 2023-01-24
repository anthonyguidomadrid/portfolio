import { useEffect, useState } from "react";
import { removeEmptySpaceAndHighCase } from "../../helpers/tranformString";
import { useIsFirstRender } from "../../customHooks/useIsFirstRender";
import classNames from "classnames";
import { ReactComponent as Chevron } from "../../assets/Chevron.svg";

export const Stack = ({ stackContent }) => {
  const { id, title, subtitle, technologies } = stackContent;
  const isFirstRender = useIsFirstRender();
  const [isAccordionOpen, setAccordionOpen] = useState(null);

  useEffect(() => {
    if (isFirstRender && technologies.length > 0) {
      return setAccordionOpen(
        technologies.reduce(
          (o, key) => ({
            ...o,
            [removeEmptySpaceAndHighCase(key.title)]: false,
          }),
          {}
        )
      );
    }
  }, [isFirstRender, technologies]);

  const handleAccordionClick = (item) => {
    const key = removeEmptySpaceAndHighCase(item);
    const obj = { ...isAccordionOpen };
    obj[key] = !obj[key];
    return setAccordionOpen(obj);
  };

  return (
    <section
      id={id}
      className="bg-slate-900 text-white px-10 md:px-36 lg:px-48 xl:px-80 transition-all duration-500"
    >
      {title && (
        <div className="text-center py-14">
          <h2 className="uppercase font-bold text-xl">{title}</h2>
          {subtitle && (
            <p className="font-mono text-2xl text-gray-100 md:my-5 md:mx-24 mt-7">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="flex flex-col pb-16">
        {isAccordionOpen &&
          technologies?.map((item, idx) => {
            const { title, techList } = item;
            const isOpen =
              isAccordionOpen?.[removeEmptySpaceAndHighCase(title)];
            return (
              <div
                key={idx}
                className={classNames({
                  "border-b": idx + 1 !== technologies.length,
                })}
              >
                <div
                  onClick={() => handleAccordionClick(title)}
                  className={classNames(
                    "flex justify-between p-5 transition-all duration-500",
                    { "pb-10": isOpen }
                  )}
                >
                  <p className="font-extrabold text-lg">{title}</p>
                  <button>
                    <Chevron className={classNames({ "rotate-270": isOpen })} />
                  </button>
                </div>
                {techList?.length > 0 && (
                  <div
                    className={classNames(
                      "grid grid-flow-col gap-4 overflow-hidden transition-all max-h-0 duration-500 px-5",
                      { "max-h-96 pb-5": isOpen },
                      { "sm:grid-rows-3": techList.length >= 3 },
                      { "grid-rows-5": techList.length >= 5 },
                      { "grid-rows-2": techList.length < 5 }
                    )}
                  >
                    {techList.map((item, idx) => {
                      return (
                        <span className="mb-5" key={idx}>
                          {item}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};
