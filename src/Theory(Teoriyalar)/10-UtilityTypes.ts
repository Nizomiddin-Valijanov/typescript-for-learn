interface User {
  id: string;
  name: string;
  email: string;
}

// User interface dagi barcha xususiyatlarni ixtiyoriy qilish
const updateUser: Partial<User> = {
  name: "John Doe",
};

// User tipidagi barcha xususiyatlarni majburiy qilish
const newUser: Required<User> = {
  id: "UUID",
  name: "John Doe",
  email: "example@gmail.com",
};

//User tipidagi barcha xususiyatlarni faqat o'qish mumkin qilish
const user: Readonly<User> = {
  id: "UUID",
  name: "John Doe",
  email: "examole@gmailc.com",
};

// String kalitlari va User qiymatlarni bilan xaritalash
const users: Record<string, User> = {
  john: {
    id: "UUID",
    name: "John Doe",
    email: "johnjohn",
  },
  jane: {
    id: "UUID",
    name: "Janu Doe",
    email: "janejane",
  },
};

// User tipidan faqat id va name xususiyatlarini tanlash
const userPreview: Pick<User, "id" | "name"> = {
  id: "UUID",
  name: "John Doe",
};

// User tipidan email xusiyatlarini 
const userWithoutEmail: Omit<User, "email"> = {
  id: "UUID",
  name: "John",
};
