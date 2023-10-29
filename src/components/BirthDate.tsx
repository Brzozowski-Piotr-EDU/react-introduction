export const Birthday = () => {
  const birthDate: Date = new Date("1999-08-12");
  const dateToDisplay: string = birthDate.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="container">
      <span className="text">Birthday:</span> {dateToDisplay}
    </div>
  );
};
