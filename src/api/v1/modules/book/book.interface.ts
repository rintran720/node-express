export type BookCreateType = {
  name: string;
  desc: string;
  author: string;
};

export type BookUpdateType = {
  name?: string;
  desc?: string;
  author?: string;
};

export type BookReplaceType = {
  name: string;
  desc: string;
  author: string;
};
