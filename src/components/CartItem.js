import React from "react";

function CartItem(props) {
  const { id, count } = props;
  const { deleteitem, increment } = props;
  return (
    <div>
      <button
        type="button"
        className={
          count === 0
            ? "btn btn-warning text-dark m-1 btn-value"
            : "btn btn-info m-1 btn-value"
        }
      >
        {count === 0 ? <b>Zero</b> : <b>{count}</b>}
      </button>
      <button
        type="button"
        onClick={() => increment(id)}
        className="btn btn-secondary m-1 btn-increment"
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => deleteitem(id)}
        className="btn btn-danger m-1 btn-delete"
      >
        Delete
      </button>
    </div>
  );
}

export default CartItem;
