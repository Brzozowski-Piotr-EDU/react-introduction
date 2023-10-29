export const Wishes = () => {
  const whishes: string[] = [
    "Wishing you a day filled with joy!",
    "Wishing you a day filled with joy!",
    "May your day be as special as you are.",
    "Another year, another adventure. Happy birthday!",
    "Here's to health, happiness, and lots of cake!",
    "May all your dreams come true on your special day.",
    "A year older, a year wiser. Happy birthday!",
  ];

  const randomWish: string =
    whishes[Math.round(Math.random() * whishes.length)];

  return (
    <div className="wishes">
      <p>{randomWish}</p>
    </div>
  );
};
