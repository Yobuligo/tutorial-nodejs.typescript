import path from "path";

const error = (): never => {
  throw new Error();
};

export const appPath = path.dirname(require.main?.filename ?? error());
