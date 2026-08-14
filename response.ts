type Article = {
  id: string;
  title: string;
  status: "published" | "draft";
  author: {
    name: string;
  };
  stats: {
    views: number;
  };
};

type ApiResponse = {
  data: Article[];
  meta: {
    total: number;
  };
};

const apiResponse: ApiResponse = {
  data: [
    {
      id: "a1",
      title: "Learning JavaScript",
      status: "published",
      author: { name: "Ava Stone" },
      stats: { views: 1200 },
    },
    {
      id: "a2",
      title: "Draft Notes",
      status: "draft",
      author: { name: "Noah Kim" },
      stats: { views: 50 },
    },
    {
      id: "a3",
      title: "Async Basics",
      status: "published",
      author: { name: "Mina Patel" },
      stats: { views: 900 },
    },
  ],

  meta: {
    total: 3,
  },
};

export default apiResponse;