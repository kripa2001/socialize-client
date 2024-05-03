import { BiSolidLike } from "react-icons/bi";
function Like({ color = "", height = "20", width = "20", style }) {
  return (
    <BiSolidLike
      aria-hidden="true"
      height={height}
      viewBox="0 0 16 16"
      width={width}
      fill={color}
      style={style}
    />
  );
}

export default Like;
