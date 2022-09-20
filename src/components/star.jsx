export const Star = ({ index, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-star"
      key={index}
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
};

export const Rate = ({
  total,
  note,
  full: fullColor,
  empty: emptyColor,
  ...props
}) => {
  let stars = [];
  for (let index = 0; index < total; index++) {
    let fill = fullColor || "currentColor";
    if (index > note - 1) {
      fill = emptyColor || "none";
    }
    stars.push(Star({ ...props, fill, index }));
  }
  return <div className="flex">{stars}</div>;
};
