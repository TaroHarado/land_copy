import { FC, PropsWithChildren } from "react";

export const ErrorWrapper: FC<PropsWithChildren<{ error: string }>> = ({
  children,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
      {error && (
        <p className="font-inter text-sm font-normal text-red-500">{error}</p>
      )}
    </div>
  );
};
