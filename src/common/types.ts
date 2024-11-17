type IBlog = {
  id?: number
  slug: string;
  content: string;
  createdAt: string;
  images?: object,
  name: string,
  users: IUser,
  comments: IComment[]
}

type IUser = {
  name: string;
  username: string;
  email: string;
}

type IComment = {
  id: number;
  comment: string;
  createdAt: string;
  user: IUser;
}

type IAccount = {
  name: string,
  username: string,
  email: string
}

type IPeople = {
  name?: string;
  email?: string;
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