export default function Desert({
  image,
  name,
  category,
  price,
  selectedDeserts,
  onSelectDesert,
  onUpdateDesert,
  onDeleteDesert,
}) {
  const desert = selectedDeserts.find((el) => el.name === name);
  function handleSelectItem() {
    const newItem = {
      image,
      name,
      count: 1,
      price,
    };
    onSelectDesert(newItem);
  }
  function handleIncrementCount() {
    const newDesert = { ...desert, count: desert.count + 1 };
    onUpdateDesert(newDesert);
  }
  function handleDecrementCount() {
    if (desert.count - 1 === 0) {
      onDeleteDesert(desert.name);
      return;
    }
    const newDesert = { ...desert, count: desert.count - 1 };
    onUpdateDesert(newDesert);
  }
  return (
    <div className="desert">
      <div className="desert-img">
        <img
          className={desert ? "selected" : ""}
          src={image}
          alt={category}
        ></img>
        {!desert && (
          <button onClick={handleSelectItem} className="add-to-cart-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g fill="#C73B0F" clipPath="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
            <p>Add to cart</p>
          </button>
        )}
        {desert && (
          <div className="control-count">
            <button onClick={handleIncrementCount}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
            <p>{desert?.count}</p>
            <button onClick={handleDecrementCount}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <p>{category}</p>
      <p>{name}</p>
      <p>{`$${price}`}</p>
    </div>
  );
}
