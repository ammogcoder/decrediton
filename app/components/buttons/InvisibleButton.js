const SlateGrayButton = ({ className, style, block, type, disabled, onClick, children }) => (
  <div
    className={"invisible-button" + (className ? (" " + className) : "")}
    style={({ ...style, display: block ? "block" : undefined })}
    {...{ type, disabled, onClick }}
  >{children}</div>
);

export default SlateGrayButton;
