export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItem = items.length;
  const numItemPacked = items.filter((items) => items.packed).length;
  const percent = Math.round((numItemPacked / numItem) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percent === 100
            ? "You got everything! Ready to fly ✈"
            : ` You have ${numItem} items on your list, and you already packed ${numItemPacked} (${percent}%)`}
        </em>
      </footer>
    </>
  );
}
