import { Link } from "react-router-dom";

type CardType = {
  thumbnail: string | undefined;
  date?: string;
  title?: string;
  description?: string;
  callToActionText?: string;
  calllToActionLink: string;
};

const Card = ({
  thumbnail,
  date,
  title,
  description,
  callToActionText,
  calllToActionLink,
}: CardType) => {
  return (
    <div className="w-full max-w-2xl h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
      <Link to={calllToActionLink}>
        <article className="w-full h-full">
          <figure className="w-full h-1/2 border-black border-b-2">
            <img
              src={thumbnail}
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="px-6 py-5 text-left h-full">
            {date && <p className="text-base mb-4">{date}</p>}
            {title && <h1 className="text-[32px] mb-4">Neo Brutallism</h1>}
            {description && (
              <p className="text-xs mb-4 line-clamp-4">
                Neobrutalism is an aesthetic characterized by high contrast
                elements, bright colors, and bold shapes. It is often used to
                make a statement, as it is meant to be eye-catching and stand
                out to the viewer. It is also used in user interface and web
                design, with features such as vibrant colors and bold shapes.
                Neobrutalism can also be used in print design, with an example
                being a bold shape with a vibrant color fill applied to it.
              </p>
            )}
            {callToActionText && <strong>{callToActionText}</strong>}
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Card;
