import { BoxesLoader } from "react-awesome-loaders";

const Loader = () => {
  return (
    <>
      <BoxesLoader
        className={"loader"}
        boxColor={"#333333"}
        desktopSize={"144px"}
        style={{
          marginBottom: "20px",
        }}
      />
      <span className='sr-only'>Loading....</span>
    </>
  );
};
export default Loader;
