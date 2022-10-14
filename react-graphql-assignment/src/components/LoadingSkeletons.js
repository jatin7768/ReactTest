import { Skeleton } from "@mui/material";

function LoadingSkeletons() {
  return (
    <>
      {[1, 2, 3].map((val) => (
        <Skeleton key={val} variant="rectangular" width={200} height={100} />
      ))}
    </>
  );
}

export default LoadingSkeletons;
