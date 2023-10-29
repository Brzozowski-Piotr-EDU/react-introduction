export const PresentSuggestion = () => {
  const presentSuggestions: string[] = [
    "Book 101 useful tips",
    "Pair of good heaphones",
    "Ticket to the cinema",
    "Gift card to local clothing store",
    "Dinner on good restraunt",
    "Just your time",
  ];

  const suggestedPresentIndex: number = Math.round(
    Math.random() * presentSuggestions.length
  );

  const presentProposition: string = presentSuggestions[suggestedPresentIndex];

  return (
    <div className="container">
      <span className="text">You can buy him/her:</span> {presentProposition}
    </div>
  );
};
