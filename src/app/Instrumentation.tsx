import dbConnect from "../app/utils/ConnectDB";

export async function register() {
  await dbConnect();
}
