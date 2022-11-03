const Line = ({ title, symbol }) => {
  return (
    <div className="div-line">
      <p>
        {symbol} {title}
      </p>
    </div>
  );
};

export default Line;
