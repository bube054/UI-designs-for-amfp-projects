type Categories = "programming" | "money" | "real-estate" | "security" | "AI" | "education" // AND SOO ON

type Post = {
  id: number; // (POSTS UNIQUE ID)
  postedBy: number; // (id of user who posted the post)
  title: string;
  message: string;
  image: string;
  category1: Categories;
  category2?: Categories;
  category3?: Categories;
  category4?: Categories;
  category5?: Categories;
  date_created: Date;
  date_last_edited: Date;
  date_published: Date;
  is_published: boolean;
} 

type Reply = {
  id: number;
  repliedBy: number;
  message: string;
  post: number;
  image?: string;
  date_created: Date;
  date_last_edited: Date;
  is_published: boolean;
}

type SubReply = {
  id: number;
  repliedBy: number;
  message: string;
  reply: number;
  date_created: Date;
  date_last_edited: Date;
  is_published: boolean;
}

type View = {
  id: number;
  for: number;
  viewedBy: number;
  date_seen: Date;
}

type Like = {
  id: number
  for: number;
  likedBy: number;
  date_liked: Date;
}

type Dislike = {
  id: number
  for: number;
  by: number;
  date_disliked: Date;
}

// views.filter(v => v.for === post.id).length