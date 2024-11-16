type IBlog = {
  id?: number
  slug: string;
  content: string;
  createdAt: string;
  images?: object,
  name: string,
  users: IUser
}

type IUser = {
  name: string;
  username: string;
  email: string;
}

type IAccount = {
  name: string,
  username: string
}

type ITicket = {
  username: string|undefined;
  blog: number|undefined;
}

interface ImageProps {
  path?: IPath[] | undefined;
}

interface IPath {
  id: number;
  path: string;
}